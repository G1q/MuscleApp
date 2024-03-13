/* eslint-disable react/prop-types */

import useFetchData from '../hooks/useFetchData'

const SelectEquipment = ({ onChange, className }) => {
	const { data: equipments } = useFetchData('settings/equipment')

	return (
		<div className={className}>
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
		</div>
	)
}

export default SelectEquipment
