/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import styles from './UserProfile.module.css'
import './UserProfile.css'
import { useAuth } from '../../contexts/AuthContext'
import ExerciseCard from '../../components/ExerciseCard'
import { RiDeleteBinLine } from 'react-icons/ri'
import axiosInstance from '../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'

const UserFavorites = () => {
	const { getUserId } = useAuth()
	const [user, setUser] = useState({})

	const id = getUserId()

	useEffect(() => {
		getUser()
	}, [id])

	const getUser = async () => {
		try {
			const response = await axiosInstance.get(`/users/${id}`)
			setUser(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'get-users' })
				: toast.error(error.message, { position: 'bottom-right', id: 'get-users' })
		}
	}
	const deleteFromFavoritesList = async (itemId) => {
		const favsMap = user.favorites.map((item) => item._id)
		user.favorites = favsMap.filter((item) => item !== itemId)

		try {
			await axiosInstance.put(`/users/${id}`, user)
			toast.success('Exercise remove from favorites list!', { position: 'bottom-right', id: 'remove-from-fav-list' })
			getUser()
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'remove-from-fav-list' })
				: toast.error(error.message, { position: 'bottom-right', id: 'remove-from-fav-list' })
		}
	}

	return (
		<main>
			<Toaster />
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
