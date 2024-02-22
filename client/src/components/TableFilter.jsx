import styles from './styles/TableFilter.module.css'

const TableFilter = ({ placeholder = 'Search', onChange }) => {
	return (
		<div className={styles.filterWrapper}>
			<input
				type="search"
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default TableFilter
