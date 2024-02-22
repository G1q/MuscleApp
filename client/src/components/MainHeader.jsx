import { NavLink } from 'react-router-dom'
import styles from './styles/MainHeader.module.css'
import Logo from './Logo'

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<div>
				<Logo />
			</div>
			<nav className={styles.primaryNavigation}>
				<ul>
					<li>
						<NavLink to="/">Homepage</NavLink>
					</li>
					<li>
						<NavLink to="/exercises">Exercises</NavLink>
					</li>
					<li>
						<NavLink to="/user/workouts">My Workouts</NavLink>
					</li>
					<li>
						<NavLink to="/user/diary">Diary</NavLink>
					</li>
					<li>
						<NavLink to="/user/">My Profile</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader
