import './styles/Exercises.css'
import ExerciseCard from '../components/ExerciseCard'
import useFetchData from '../hooks/useFetchData'
import { useParams } from 'react-router-dom'

const ExercisesByCategory = () => {
	const { slug } = useParams()
	const { data: category } = useFetchData(`categories/${slug}`)
	const { data: exercises } = useFetchData(`exercises/category/${slug}`)

	return (
		<main>
			<h1 className="main__title">Exercises for {category.title}</h1>

			<section className="exercises__section">
				{exercises.length > 0 ? (
					exercises.map((exercise) => (
						<ExerciseCard
							exercise={exercise}
							key={exercise._id}
						/>
					))
				) : (
					<p>No exercises for this category!</p>
				)}
			</section>
		</main>
	)
}

export default ExercisesByCategory
