import { useNavigate, useParams } from 'react-router-dom'
import styles from './Users.module.css'
import SelectRole from '../../../components/SelectRole'
import { useEffect, useState } from 'react'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import PlaceholderAvatar from '../../../components/PlaceholderAvatar'

const EditUser = () => {
	const { id } = useParams()
	const [user, setUser] = useState({})

	const navigate = useNavigate()

	useEffect(() => {
		const getUser = async () => {
			try {
				const response = await axiosInstance.get(`/users/${id}`)
				setUser(response.data)
			} catch (error) {
				error.response.data.message
					? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'get-users' })
					: toast.error(error.message, { position: 'top-right', id: 'get-users' })
			}
		}

		getUser()
	}, [id])

	const updateUser = async () => {
		try {
			await axiosInstance.put(`/users/${id}`, user)
			toast.success('User updated successfully!', { position: 'top-right', id: 'update-user' })
			navigate(-1)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'update-user' })
				: toast.error(error.message, { position: 'top-right', id: 'update-user' })
		}
	}

	const handleChanges = (e) => {
		if (e.target.name === 'active') {
			setUser((prev) => ({
				...prev,
				active: e.target.value === 'Yes' ? true : false,
			}))
		} else {
			setUser((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}))
		}
	}

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>Edit {user.username} details</h1>
				<Toaster />
				<button
					className={styles.btn}
					onClick={updateUser}
				>
					Save changes
				</button>
			</div>
			<section className={styles.profileSection}>
				<div>
					{user.avatar ? (
						<img
							src={user.avatar}
							alt="user picture"
							className={styles.profilePicture}
						/>
					) : (
						<PlaceholderAvatar className={styles.profilePicture} />
					)}
				</div>
				<div className={styles.profileDetails}>
					<p>
						<label htmlFor="username">Username: </label>
						<input
							value={user.username}
							type="text"
							id="username"
							name="username"
							onChange={handleChanges}
						/>
					</p>
					<p>
						<label htmlFor="email">Email: </label>
						<input
							value={user.email}
							type="text"
							id="email"
							name="email"
							onChange={handleChanges}
						/>
					</p>
					<p>
						<label htmlFor="lastName">Name: </label>
						<input
							value={user.lastName}
							type="text"
							id="lastName"
							name="lastName"
							onChange={handleChanges}
						/>
						<input
							value={user.firstName}
							type="text"
							id="firstName"
							name="firstName"
							onChange={handleChanges}
						/>
					</p>
					<p>
						<label htmlFor="birthdate">Birthdate:</label>
						<input
							type="date"
							name="birthdate"
							id="birthdate"
							value={user.birthdate}
							onChange={handleChanges}
						/>
					</p>
					<p>
						<label htmlFor="active">Active: </label>
						<select
							defaultValue={user.active ? 'Yes' : 'No'}
							onChange={handleChanges}
							name="active"
							id="active"
						>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</p>
					<p>
						<SelectRole defaultValue={user.role} />
					</p>
					<p>
						<label htmlFor="bio">About: </label>
						<textarea
							name="bio"
							id="bio"
							rows={5}
							defaultValue={user.bio}
							onChange={handleChanges}
						></textarea>
					</p>
				</div>
			</section>
			{/* <section>
				<h2>Social media</h2>
				<ul>
					<li>
						<label htmlFor="facebook">Facebook: </label>
						<input
							type="text"
							value={user.socialMedia.facebook}
							name="facebook"
							id="facebook"
						/>
					</li>
					<li>
						<label htmlFor="twitter">Twitter: </label>
						<input
							type="text"
							value={user.socialMedia.twitter}
							name="twitter"
							id="twitter"
						/>
					</li>
					<li>
						<label htmlFor="instagram">Instagram: </label>
						<input
							type="text"
							value={user.socialMedia.instagram}
							name="instagram"
							id="instagram"
						/>
					</li>
					<li>
						<label htmlFor="tiktok">TikTok: </label>
						<input
							type="text"
							value={user.socialMedia.tiktok}
							name="tiktok"
							id="tiktok"
						/>
					</li>
				</ul>
			</section> */}
		</main>
	)
}

export default EditUser
