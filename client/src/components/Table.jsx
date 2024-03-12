/* eslint-disable react/prop-types */
import styles from './styles/Table.module.css'

const Table = ({ headers, children, ...rest }) => {
	return (
		<div className={styles.tableContainer}>
			<table
				className={styles.dataTable}
				{...rest}
			>
				<thead>
					<tr>
						{headers.map((header) => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				{children}
			</table>
		</div>
	)
}

export default Table
