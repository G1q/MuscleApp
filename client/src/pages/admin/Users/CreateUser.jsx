import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Users.module.css'
import SelectRole from '../../../components/SelectRole'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'

const CreateUser = () => {
	const [user, setUser] = useState({})

	const navigate = useNavigate()

	const addUserDetails = (e) => {
		setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const createUser = async (e) => {
		e.preventDefault()

		if (!user.username) return toast.error('Please provide an username!', { position: 'top-right', id: 'create-user' })
		if (!user.email) return toast.error('Please provide an email!', { position: 'top-right', id: 'create-user' })
		if (!user.password) return toast.error('Please provide a password!', { position: 'top-right', id: 'create-user' })

		try {
			await axiosInstance.post(`/users`, user)
			toast.success(`User ${user.username} created successfully!`, { position: 'top-right', id: 'create-user' })
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'create-user' })
				: toast.error(error.message, { position: 'top-right', id: 'get-users' })
		}

		navigate('/admin/users')
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Add new user</h1>
			<Toaster />
			<section>
				<form className={styles.form}>
					<div className={styles.formInputGroup}>
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							id="username"
							required
							onChange={addUserDetails}
						/>
					</div>
					<div className={styles.formInputGroup}>
						<label htmlFor="email">Email: </label>
						<input
							type="email"
							name="email"
							id="email"
							required
							onChange={addUserDetails}
						/>
					</div>
					<div className={styles.formInputGroup}>
						<SelectRole onChange={addUserDetails} />
					</div>
					<div className={styles.formInputGroup}>
						<label htmlFor="password">Password: </label>
						<input
							type="password"
							name="password"
							id="password"
							required
							onChange={addUserDetails}
						/>
					</div>
					<button
						className={styles.btn}
						onClick={createUser}
					>
						Create user
					</button>
				</form>
			</section>
		</main>
	)
}

export default CreateUser
