import { Link } from 'react-router-dom'
import './styles/Exercises.css'
import ExerciseCard from '../components/ExerciseCard'
import FilterCategory from '../components/FilterCategory'
import Filter from '../components/Filter'
import useFetchData from '../hooks/useFetchData'

const EQUIPMENTS = ['None', 'Body only', 'Dumbell', 'Kettlebell', 'Barbell', 'Band']

const TYPES = ['Strength', 'Cardio', 'Stretching']

const Exercises = () => {
	const { data: categories } = useFetchData('categories')
	const { data: exercises } = useFetchData('exercises')

	return (
		<main>
			<h1 className="main__title">Exercises</h1>
			<div className="exercises__wrapper">
				<Filter title="Exercises filters">
					{/* <FilterCategory
						categories={categories}
						title="Muscle"
					/> */}
					<FilterCategory
						categories={EQUIPMENTS}
						title="Equipment"
					/>
					<FilterCategory
						categories={TYPES}
						title="Type"
					/>
				</Filter>

				<section className="exercises__section">
					{/* TODO: Image map */}
					{/* TODO: Temporarly: links, remove after image map */}
					<ul className="exercises__categories--list">
						{categories.map((category, index) => (
							<li
								key={index}
								className="exercises__categories--list-item"
							>
								<Link
									to={`/muscles/${category.slug}`}
									className="exercises__categories--link"
								>
									{category.title}
								</Link>
							</li>
						))}
					</ul>

					<h2>All exercises:</h2>
					{exercises.map((exercise) => (
						<ExerciseCard
							exercise={exercise}
							key={exercise._id}
						/>
					))}
				</section>
			</div>
		</main>
	)
}

export default Exercises
