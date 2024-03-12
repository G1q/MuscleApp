import { useEffect, useState } from 'react'
import SettingsNav from '../../../components/SettingsNav'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import Table from '../../../components/Table'
import './Settings.css'
import { useAuth } from '../../../contexts/AuthContext'

const RolesSettings = () => {
	const { getUsername } = useAuth()
	const [roles, setRoles] = useState([])
	const [role, setRole] = useState({ title: '', type: 'role', createdBy: getUsername() })

	useEffect(() => {
		getRoles()
	}, [])

	const getRoles = async () => {
		try {
			const response = await axiosInstance.get('settings/role')
			setRoles(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'get-roles' })
				: toast.error(error.message, { position: 'bottom-right', id: 'get-roles' })
		}
	}

	const createRole = async () => {
		try {
			await axiosInstance.post(`/settings/`, role)
			toast.success(`Role created successfully!`, { position: 'bottom-right', id: 'create-role' })
			setRole((prev) => ({ ...prev, title: '' }))
			getRoles()
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'delete-role' })
				: toast.error(error.message, { position: 'bottom-right', id: 'delete-role' })
		}
	}

	return (
		<main>
			<SettingsNav />
			<h2 className="settings__subtitle">User roles</h2>
			<Toaster />
			<div className="settings__actions">
				<input
					type="text"
					name="title"
					id="title"
					value={role.title}
					onChange={(e) => setRole((prev) => ({ ...prev, title: e.target.value }))}
				/>
				<button onClick={createRole}>Add new role</button>
			</div>
			{roles.length > 0 ? (
				<Table headers={['Title', 'CreatedBy']}>
					<tbody>
						{roles.map((role) => (
							<tr key={role._id}>
								<td>{role.title}</td>
								<td>{role.createdBy}</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<p>No roles registered</p>
			)}
		</main>
	)
}

export default RolesSettings
