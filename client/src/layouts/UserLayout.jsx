import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import UserHeader from '../components/UserHeader'
import styles from './styles/UserLayout.module.css'

const UserLayout = () => {
	return (
		<div className={styles.container}>
			<MainHeader />
			<div className={styles.wrapper}>
				<UserHeader />
				<Outlet />
			</div>
		</div>
	)
}

export default UserLayout
