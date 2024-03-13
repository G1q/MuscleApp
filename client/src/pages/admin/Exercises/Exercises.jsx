import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Table from '../../../components/Table'
import TableFilter from '../../../components/TableFilter'
import useFetchData from '../../../hooks/useFetchData'
import axiosInstance from '../../../config/axios.config'

const Exercises = () => {
	const { data: exercises } = useFetchData('exercises')
	const [searchQuery, setSearchQuery] = useState('')

	const navigate = useNavigate()

	const deleteExercise = async (id) => {
		const confirm = window.confirm('Are you sure you want to delete this exercise?')

		if (confirm) {
			try {
				axiosInstance.delete(`exercises/${id}`)
				toast.success(`Exercise deleted successfully!`, { position: 'top-right', id: 'delete-exercise' })
				navigate(0)
			} catch (error) {
				error.response.data.message
					? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'get-users' })
					: toast.error(error.message, { position: 'top-right', id: 'get-users' })
			}
		}
	}

	return (
		<main>
			<h1>Exercises</h1>
			<section>
				<div className="actions">
					<Link to="./create">Add new exercise</Link>
				</div>
				<Toaster />
				<TableFilter onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
				{exercises.length > 0 ? (
					<Table headers={['Title', 'Category', 'Type', 'Equipment', 'Active', 'View', 'Edit', 'Delete']}>
						<tbody>
							{exercises
								.filter((exercise) => exercise.title.concat(exercise.category).toLowerCase().includes(searchQuery))
								.map((exercise) => (
									<tr key={exercise._id}>
										<td>{exercise.title}</td>
										<td>{exercise.parent != 0 && exercise.parent}</td>
										<td>{exercise.type}</td>
										<td>{exercise.equipment}</td>
										<td>{exercise.active ? 'Yes' : 'No'}</td>
										<td>
											<Link
												to={`/exercises/${exercise.slug}`}
												target="_blank"
											>
												<RiEyeLine color="royalblue" />
											</Link>
										</td>
										<td>
											<Link to={`./edit/${exercise.slug}`}>
												<RiEditLine color="forestgreen" />
											</Link>
										</td>
										<td>
											<button onClick={() => deleteExercise(exercise._id)}>
												<RiDeleteBinLine color="crimson" />
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				) : (
					<p>No registered exercises</p>
				)}
			</section>
		</main>
	)
}

export default Exercises
