/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react'
import axiosInstance from '../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'

const SelectRole = ({ onChange, defaultValue }) => {
	const [roles, setRoles] = useState([])

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

	return (
		<>
			<Toaster />
			<label htmlFor="role">Role:</label>
			<select
				name="role"
				id="role"
				onChange={onChange}
				defaultValue={defaultValue}
			>
				{roles.map((role) => (
					<option
						value={role.title.toLowerCase()}
						key={role._id}
					>
						{role.title}
					</option>
				))}
			</select>
		</>
	)
}

export default SelectRole
