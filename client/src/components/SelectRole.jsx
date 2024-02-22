import ROLES from '../utils/roles'

const SelectRole = ({ onChange, defaultValue }) => {
	return (
		<>
			<label htmlFor="role">Role:</label>
			<select
				name="role"
				id="role"
				onChange={onChange}
				defaultValue={defaultValue}
			>
				{ROLES.map((role) => (
					<option
						value="role"
						key={role}
					>
						{role.charAt(0).toUpperCase() + role.slice(1)}
					</option>
				))}
			</select>
		</>
	)
}

export default SelectRole
