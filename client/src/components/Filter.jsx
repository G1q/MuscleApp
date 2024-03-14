/* eslint-disable react/prop-types */
import './styles/Filter.css'

const Filter = ({ title = 'Filters', children }) => {
	const resetAllFilters = () => {
		const filters = document.querySelectorAll('.exercises__filter--option input[type="checkbox"]')
		filters.forEach((filter) => (filter.checked = false))
	}

	return (
		<aside className="filter">
			<h2 className="filter__title">{title}</h2>
			<form className="filter__form">
				{children}
				<button
					type="button"
					onClick={resetAllFilters}
				>
					Reset all filters
				</button>
			</form>
		</aside>
	)
}

export default Filter
