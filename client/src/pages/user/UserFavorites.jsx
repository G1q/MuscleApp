/* eslint-disable react/jsx-key */
import styles from './UserProfile.module.css'
import './UserProfile.css'
import { useAuth } from '../../contexts/AuthContext'
import useFetchData from '../../hooks/useFetchData'
import ExerciseCard from '../../components/ExerciseCard'
import { RiDeleteBinLine } from 'react-icons/ri'
import axiosInstance from '../../config/axios.config'
import toast from 'react-hot-toast'

const UserFavorites = () => {
	const { getUserId } = useAuth()
	const { data: user } = useFetchData(`/users/${getUserId()}`)

	const deleteFromFavoritesList = async (id) => {
		user.favorites = user.favorites.filter((favorite) => favorite._id !== id)
		// TODO: delete

		try {
			await axiosInstance.put(`/users/${id}`, user)
			toast.success('Exercise remove from favorites list!', { position: 'top-right', id: 'remove-from-fav-list' })
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'remove-from-fav-list' })
				: toast.error(error.message, { position: 'top-right', id: 'remove-from-fav-list' })
		}
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Favorites list</h1>
			{user.favorites && user.favorites.length > 0 ? (
				<ul className="favorites__list">
					{user.favorites.map((favorite) => (
						<li key={favorite._id}>
							<ExerciseCard
								exercise={favorite}
								noImage={true}
							/>
							<button
								className="favorites__list--remove-btn"
								title="Remove this exercise from favorites list"
								onClick={() => deleteFromFavoritesList(favorite._id)}
							>
								<RiDeleteBinLine />
							</button>
						</li>
					))}
				</ul>
			) : (
				'No exercises added in this list!'
			)}
		</main>
	)
}

export default UserFavorites
