/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom'
import styles from './Users.module.css'
import { useEffect, useState } from 'react'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import { formatFullDate } from '../../../utilities/formatDate'
import PlaceholderAvatar from '../../../components/PlaceholderAvatar'
import { useAuth } from '../../../contexts/AuthContext'

// const xuser1 = {
// 	id: 2,
// 	username: 'G1q',
// 	firstName: 'Beresteanu',
// 	lastName: 'George',
// 	email: 'g1q@bg.ro',
// 	publicEmail: false,
// 	birthDate: '1990-02-07',
// 	publicBirthDate: false,
// 	active: true,
// 	role: 'admin',
// 	createdAt: '2024-01-16',
// 	image: 'https://i.pravatar.cc/300',
// 	bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit, quidem sint error necessitatibus laboriosam nulla atque, quia itaque facere repudiandae provident explicabo magnam fuga?',
// 	socialMedia: {
// 		facebook: 'https://www.facebook.com',
// 		twitter: 'https://www.twitter.com',
// 		instagram: 'https://www.instagram.com',
// 		tiktok: 'https://www.tiktok.com',
// 		pinterest: 'https://www.pinterest.com',
// 	},
// }

const ViewUser = () => {
	const { getUserId } = useAuth()
	const { id } = useParams()
	const [user, setUser] = useState({})

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

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>View {getUserId() === id ? 'your' : user.username} details</h1>
				<Toaster />
				<Link
					to={`../users/edit/${id}`}
					className={styles.btn}
				>
					Edit user
				</Link>
			</div>
			<section className={styles.profileSection}>
				<div>
					{user.avatar ? (
						<img
							src={user.avatar}
							alt="user-picture"
							className={styles.profilePicture}
						/>
					) : (
						<PlaceholderAvatar className={styles.profilePicture} />
					)}
				</div>
				<div className={styles.profileDetails}>
					<p>Username: {user.username}</p>
					<p>Email: {user.email}</p>
					<p>Name: {`${user.lastName || '-'} ${user.firstName || '-'}`}</p>
					<p>Birthdate: {`${user.birthdate || '-'} (${Math.floor((Date.now() - new Date(user.birthdate)) * 3.17098e-11)} years old)`}</p>
					<p>Join date: {`${formatFullDate(user.createdAt)} (${Math.floor((Date.now() - new Date(user.createdAt)) * 1.15741e-8)} days ago)`}</p>
					<p>Active: {user.active ? 'Yes' : 'No'}</p>
					<p>About: {user.bio || '-'}</p>
				</div>
			</section>
			{user.socialMedia && (
				<section>
					<h2>Social media</h2>
					<ul>
						<li>
							Facebook: <Link to={user.socialMedia.facebook}>{user.socialMedia.facebook}</Link>
						</li>
						<li>
							Twitter: <Link to={user.socialMedia.twitter}>{user.socialMedia.twitter}</Link>
						</li>
						<li>
							Instagram: <Link to={user.socialMedia.instagram}>{user.socialMedia.instagram}</Link>
						</li>
						<li>
							TikTok: <Link to={user.socialMedia.tiktok}>{user.socialMedia.tiktok}</Link>
						</li>
					</ul>
				</section>
			)}
		</main>
	)
}

export default ViewUser
