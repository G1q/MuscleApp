import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import styles from './styles/MainLayout.module.css'

const MainLayout = () => {
	return (
		<div className={styles.container}>
			<MainHeader />
			<Outlet />
		</div>
	)
}

export default MainLayout
