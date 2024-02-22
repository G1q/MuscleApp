import { Link, useParams } from 'react-router-dom'
import styles from './Users.module.css'

const USER = {
	id: 2,
	username: 'G1q',
	firstName: 'Beresteanu',
	lastName: 'George',
	email: 'g1q@bg.ro',
	publicEmail: false,
	birthDate: '1990-02-07',
	publicBirthDate: false,
	active: true,
	role: 'admin',
	createdAt: '2024-01-16',
	image: 'https://i.pravatar.cc/300',
	bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit, quidem sint error necessitatibus laboriosam nulla atque, quia itaque facere repudiandae provident explicabo magnam fuga?',
	socialMedia: {
		facebook: 'https://www.facebook.com',
		twitter: 'https://www.twitter.com',
		instagram: 'https://www.instagram.com',
		tiktok: 'https://www.tiktok.com',
		pinterest: 'https://www.pinterest.com',
	},
}

const ViewUser = () => {
	const { id } = useParams()

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>View {USER.username} details</h1>
				<Link
					to={`../users/edit/${id}`}
					className={styles.btn}
				>
					Edit user
				</Link>
			</div>
			<section className={styles.profileSection}>
				<div>
					<img
						src={USER.image}
						alt="user picture"
						className={styles.profilePicture}
					/>
				</div>
				<div className={styles.profileDetails}>
					<p>Username: {USER.username}</p>
					<p>Email: {USER.email}</p>
					<p>Name: {`${USER.lastName} ${USER.firstName}`}</p>
					<p>Birthdate: {`${USER.birthDate} (${Math.floor((Date.now() - new Date(USER.birthDate)) * 3.17098e-11)} years old)`}</p>
					<p>Join date: {`${USER.createdAt} (${Math.floor((Date.now() - new Date(USER.createdAt)) * 1.15741e-8)} days ago)`}</p>
					<p>Active: {USER.active ? 'Yes' : 'No'}</p>
					<p>About: {USER.bio}</p>
				</div>
			</section>
			<section>
				<h2>Social media</h2>
				<ul>
					<li>
						Facebook: <Link to={USER.socialMedia.facebook}>{USER.socialMedia.facebook}</Link>
					</li>
					<li>
						Twitter: <Link to={USER.socialMedia.twitter}>{USER.socialMedia.twitter}</Link>
					</li>
					<li>
						Instagram: <Link to={USER.socialMedia.instagram}>{USER.socialMedia.instagram}</Link>
					</li>
					<li>
						TikTok: <Link to={USER.socialMedia.tiktok}>{USER.socialMedia.tiktok}</Link>
					</li>
				</ul>
			</section>
		</main>
	)
}

export default ViewUser
