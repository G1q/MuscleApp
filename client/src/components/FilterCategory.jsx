/* eslint-disable react/prop-types */
import './styles/FilterCategory.css'

const FilterCategory = ({ categories, title }) => {
	return (
		<fieldset className="exercises__filter--section">
			<legend className="exercises__filter--section-title">{title}</legend>
			{categories.map((category) => (
				<div
					className="exercises__filter--option"
					key={category}
				>
					<input
						type="checkbox"
						name={title.toLowerCase()}
						id={category.replace(' ', '-').toLowerCase()}
					/>
					<label htmlFor={category.replace(' ', '-').toLowerCase()}>{category}</label>
				</div>
			))}
		</fieldset>
	)
}

export default FilterCategory
