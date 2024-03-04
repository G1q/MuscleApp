import { Link } from 'react-router-dom'
import './styles/Exercises.css'
import ExerciseCard from '../components/ExerciseCard'
import FilterCategory from '../components/FilterCategory'
import Filter from '../components/Filter'

const CATEGORIES = ['Shoulders', 'Traps', 'Biceps', 'Lower back', 'Abs', 'Hamstring', 'Calves', 'Triceps', 'Quadriceps', 'Forearms']

const EXERCISES = [
	{
		id: 1,
		title: 'Shoulder shrug',
		equipment: 'Dumbells',
		type: 'Strength',
		category: 'Lateral deltoid',
		slug: 'shoulder-shrug',
		imageURL: 'https://hips.hearstapps.com/menshealth-uk/main/thumbs/33510/dumbbell-shrug.jpg',
	},
	{
		id: 2,
		title: 'Bench press',
		equipment: 'Barbell',
		type: 'Strength',
		category: 'Chest',
		slug: 'bench-press',
		imageURL: 'https://hips.hearstapps.com/hmg-prod/images/incline-barbell-bench-press-640731bc88b98.jpg',
	},
	{
		id: 3,
		title: 'Bent row',
		equipment: 'Barbell',
		type: 'Strength',
		category: 'Back',
		slug: 'bent-row',
		imageURL: 'https://hips.hearstapps.com/hmg-prod/images/bent-over-row-1579627763.jpg',
	},
	{
		id: 4,
		title: 'Calves raises',
		equipment: 'None',
		type: 'Strength',
		category: 'Calves',
		slug: 'calves-raises',
		imageURL: 'https://hips.hearstapps.com/hmg-prod/images/calf-raises-1610550932.jpg',
	},
	{
		id: 5,
		title: 'Running',
		equipment: 'None',
		type: 'Cardio',
		category: 'All',
		slug: 'running',
		imageURL: 'https://hips.hearstapps.com/hmg-prod/images/running-track-1667904802.jpg',
	},
]

const EQUIPMENTS = ['None', 'Body only', 'Dumbell', 'Kettlebell', 'Barbell', 'Band']

const TYPES = ['Strength', 'Cardio', 'Stretching']

const Exercises = () => {
	return (
		<main>
			<h1 className="main__title">Exercises</h1>
			<div className="exercises__wrapper">
				<Filter title="Exercises filters">
					<FilterCategory
						categories={CATEGORIES}
						title="Muscle"
					/>
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
						{CATEGORIES.map((category, index) => (
							<li
								key={index}
								className="exercises__categories--list-item"
							>
								<Link
									to="/"
									className="exercises__categories--link"
								>
									{category}
								</Link>
							</li>
						))}
					</ul>

					<h2>All exercises:</h2>
					{EXERCISES.map((exercise) => (
						<ExerciseCard
							exercise={exercise}
							key={exercise.id}
						/>
					))}
				</section>
			</div>
		</main>
	)
}

export default Exercises
