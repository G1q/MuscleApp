import { useParams } from 'react-router-dom'
import styles from './Users.module.css'
import SelectRole from '../../../components/SelectRole'

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

const EditUser = () => {
	const { id } = useParams()

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>Edit {USER.username} details</h1>
				<button className={styles.btn}>Save changes</button>
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
					<p>
						<label htmlFor="username">Username: </label>
						<input
							value={USER.username}
							type="text"
							id="username"
							name="username"
						/>
					</p>
					<p>
						<label htmlFor="email">Email: </label>
						<input
							value={USER.email}
							type="text"
							id="email"
							name="email"
						/>
					</p>
					<p>
						<label htmlFor="lastName">Name: </label>
						<input
							value={USER.lastName}
							type="text"
							id="lastName"
							name="lastName"
						/>
						<input
							value={USER.firstName}
							type="text"
							id="firstName"
							name="firstName"
						/>
					</p>
					<p>Birthdate: {`${USER.birthDate} (${Math.floor((Date.now() - new Date(USER.birthDate)) * 3.17098e-11)} years old)`}</p>
					<p>Join date: {`${USER.createdAt} (${Math.floor((Date.now() - new Date(USER.createdAt)) * 1.15741e-8)} days ago)`}</p>
					<p>
						<label htmlFor="active">Active: </label>
						<select defaultValue={USER.active ? 'Yes' : 'No'}>
							<option value="Yes">Yes</option>
							<option value="No">No</option>
						</select>
					</p>
					<p>
						<SelectRole defaultValue={USER.role} />
					</p>
					<p>
						<label htmlFor="bio">About: </label>
						<textarea
							name="bio"
							id="bio"
							rows={5}
							defaultValue={USER.bio}
						></textarea>
					</p>
				</div>
			</section>
			<section>
				<h2>Social media</h2>
				<ul>
					<li>
						<label htmlFor="facebook">Facebook: </label>
						<input
							type="text"
							value={USER.socialMedia.facebook}
							name="facebook"
							id="facebook"
						/>
					</li>
					<li>
						<label htmlFor="twitter">Twitter: </label>
						<input
							type="text"
							value={USER.socialMedia.twitter}
							name="twitter"
							id="twitter"
						/>
					</li>
					<li>
						<label htmlFor="instagram">Instagram: </label>
						<input
							type="text"
							value={USER.socialMedia.instagram}
							name="instagram"
							id="instagram"
						/>
					</li>
					<li>
						<label htmlFor="tiktok">TikTok: </label>
						<input
							type="text"
							value={USER.socialMedia.tiktok}
							name="tiktok"
							id="tiktok"
						/>
					</li>
				</ul>
			</section>
		</main>
	)
}

export default EditUser
