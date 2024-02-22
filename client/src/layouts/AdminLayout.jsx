import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import styles from './styles/AdminLayout.module.css'

const AdminLayout = () => {
	return (
		<div className={styles.container}>
			<AdminHeader />
			<Outlet />
		</div>
	)
}

export default AdminLayout
