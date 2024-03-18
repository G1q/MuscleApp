/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './styles/ExerciseCard.css'
import PlaceholderAvatar from '../components/PlaceholderAvatar'

const ExerciseCard = ({ exercise, noImage }) => {
	return (
		<article
			className="exercise__card"
			data-image={noImage ? 'no-image' : ''}
		>
			{!noImage && (
				<div className="exercise__card--image">
					{exercise.imageURL ? (
						<img
							src={exercise.imageURL}
							alt={exercise.title}
						/>
					) : (
						<PlaceholderAvatar />
					)}
				</div>
			)}
			<Link
				to={`/exercises/${exercise.slug}`}
				className="exercise__card--link"
			>
				<h3 className="exercise__card--title">{exercise.title}</h3>
			</Link>
			<div className="exercise__card--info">
				<span>Category: {exercise.parent != 0 ? exercise.parent : 'Main category'}</span>
				<span>Equipment: {exercise.equipment}</span>
				<span>Type: {exercise.type}</span>
			</div>
		</article>
	)
}

export default ExerciseCard
