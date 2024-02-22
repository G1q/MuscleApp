import { useParams } from 'react-router-dom'
import styles from './Exercise.module.css'
import EXERCISE_TYPE from '../../../utils/exerciseTypes'
import EQUIPMENT from '../../../utils/equipment'

const EXERCISE = {
	id: 1,
	title: 'Bench press',
	category: 'Arms',
	media: {
		imageURL: 'https://image.com/123',
		videoURL: 'https://youtube.com/video/123',
	},
	type: 'Strength',
	equipment: 'Dumbell',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
	steps: [
		'Lorem1 ipsum dolor sit amet consectetur adipisicing elit.',
		'Lorem2 ipsum dolor sit amet consectetur adipisicing elit.',
		'Lorem3 ipsum dolor sit amet consectetur adipisicing elit.',
	],
	slug: 'bench-press',
	active: true,
}

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

const EditExercise = () => {
	const { id } = useParams()

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>Edit {EXERCISE.title}</h1>
				<button className={styles.btn}>Save changes</button>
			</div>
			<section className={styles.profileSection}>
				<div>
					<form className={styles.form}>
						<div className={styles.formInputGroup}>
							<label htmlFor="title">Title: </label>
							<input
								value={EXERCISE.title}
								type="text"
								id="title"
								name="title"
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="category">Category: </label>
							<select
								type="text"
								name="category"
								id="category"
								defaultValue={EXERCISE.category}
							>
								{CATEGORIES.map((category) => (
									<option
										key={category.id}
										value={category.title}
									>
										{category.title}
									</option>
								))}
							</select>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="slug">Slug: </label>
							<input
								value={EXERCISE.slug}
								type="text"
								id="slug"
								name="slug"
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="type">Type: </label>
							<select defaultValue={EXERCISE.type}>
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
								defaultValue={EXERCISE.equipment}
								name="equipment"
								id="equipment"
							>
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
							<label htmlFor="active">Active: </label>
							<select defaultValue={EXERCISE.active ? 'Yes' : 'No'}>
								<option value="Yes">Yes</option>
								<option value="No">No</option>
							</select>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="description">Description: </label>
							<textarea
								name="description"
								id="description"
								rows={5}
								defaultValue={EXERCISE.description}
							></textarea>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="imageURL">Image URL: </label>
							<input
								value={EXERCISE.media.imageURL}
								type="text"
								id="imageURL"
								name="imageURL"
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="videoURL">Video URL: </label>
							<input
								value={EXERCISE.media.videoURL}
								type="text"
								id="videoURL"
								name="videoURL"
							/>
						</div>
					</form>
				</div>
			</section>
		</main>
	)
}

export default EditExercise
