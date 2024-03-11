/* eslint-disable react/no-unknown-property */
import { Link, useParams } from 'react-router-dom'
import './styles/Exercises.css'

const EXERCISE = {
	id: 1,
	title: 'Shoulder shrug',
	equipment: 'Dumbells',
	type: 'Strength',
	category: 'Lateral deltoid',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam porro sint tempora ab voluptatem molestiae molestias incidunt libero at itaque. Tenetur quidem atque, reiciendis officiis quis cupiditate, recusandae id corporis quos maiores doloremque in. Voluptatibus quo, aut saepe, at odit enim labore omnis delectus suscipit nulla ex necessitatibus magnam sed.',
	steps: [
		{
			id: 1,
			description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, amet.',
		},
		{
			id: 2,
			description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, amet.',
		},
		{
			id: 3,
			description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, amet.',
		},
	],
	slug: 'shoulder-shrug',
	media: {
		image: {
			main: 'https://hips.hearstapps.com/menshealth-uk/main/thumbs/33510/dumbbell-shrug.jpg',
		},
		video: {
			youtube: 'YT6qn6HVQyE',
		},
	},
	active: true,
}

const ExercisePage = () => {
	const { slug } = useParams()

	return (
		<main>
			<h1 className="main__title">
				{slug} - {EXERCISE.title}
			</h1>
			{EXERCISE.active ? (
				<section className="exercises__section exercises__section--page">
					<div className="exercises__section--media">
						<div className="exercises__section--gallery">
							<img
								src={EXERCISE.media.image.main}
								alt={EXERCISE.title}
							/>
						</div>
						<div className="exercises__section--videos">
							<iframe
								// width="560"
								// height="315"
								src={`https://www.youtube.com/embed/${EXERCISE.media.video.youtube}`}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
							></iframe>
						</div>
					</div>
					<div className="exercises__section--details">
						<h2>Details</h2>
						<p>
							Type: <span>{EXERCISE.type}</span>
						</p>
						<p>
							Equipment: <span>{EXERCISE.equipment}</span>
						</p>
						<p>
							Target muscle: <span>{EXERCISE.category}</span>
						</p>
						<p>
							Description: <span>{EXERCISE.description}</span>
						</p>
						{EXERCISE.steps.length > 0 && (
							<ol>
								<p>Steps:</p>
								{EXERCISE.steps.map((step) => (
									<li key={step.id}>{step.description}</li>
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
