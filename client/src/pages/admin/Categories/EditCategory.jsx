import { useParams } from 'react-router-dom'
import styles from './Category.module.css'

const CATEGORY = {
	id: 5,
	title: 'Gluteus maximus',
	parent: 'Arms',
	media: {
		imageURL: 'https://c02.purpledshub.com/uploads/sites/46/2021/05/Trapezius-stretches-d9d0383.jpg?w=1029&webp=1',
		videoURL: 'https://www.youtube.com/watch?v=w7OSC-RfKOI',
	},
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
	slug: 'front-deltoids',
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

const EditCategory = () => {
	const { id } = useParams()

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>Edit {CATEGORY.title}</h1>
				<button className={styles.btn}>Save changes</button>
			</div>
			<section className={styles.profileSection}>
				<div>
					<form className={styles.form}>
						<div className={styles.formInputGroup}>
							<label htmlFor="title">Title: </label>
							<input
								value={CATEGORY.title}
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
								defaultValue={CATEGORY.parent}
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
								value={CATEGORY.slug}
								type="text"
								id="slug"
								name="slug"
							/>
						</div>
						<div className={styles.formInputGroup}>
							<label htmlFor="active">Active: </label>
							<select defaultValue={CATEGORY.active ? 'Yes' : 'No'}>
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
								defaultValue={CATEGORY.description}
							></textarea>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="imageURL">Image URL: </label>
							<input
								value={CATEGORY.media.imageURL}
								type="text"
								id="imageURL"
								name="imageURL"
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="videoURL">Video URL: </label>
							<input
								value={CATEGORY.media.videoURL}
								type="text"
								id="videoURL"
								name="videoURL"
							/>
						</div>
					</form>
				</div>
				<div>
					{/* <img
						src={CATEGORY.media.imageURL}
						alt="category picture"
						className={styles.categoryPicture}
					/> */}

					{/* <iframe
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${CATEGORY.media.videoURL.slice(CATEGORY.media.videoURL.indexOf('=') + 1)}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe> */}
				</div>
			</section>
		</main>
	)
}

export default EditCategory
