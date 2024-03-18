// Components
import { Link } from 'react-router-dom'

// Custom components
import Table from '../../../components/Table'

// Custom hooks
import useFetchData from '../../../hooks/useFetchData'

// Styles
import './AdminLogs.css'

// Icons
import { MdCheck } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti'
import { RiEditLine } from 'react-icons/ri'

const AdminLogs = () => {
	const { data: categories } = useFetchData('/categories')
	const { data: exercises } = useFetchData('/exercises')
	const { data: test } = useFetchData('test')
	console.log(test)

	return (
		<main>
			<h1 className="main__title">Logs / Problems</h1>
			<h2>Categories:</h2>

			<Table
				headers={['Title', 'Image', 'Description', 'Active', 'Slug', 'Edit']}
				style={{ marginBottom: '2rem' }}
			>
				<tbody className="logs__table--body">
					{categories
						.filter((category) => !category.imageURL || !category.description || !category.active || !category.slug)
						.map((category) => (
							<tr key={category._id}>
								<td>{category.title}</td>
								<td>{category.imageURL ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{category.description ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{category.active ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{category.slug ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>
									<Link to={`/admin/categories/edit/${category.slug}`}>
										<RiEditLine color="forestgreen" />
									</Link>
								</td>
							</tr>
						))}
				</tbody>
			</Table>

			<h2>Exercises:</h2>

			<Table headers={['Title', 'Parent', 'Image', 'Video', 'Type', 'Equipment', 'Steps', 'Active', 'Slug', 'Edit']}>
				<tbody className="logs__table--body">
					{exercises
						.filter(
							(exercise) =>
								!exercise.parent ||
								!exercise.imageURL ||
								!exercise.videoURL ||
								!exercise.type ||
								!exercise.equipment ||
								!exercise.description ||
								!exercise.steps.legnth ||
								!exercise.active ||
								!exercise.slug
						)
						.map((exercise) => (
							<tr key={exercise._id}>
								<td>{exercise.title}</td>
								<td>{exercise.parent ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.imageURL ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.videoURL ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.type ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.equipment ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.description ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.active ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>{exercise.slug ? <MdCheck color="forestgreen" /> : <TiDeleteOutline color="crimson" />}</td>
								<td>
									<Link to={`/admin/exercises/edit/${exercise.slug}`}>
										<RiEditLine color="forestgreen" />
									</Link>
								</td>
							</tr>
						))}
				</tbody>
			</Table>

			{/* TODO: workouts */}
			{/* TODO: others */}
		</main>
	)
}

export default AdminLogs
