/* eslint-disable react/no-unknown-property */
import { Link, useNavigate, useParams } from 'react-router-dom'
import './styles/Exercises.css'
import useFetchData from '../hooks/useFetchData'
import PlaceholderAvatar from '../components/PlaceholderAvatar'
import axiosInstance from '../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from '../contexts/AuthContext'
// import { useState } from 'react'

const ExercisePage = () => {
	const { slug } = useParams()
	const { data: exercise } = useFetchData(`exercises/${slug}`)
	const { getUserId } = useAuth()

	const id = getUserId()
	const { data: user } = useFetchData(`/users/${id}`)

	const navigate = useNavigate()

	const saveToFavorites = async () => {
		if (user.favorites && user.favorites.some((favExercise) => favExercise._id === exercise._id))
			return toast.error(`Exercise already in favorites list`, { position: 'bottom-right', id: 'add-to-fav-list' })

		user.favorites = [...user.favorites, exercise._id]

		try {
			await axiosInstance.put(`/users/${id}`, user)
			toast.success('Exercise added to favorites list!', { position: 'top-right', id: 'add-to-fav-list' })
			navigate(0)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'add-to-fav-list' })
				: toast.error(error.message, { position: 'top-right', id: 'add-to-fav-list' })
		}
	}

	const addToWorkout = async () => {
		// TODO: after workouts crud
	}

	return (
		<main>
			<Toaster />
			<h1 className="main__title">{exercise.title}</h1>
			<div className="exercise__actions">
				{user.favorites && user.favorites.some((favExercise) => favExercise._id === exercise._id) ? (
					<Link to="/user/favorites">View favorites list</Link>
				) : (
					<button onClick={saveToFavorites}>Save to favorites</button>
				)}
				<button onClick={addToWorkout}>Add to my workout</button>
			</div>
			{exercise.active ? (
				<section className="exercises__section exercises__section--page">
					<div className="exercises__section--media">
						<div className="exercises__section--gallery">
							{exercise.imageURL ? (
								<img
									width="600"
									height="300"
									src={exercise.imageURL}
									alt=""
									className="exercise__image"
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
								frameBorder="0"
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
