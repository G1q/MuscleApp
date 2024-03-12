/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import axiosInstance from '../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'

const SelectExerciseType = ({ onChange }) => {
	const [types, setTypes] = useState([])

	useEffect(() => {
		getTypes()
	}, [])

	const getTypes = async () => {
		try {
			const response = await axiosInstance.get('settings/exercise-type')
			setTypes(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'bottom-right', id: 'get-types' })
				: toast.error(error.message, { position: 'bottom-right', id: 'get-types' })
		}
	}

	return (
		<>
			<Toaster />
			<label htmlFor="type">Type:</label>
			<select
				name="type"
				id="type"
				onChange={onChange}
				defaultValue=""
			>
				<option value="">Choose type</option>
				{types.map((type) => (
					<option
						value={type.title}
						key={type._id}
					>
						{type.title}
					</option>
				))}
			</select>
		</>
	)
}

export default SelectExerciseType
