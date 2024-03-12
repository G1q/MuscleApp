import './styles/SettingsNav.css'
import { NavLink } from 'react-router-dom'

const SettingsNav = () => {
	return (
		<>
			<h1 className="settings__title">Website Settings</h1>
			<nav className="settings__nav">
				<ul className="settings__nav--list">
					<li className="settings__nav--item">
						<NavLink to="/admin/settings/roles">Roles</NavLink>
					</li>
					<li className="settings__nav--item">
						<NavLink to="/admin/settings/exercise-type">Exercise Type</NavLink>
					</li>
					<li className="settings__nav--item">
						<NavLink to="/admin/settings/exercise-equipment">Exercise Equipment</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default SettingsNav
