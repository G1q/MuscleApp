import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useAuth } from '../contexts/AuthContext'
import LogoutButton from './LogoutButton'
import './styles/MainHeader.css'

const MainHeader = () => {
	const { isLoggedIn, getUserRole, getUsername } = useAuth()

	return (
		<header className="header">
			<div>
				<Logo />
			</div>
			<nav className="primary-navigation">
				<ul>
					{isLoggedIn() && (
						<>
							<li>
								<NavLink to="/">Homepage</NavLink>
							</li>
							<li>
								<NavLink to="/exercises">Exercises</NavLink>
							</li>
							<li>
								<NavLink to="/muscles">Muscles</NavLink>
							</li>
							<li>
								<NavLink to="/user/workouts">My Workouts</NavLink>
							</li>
							<li>
								<NavLink to="/user/diary">Diary</NavLink>
							</li>
							<li>
								Hello, <NavLink to="/user/">{getUsername()}</NavLink>
							</li>
							{getUserRole() === 'admin' && <NavLink to="/admin">Admin dashboard</NavLink>}
							<li>
								<LogoutButton />
							</li>
						</>
					)}
					{!isLoggedIn() && (
						<>
							<li>
								<NavLink to="/login">Login</NavLink>
							</li>
							<li>
								<NavLink to="/register">Register</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader
