/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Category.module.css'
import { useEffect, useState } from 'react'
import axiosInstance from '../../../config/axios.config'
import toast from 'react-hot-toast'

const EditCategory = () => {
	const { slug } = useParams()
	const [categories, setCategories] = useState([])
	const [category, setCategory] = useState({})

	const navigate = useNavigate()

	useEffect(() => {
		getCategories()
		getCategory()
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

	const getCategory = async () => {
		try {
			const response = await axiosInstance.get(`categories/${slug}`)
			setCategory(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'get-category' })
				: toast.error(error.message, { position: 'top-right', id: 'get-category' })
		}
	}

	const handleChanges = (e) => {
		if (e.target.name === 'active') {
			setCategory((prev) => ({
				...prev,
				active: e.target.value === 'Yes' ? true : false,
			}))
		} else {
			setCategory((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}))
		}
	}

	const updateCategory = async () => {
		try {
			await axiosInstance.put(`/categories/${slug}`, category)
			toast.success('Category updated successfully!', { position: 'top-right', id: 'update-category' })
			navigate('/admin/categories')
		} catch (error) {
			console.log(error)
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'update-category' })
				: toast.error(error.message, { position: 'top-right', id: 'update-category' })
		}
	}

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>Edit {category.title}</h1>
				<button
					className={styles.btn}
					onClick={updateCategory}
				>
					Save changes
				</button>
			</div>
			<section className={styles.profileSection}>
				<div>
					<form className={styles.form}>
						<div className={styles.formInputGroup}>
							<label htmlFor="title">Title: </label>
							<input
								value={category.title}
								type="text"
								id="title"
								name="title"
								onChange={handleChanges}
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="parent">Category: </label>
							<select
								type="text"
								name="parent"
								id="parent"
								defaultValue={category.parent}
								onChange={handleChanges}
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
								value={category.slug}
								type="text"
								id="slug"
								name="slug"
								onChange={handleChanges}
							/>
						</div>
						<div className={styles.formInputGroup}>
							<p>Active:</p>
							<label htmlFor="active-true">True: </label>
							<input
								type="radio"
								name="active"
								id="active-true"
								value="Yes"
								checked={category.active}
								onChange={handleChanges}
							/>
							<label htmlFor="active-false">False: </label>
							<input
								type="radio"
								name="active"
								id="active-false"
								value="No"
								checked={!category.active}
								onChange={handleChanges}
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="description">Description: </label>
							<textarea
								name="description"
								id="description"
								rows={5}
								defaultValue={category.description}
								onChange={handleChanges}
							></textarea>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="imageURL">Image URL: </label>
							<input
								value={category.imageURL}
								type="text"
								id="imageURL"
								name="imageURL"
								onChange={handleChanges}
							/>
						</div>
					</form>
				</div>
			</section>
		</main>
	)
}

export default EditCategory
