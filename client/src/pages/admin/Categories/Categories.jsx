/* eslint-disable react-hooks/exhaustive-deps */
import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Table from '../../../components/Table'
import TableFilter from '../../../components/TableFilter'
import axiosInstance from '../../../config/axios.config'
import useFetchData from '../../../hooks/useFetchData'

const Categories = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const { data: categories } = useFetchData('categories')

	const deleteCategory = async (id) => {
		const confirm = window.confirm('Are you sure you want to delete this category?')

		if (confirm) {
			try {
				await axiosInstance.delete(`categories/${id}`)
				toast.success(`Category deleted successfully!`, { position: 'top-right', id: 'delete-category' })
			} catch (error) {
				error.response.data.message
					? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'delete-category' })
					: toast.error(error.message, { position: 'top-right', id: 'delete-category' })
			}
		}
	}

	return (
		<main>
			<h1>Categories</h1>
			<section>
				<div className="actions">
					<Link to="./create">Add new category</Link>
				</div>
				<Toaster />
				<TableFilter onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
				{categories.length > 0 ? (
					<Table headers={['Title', 'Category', 'Active', 'Created by', 'View', 'Edit', 'Delete']}>
						<tbody>
							{categories
								.filter((category) => category.title.concat(category.parent).toLowerCase().includes(searchQuery))
								.map((category) => (
									<tr key={category.id}>
										<td>{category.title}</td>
										<td>{category.parent != 0 && category.parent}</td>
										<td>{category.active ? 'Yes' : 'No'}</td>
										<td>{category.createdBy}</td>
										<td>
											<Link
												to={`/muscles/${category.slug}`}
												target="_blank"
											>
												<RiEyeLine color="royalblue" />
											</Link>
										</td>
										<td>
											<Link to={`./edit/${category.slug}`}>
												<RiEditLine color="forestgreen" />
											</Link>
										</td>
										<td>
											<button onClick={() => deleteCategory(category._id)}>
												<RiDeleteBinLine color="crimson" />
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				) : (
					<p>No registered categories</p>
				)}
			</section>
		</main>
	)
}

export default Categories
