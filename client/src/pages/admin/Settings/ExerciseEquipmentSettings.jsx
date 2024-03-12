import { useEffect, useState } from 'react'
import SettingsNav from '../../../components/SettingsNav'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import Table from '../../../components/Table'
import './Settings.css'
import { useAuth } from '../../../contexts/AuthContext'

const ExerciseEquipmentSettings = () => {
	const { getUsername } = useAuth()
	const [equipments, setEquipments] = useState([])
	const [equipment, setEquipment] = useState({ title: '', type: 'equipment', createdBy: getUsername() })

	useEffect(() => {
		getEquipments()
	}, [])

	const getEquipments = async () => {
		try {
			const response = await axiosInstance.get('settings/equipment')
			setEquipments(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'get-roles' })
				: toast.error(error.message, { position: 'bottom-right', id: 'get-roles' })
		}
	}

	const createEquipment = async () => {
		try {
			await axiosInstance.post(`/settings/`, equipment)
			toast.success(`Equipment created successfully!`, { position: 'bottom-right', id: 'create-role' })
			setEquipment((prev) => ({ ...prev, title: '' }))
			getEquipments()
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'delete-role' })
				: toast.error(error.message, { position: 'bottom-right', id: 'delete-role' })
		}
	}

	return (
		<main>
			<SettingsNav />
			<h2 className="settings__subtitle">Exercise equipments</h2>
			<Toaster />
			<div className="settings__actions">
				<input
					type="text"
					name="title"
					id="title"
					value={equipment.title}
					onChange={(e) => setEquipment((prev) => ({ ...prev, title: e.target.value }))}
				/>
				<button onClick={createEquipment}>Add new equipment</button>
			</div>
			{equipments.length > 0 ? (
				<Table headers={['Title', 'CreatedBy']}>
					<tbody>
						{equipments.map((equipment) => (
							<tr key={equipment._id}>
								<td>{equipment.title}</td>
								<td>{equipment.createdBy}</td>
							</tr>
						))}
					</tbody>
				</Table>
			) : (
				<p>No equipments registered</p>
			)}
		</main>
	)
}

export default ExerciseEquipmentSettings
