/* eslint-disable react/prop-types */
import useFetchData from '../hooks/useFetchData'

const SelectCategories = ({ onChange, className }) => {
	const { data: categories } = useFetchData('categories')

	return (
		<div className={className}>
			<label htmlFor="parent">Category: </label>
			<select
				type="text"
				name="parent"
				id="parent"
				onChange={onChange}
			>
				<option value="0">Main category (no parent)</option>
				{categories.map((category) => (
					<option
						key={category._id}
						value={category.title}
					>
						{category.title}
					</option>
				))}
			</select>
		</div>
	)
}

export default SelectCategories
