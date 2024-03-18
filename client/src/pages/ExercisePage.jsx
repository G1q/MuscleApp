/* eslint-disable react/no-unknown-property */
import { Link, useParams } from 'react-router-dom'
import './styles/Exercises.css'
import useFetchData from '../hooks/useFetchData'
import PlaceholderAvatar from '../components/PlaceholderAvatar'

const ExercisePage = () => {
	const { slug } = useParams()

	const { data: exercise } = useFetchData(`exercises/${slug}`)

	const saveToFavorites = async () => {
		// TODO: after favs crud
	}

	const addToWorkout = async () => {
		// TODO: after workouts crud
	}

	return (
		<main>
			<h1 className="main__title">{exercise.title}</h1>
			<div className="exercise__actions">
				<button onClick={saveToFavorites}>Save to favorites</button>
				<button onClick={addToWorkout}>Add to my workout</button>
			</div>
			{exercise.active ? (
				<section className="exercises__section exercises__section--page">
					<div className="exercises__section--media">
						<div className="exercises__section--gallery">
							{exercise.imageURL ? (
								<img
									src={exercise.imageURL}
									alt=""
								/>
							) : (
								<PlaceholderAvatar />
							)}
						</div>
						<div className="exercises__section--videos">
							<iframe
								// width="560"
								// height="315"
								src={`https://www.youtube.com/embed/${exercise.videoURL}`}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
							></iframe>
						</div>
					</div>
					<div className="exercises__section--details">
						<h2>Details</h2>
						<p>
							Type: <span>{exercise.type}</span>
						</p>
						<p>
							Equipment: <span>{exercise.equipment}</span>
						</p>
						<p>
							Target muscle: <span>{exercise.parent}</span>
						</p>
						<p>
							Description: <span>{exercise.description}</span>
						</p>
						{exercise.steps.length > 0 && (
							<ol>
								<p>Steps:</p>
								{exercise.steps.map((step) => (
									<li key={step}>{step}</li>
								))}
							</ol>
						)}
					</div>
				</section>
			) : (
				<p>
					This page is inactive! Please go back to <Link to="/exercises">Exercises Hub</Link>
				</p>
			)}
		</main>
	)
}

export default ExercisePage
