/* eslint-disable react/prop-types */
import './styles/Filter.css'

const Filter = ({ title = 'Filters', onReset, children }) => {
	return (
		<aside className="filter">
			<h2 className="filter__title">{title}</h2>
			<form className="filter__form">
				{children}
				<button
					type="button"
					onClick={onReset}
				>
					Reset all filters
				</button>
			</form>
		</aside>
	)
}

export default Filter
