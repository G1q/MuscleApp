import { NavLink } from 'react-router-dom'
import styles from './styles/UserHeader.module.css'
import { RiHome2Line } from 'react-icons/ri'
import { BiCategoryAlt } from 'react-icons/bi'
import { IoIosFitness } from 'react-icons/io'
import { LuSettings } from 'react-icons/lu'

const UserHeader = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<ul className={styles.navigationList}>
					<li>
						<RiHome2Line />
						<NavLink to="/user">Profile</NavLink>
					</li>
					<li>
						<BiCategoryAlt />
						<NavLink to="./diary">Diary</NavLink>
					</li>
					<li>
						<IoIosFitness />
						<NavLink to="./workouts">Workouts</NavLink>
					</li>
					<li>
						<LuSettings />
						<NavLink to="./settings">Settings</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default UserHeader
