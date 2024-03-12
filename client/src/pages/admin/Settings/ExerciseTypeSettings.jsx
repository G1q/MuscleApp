import { useEffect, useState } from 'react'
import SettingsNav from '../../../components/SettingsNav'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import Table from '../../../components/Table'
import './Settings.css'
import { useAuth } from '../../../contexts/AuthContext'

const ExerciseTypeSettings = () => {
	const { getUsername } = useAuth()
	const [types, setTypes] = useState([])
	const [type, setType] = useState({ title: '', type: 'exercise-type', createdBy: getUsername() })

	useEffect(() => {
		getTypes()
	}, [])

	const getTypes = async () => {
		try {
			const response = await axiosInstance.get('settings/exercise-type')
			setTypes(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'get-roles' })
				: toast.error(error.message, { position: 'bottom-right', id: 'get-roles' })
		}
	}

	const createType = async () => {
		try {
			await axiosInstance.post(`/settings/`, type)
			toast.success(`Type created successfully!`, { position: 'bottom-right', id: 'create-role' })
			setType((prev) => ({ ...prev, title: '' }))
			getTypes()
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'delete-role' })
				: toast.error(error.message, { position: 'bottom-right', id: 'delete-role' })
		}
	}

	return (
		<main>
			<SettingsNav />
			<h2 className="settings__subtitle">Exercise types</h2>
			<Toaster />
			<div className="settings__actions">
				<input
					type="text"
					name="title"
					id="title"
					value={type.title}
					onChange={(e) => setType((prev) => ({ ...prev, title: e.target.value }))}
				/>
				<button onClick={createType}>Add new type</button>
			</div>
			{types.length > 0 ? (
				<Table headers={['Title', 'CreatedBy']}>
					<tbody>
						{types.map((type) => (
							<tr key={type._id}>
								<td>{type.title}</td>
								<td>{type.createdBy}</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<p>No types registered</p>
			)}
		</main>
	)
}

export default ExerciseTypeSettings
