import { useState } from 'react'
import styles from './Users.module.css'
import SelectRole from '../../../components/SelectRole'

const CreateUser = () => {
	const [user, setUser] = useState({})

	const addUserDetails = (e) => {
		setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const createUser = async (e) => {
		e.preventDefault()
		console.log(user)
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Add new user</h1>
			<section>
				<form className={styles.form}>
					<div className={styles.formInputGroup}>
						<label htmlFor="username">Username: </label>
						<input
							type="text"
							name="username"
							id="username"
							onChange={addUserDetails}
						/>
					</div>
					<div className={styles.formInputGroup}>
						<label htmlFor="email">Email: </label>
						<input
							type="email"
							name="email"
							id="email"
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
