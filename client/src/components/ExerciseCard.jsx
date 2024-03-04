/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './styles/ExerciseCard.css'

const ExerciseCard = ({ exercise }) => {
	return (
		<article className="exercise__card">
			<div className="exercise__card--image">
				<img
					src={exercise.imageURL}
					alt=""
				/>
			</div>
			<Link
				to={`/exercises/${exercise.slug}`}
				className="exercise__card--link"
			>
				<h3 className="exercise__card--title">{exercise.title}</h3>
			</Link>
			<div className="exercise__card--info">
				<span>Category: {exercise.category}</span>
				<span>Equipment: {exercise.equipment}</span>
				<span>Type: {exercise.type}</span>
			</div>
		</article>
	)
}

export default ExerciseCard
