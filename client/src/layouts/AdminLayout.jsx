import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import styles from './styles/AdminLayout.module.css'
import MainHeader from '../components/MainHeader'

const AdminLayout = () => {
	return (
		<div className={styles.container}>
			<MainHeader />
			<div className={styles.wrapper}>
				<AdminHeader />
				<Outlet />
			</div>
		</div>
	)
}

export default AdminLayout
