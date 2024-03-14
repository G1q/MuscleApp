/* eslint-disable react/prop-types */
import './styles/FilterCategory.css'

const FilterCategory = ({ categories, title, onChange }) => {
	return (
		<fieldset className="exercises__filter--section">
			<legend className="exercises__filter--section-title">{title}</legend>
			{categories.map((category) => (
				<div
					className="exercises__filter--option"
					key={category._id}
				>
					<input
						type="checkbox"
						name={title.toLowerCase()}
						id={category._id}
						onChange={onChange}
					/>
					<label htmlFor={category._id}>{category.title}</label>
				</div>
			))}
		</fieldset>
	)
}

export default FilterCategory
