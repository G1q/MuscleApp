import { Outlet } from 'react-router-dom'
import styles from './styles/NoHeaderLayout.module.css'
import Logo from '../components/Logo'

const NoHeaderLayout = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<nav className={styles.navigation}>
					<Logo />
				</nav>
			</header>
			<Outlet />
		</div>
	)
}

export default NoHeaderLayout
