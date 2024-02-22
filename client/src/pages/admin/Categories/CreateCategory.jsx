import { useState } from 'react'
import styles from './Category.module.css'

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

const CreateCategory = () => {
	const [category, setCategory] = useState({})

	const addCategoryDetails = (e) => {
		setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const createCategory = async (e) => {
		e.preventDefault()
		console.log(category)
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Add new category</h1>
			<section>
				<form className={styles.form}>
					<div className={styles.formInputGroup}>
						<label htmlFor="title">Title: </label>
						<input
							type="text"
							name="title"
							id="title"
							onChange={addCategoryDetails}
						/>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="parent">Parent: </label>
						<select
							type="text"
							name="parent"
							id="parent"
							onChange={addCategoryDetails}
						>
							<option value="0">Main category (no parent)</option>
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
						<label htmlFor="slug">Slug: </label>
						<input
							type="text"
							name="slug"
							id="slug"
							onChange={addCategoryDetails}
						/>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="description">Description: </label>
						<textarea
							name="description"
							id="description"
							onChange={addCategoryDetails}
						></textarea>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="image">Image URL: </label>
						<input
							type="text"
							name="image"
							id="image"
							onChange={addCategoryDetails}
						/>
					</div>

					<div className={styles.formInputGroup}>
						<label htmlFor="video">Video URL: </label>
						<input
							type="text"
							name="video"
							id="video"
							onChange={addCategoryDetails}
						/>
					</div>

					<button
						className={styles.btn}
						onClick={createCategory}
					>
						Create category
					</button>
				</form>
			</section>
		</main>
	)
}

export default CreateCategory
