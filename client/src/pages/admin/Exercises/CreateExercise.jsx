import { useRef, useState } from 'react'
import styles from './Exercise.module.css'
import { RiDeleteBinLine } from 'react-icons/ri'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import SelectExerciseType from '../../../components/SelectExerciseType'
import SelectEquipment from '../../../components/SelectEquipment'
import SelectCategories from '../../../components/SelectCategories'

const CreateExercise = () => {
	const [exercise, setExercise] = useState({ steps: [] })
	const stepRef = useRef('')

	const navigate = useNavigate()

	const addExerciseDetails = (e) => {
		if (e.target.name === 'imageURL' || e.target.name === 'videoURL') {
			setExercise((prev) => ({ ...prev, media: { ...prev.media, [e.target.name]: e.target.value } }))
		} else {
			setExercise((prev) => ({ ...prev, [e.target.name]: e.target.value }))
		}
	}

	const addStepsToExercise = (e) => {
		e.preventDefault()
		stepRef.current.value &&
			setExercise((prev) => ({
				...prev,
				steps: [...prev.steps, stepRef.current.value],
			}))
		stepRef.current.focus()
	}

	const deleteStep = (id) => {
		exercise.steps.splice(id, 1)
	}

	const createExercise = async (e) => {
		e.preventDefault()

		if (!exercise.title) return toast.error('Please provide a title for exercise!', { position: 'top-right', id: 'create-exercise' })
		if (!exercise.slug) return toast.error('Please provide a slug for exercise!', { position: 'top-right', id: 'create-exercise' })
		if (!exercise.type) return toast.error('Please provide a type for exercise!', { position: 'top-right', id: 'create-exercise' })
		if (!exercise.equipment) return toast.error('Please provide an equipment for exercise!', { position: 'top-right', id: 'create-exercise' })

		try {
			await axiosInstance.post(`exercises`, exercise)
			toast.success(`Exercise created successfully!`, { position: 'top-right', id: 'create-exercise' })
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'create-exercise' })
				: toast.error(error.message, { position: 'top-right', id: 'create-exercise' })
		}

		navigate('/admin/exercises')
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Add new exercise</h1>
			<Toaster />
			<section>
				<form className={styles.form}>
					<div className={styles.formInputGroup}>
						<label htmlFor="title">Title: </label>
						<input
							type="text"
							name="title"
							id="title"
							onChange={addExerciseDetails}
						/>
					</div>

					<SelectCategories
						onChange={addExerciseDetails}
						className={styles.formInputGroup}
					/>

					<SelectExerciseType
						onChange={addExerciseDetails}
						className={styles.formInputGroup}
					/>

					<SelectEquipment
						onChange={addExerciseDetails}
						className={styles.formInputGroup}
					/>

					<div className={styles.formInputGroup}>
						<label htmlFor="slug">Slug: </label>
						<input
							type="text"
							name="slug"
							id="slug"
							onChange={addExerciseDetails}
						/>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="description">Description: </label>
						<textarea
							name="description"
							id="description"
							onChange={addExerciseDetails}
						></textarea>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="imageURL">Image URL: </label>
						<input
							type="text"
							name="imageURL"
							id="imageURL"
							onChange={addExerciseDetails}
						/>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="videoURL">Video URL: </label>
						<input
							type="text"
							name="videoURL"
							id="videoURL"
							onChange={addExerciseDetails}
						/>
					</div>

					<div className={styles.formInputGroup1}>
						<label htmlFor="steps">Steps: </label>
						<input
							type="text"
							name="steps"
							id="steps"
							ref={stepRef}
						/>
						<button
							type="button"
							onClick={addStepsToExercise}
						>
							Add step
						</button>
						<ol className={styles.stepList}>
							{exercise.steps.map((step, index) => (
								<li
									className={styles.stepItem}
									key={`${step}-${index}`}
								>
									{`${index + 1}. ${step}`}
									<span>
										<RiDeleteBinLine onClick={() => deleteStep(index)} />
									</span>
								</li>
							))}
						</ol>
					</div>

					<button
						className={styles.btn}
						onClick={createExercise}
					>
						Create exercise
					</button>
				</form>
			</section>
		</main>
	)
}

export default CreateExercise
