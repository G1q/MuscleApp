/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import axiosInstance from '../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'

const SelectEquipment = ({ onChange }) => {
	const [equipments, setEquipments] = useState([])

	useEffect(() => {
		getEquipments()
	}, [])

	const getEquipments = async () => {
		try {
			const response = await axiosInstance.get('settings/equipment')
			setEquipments(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'get-equipments' })
				: toast.error(error.message, { position: 'bottom-right', id: 'get-equipments' })
		}
	}

	return (
		<>
			<Toaster />
			<label htmlFor="equipment">Equipment:</label>
			<select
				name="equipment"
				id="equipment"
				onChange={onChange}
				defaultValue=""
			>
				<option
					value=""
					hidden
				>
					Choose equipment
				</option>
				{equipments.map((equipment) => (
					<option
						value={equipment.title}
						key={equipment._id}
					>
						{equipment.title}
					</option>
				))}
			</select>
		</>
	)
}

export default SelectEquipment
