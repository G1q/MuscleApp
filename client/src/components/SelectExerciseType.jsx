/* eslint-disable react/prop-types */
import useFetchData from '../hooks/useFetchData'

const SelectExerciseType = ({ onChange, className }) => {
	const { data: types } = useFetchData('settings/exercise-type')

	return (
		<div className={className}>
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
		</div>
	)
}

export default SelectExerciseType
