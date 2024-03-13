import { useNavigate, useParams } from 'react-router-dom'
import styles from './Exercise.module.css'
import SelectExerciseType from '../../../components/SelectExerciseType'
import SelectEquipment from '../../../components/SelectEquipment'
import { useEffect, useState } from 'react'
import axiosInstance from '../../../config/axios.config'
import toast, { Toaster } from 'react-hot-toast'
import SelectCategories from '../../../components/SelectCategories'

const EditExercise = () => {
	const { slug } = useParams()
	const [exercise, setExercise] = useState({})

	const navigate = useNavigate()

	useEffect(() => {
		getExercise()
	}, [])

	const getExercise = async () => {
		try {
			const response = await axiosInstance.get(`exercises/${slug}`)
			setExercise(response.data)
		} catch (error) {
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'get-category' })
				: toast.error(error.message, { position: 'top-right', id: 'get-category' })
		}
	}

	const handleChanges = (e) => {
		if (e.target.name === 'active') {
			setExercise((prev) => ({
				...prev,
				active: e.target.value === 'Yes' ? true : false,
			}))
		} else if (e.target.name === 'imageURL' || e.target.name === 'videoURL') {
			setExercise((prev) => ({
				...prev,
				media: {
					...prev.media,
					[e.target.name]: e.target.value,
				},
			}))
		} else {
			setExercise((prev) => ({
				...prev,
				[e.target.name]: e.target.value,
			}))
		}
	}

	const updateExercise = async () => {
		try {
			await axiosInstance.put(`/exercises/${slug}`, exercise)
			toast.success('Category updated successfully!', { position: 'top-right', id: 'update-exercise' })
			navigate('/admin/exercises')
		} catch (error) {
			console.log(error)
			error.response.data.message
				? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'update-exercise' })
				: toast.error(error.message, { position: 'top-right', id: 'update-exercise' })
		}
	}

	return (
		<main>
			<div className={styles.flex}>
				<h1 className={styles.profileTitle}>Edit {exercise.title}</h1>
				<button
					className={styles.btn}
					onClick={updateExercise}
				>
					Save changes
				</button>
				<Toaster />
			</div>
			<section className={styles.profileSection}>
				<div>
					<form className={styles.form}>
						<div className={styles.formInputGroup}>
							<label htmlFor="title">Title: </label>
							<input
								value={exercise.title}
								type="text"
								id="title"
								name="title"
								onChange={handleChanges}
							/>
						</div>

						<SelectCategories
							className={styles.formInputGroup}
							onChange={handleChanges}
						/>

						<div className={styles.formInputGroup}>
							<label htmlFor="slug">Slug: </label>
							<input
								value={exercise.slug}
								type="text"
								id="slug"
								name="slug"
								onChange={handleChanges}
							/>
						</div>

						<SelectExerciseType
							className={styles.formInputGroup}
							onChange={handleChanges}
						/>

						<SelectEquipment
							className={styles.formInputGroup}
							onChange={handleChanges}
						/>

						<div className={styles.formInputGroup}>
							<label htmlFor="active">Active: </label>
							<select
								defaultValue={exercise.active ? 'Yes' : 'No'}
								onChange={handleChanges}
							>
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
								value={exercise.description}
								onChange={handleChanges}
							></textarea>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="imageURL">Image URL: </label>
							<input
								type="text"
								id="imageURL"
								name="imageURL"
								onChange={handleChanges}
							/>
						</div>

						<div className={styles.formInputGroup}>
							<label htmlFor="videoURL">Video URL: </label>
							<input
								type="text"
								id="videoURL"
								name="videoURL"
								onChange={handleChanges}
							/>
						</div>
					</form>
				</div>
			</section>
		</main>
	)
}

export default EditExercise
