import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Table from '../../../components/Table'
import TableFilter from '../../../components/TableFilter'

const EXERCISES = [
	{
		id: 1,
		title: 'Bench press',
		category: 'Front deltoid',
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		type: 'Strength',
		equipment: 'Dumbell',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		steps: [
			'Lorem1 ipsum dolor sit amet consectetur adipisicing elit. ',
			'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. ',
			'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. ',
		],
		slug: 'bench-press',
		active: true,
	},
	{
		id: 2,
		title: 'Fly press',
		category: 'Back',
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		type: 'Strength',
		equipment: 'Dumbell',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		steps: [
			'Lorem1 ipsum dolor sit amet consectetur adipisicing elit. ',
			'Lorem2 ipsum dolor sit amet consectetur adipisicing elit. ',
			'Lorem3 ipsum dolor sit amet consectetur adipisicing elit. ',
		],
		slug: 'fly-press',
		active: false,
	},
]

const Exercises = () => {
	const [exercises, setExercises] = useState(EXERCISES)
	const [searchQuery, setSearchQuery] = useState('')

	const deleteExercise = async (id) => {
		const confirm = window.confirm('Are you sure you want to delete this exercise?')

		if (confirm) {
			try {
				setExercises(exercises.filter((exercise) => exercise.id !== id))
				toast.success(`Exercise ${id} deleted successfully!`, { position: 'top-right', id: 'delete-exercise' })
			} catch (err) {
				toast.error(err.message)
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
									<tr key={exercise.id}>
										<td>{exercise.title}</td>
										<td>{exercise.category}</td>
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
											<Link to={`./edit/${exercise.id}`}>
												<RiEditLine color="forestgreen" />
											</Link>
										</td>
										<td>
											<button onClick={() => deleteExercise(exercise.id)}>
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
