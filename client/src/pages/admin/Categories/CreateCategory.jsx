import { useEffect, useState } from 'react'
import styles from './Category.module.css'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'

const CreateCategory = () => {
	const { getUsername } = useAuth()
	const [categories, setCategories] = useState([])
	const [category, setCategory] = useState({ createdBy: getUsername() })

	const navigate = useNavigate()

	useEffect(() => {
		getCategories()
	}, [])

	const getCategories = async () => {
		try {
			const response = await axiosInstance.get('categories')
			setCategories(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'get-categories' })
				: toast.error(error.message, { position: 'top-right', id: 'get-categories' })
		}
	}

	const addCategoryDetails = (e) => {
		setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const createCategory = async (e) => {
		e.preventDefault()

		if (!category.title) return toast.error('Please provide a title for category!', { position: 'top-right', id: 'create-category' })
		if (!category.slug) return toast.error('Please provide a slug for category!', { position: 'top-right', id: 'create-category' })

		try {
			await axiosInstance.post('categories', category)
			toast.success(`Category created successfully!`, { position: 'top-right', id: 'create-category' })
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'create-category' })
				: toast.error(error.message, { position: 'top-right', id: 'create-category' })
		}

		navigate('/admin/categories')
	}

	return (
		<main>
			<h1 className={styles.profileTitle}>Add new category</h1>
			<Toaster />
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
							{categories.map((category) => (
								<option
									key={category._id}
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
						<label htmlFor="imageURL">Image URL: </label>
						<input
							type="text"
							name="imageURL"
							id="imageURL"
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
