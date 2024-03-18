import { NavLink } from 'react-router-dom'
import styles from './styles/AdminHeader.module.css'
import { RiHome2Line, RiHistoryLine } from 'react-icons/ri'
import { HiOutlineUsers } from 'react-icons/hi'
import { BiCategoryAlt } from 'react-icons/bi'
import { IoIosFitness } from 'react-icons/io'
import { LuSettings } from 'react-icons/lu'
import { IoStatsChartOutline } from 'react-icons/io5'

const AdminHeader = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<ul className={styles.navigationList}>
					<li>
						<RiHome2Line />
						<NavLink to="/admin">Dashboard</NavLink>
					</li>
					<li>
						<HiOutlineUsers />
						<NavLink to="./users">Users</NavLink>
					</li>
					<li>
						<BiCategoryAlt />
						<NavLink to="./categories">Categories</NavLink>
					</li>
					<li>
						<IoIosFitness />
						<NavLink to="./exercises">Exercises</NavLink>
					</li>
					<li>
						<LuSettings />
						<NavLink to="./settings">Settings</NavLink>
					</li>
					<li>
						<IoStatsChartOutline />
						<NavLink to="./stats">Stats</NavLink>
					</li>
					<li>
						<RiHistoryLine />
						<NavLink to="./logs">Logs</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default AdminHeader
