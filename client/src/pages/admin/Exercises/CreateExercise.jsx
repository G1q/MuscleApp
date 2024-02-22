import { useRef, useState } from 'react'
import EXERCISE_TYPE from '../../../utils/exerciseTypes'
import EQUIPMENT from '../../../utils/equipment'
import styles from './Exercise.module.css'
import { RiDeleteBinLine } from 'react-icons/ri'

const CATEGORIES = [
	{
		id: 1,
		title: 'Traps',
	},
	{
		id: 2,
		title: 'Deltoids',
	},
	{
		id: 3,
		title: 'Back',
	},
	{
		id: 4,
		title: 'Arms',
	},
	{
		id: 5,
		title: 'Calfs',
	},
]

const CreateExercise = () => {
	const [exercise, setExercise] = useState({ steps: [] })
	const stepRef = useRef('')

	const addExerciseDetails = (e) => {
		setExercise((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
		console.log(exercise)
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Add new exercise</h1>
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

					<div className={styles.formInputGroup}>
						<label htmlFor="category">Category: </label>
						<select
							type="text"
							name="category"
							id="category"
							onChange={addExerciseDetails}
							defaultValue={''}
						>
							<option
								value=""
								hidden
							>
								Choose category
							</option>
							{CATEGORIES.map((category) => (
								<option
									key={category.id}
									value={category.id}
								>
									{category.title}
								</option>
							))}
						</select>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="type">Type: </label>
						<select
							type="text"
							name="type"
							id="type"
							onChange={addExerciseDetails}
							defaultValue={''}
						>
							<option
								value=""
								hidden
							>
								Choose type
							</option>
							{EXERCISE_TYPE.map((type) => (
								<option
									key={type}
									value={type}
								>
									{type}
								</option>
							))}
						</select>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="equipment">Equipment: </label>
						<select
							type="text"
							name="equipment"
							id="equipment"
							onChange={addExerciseDetails}
							defaultValue={''}
						>
							<option
								value=""
								hidden
							>
								Choose equipment
							</option>
							{EQUIPMENT.map((equipment) => (
								<option
									key={equipment}
									value={equipment}
								>
									{equipment}
								</option>
							))}
						</select>
					</div>

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
						<label htmlFor="image">Image URL: </label>
						<input
							type="text"
							name="image"
							id="image"
							onChange={addExerciseDetails}
						/>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="video">Video URL: </label>
						<input
							type="text"
							name="video"
							id="video"
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