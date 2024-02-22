import styles from './styles/Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<Link
			to="/"
			className={styles.logo}
		>
			MuscleApp
		</Link>
	)
}

export default Logo
