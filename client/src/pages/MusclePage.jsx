/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom'
import './styles/Muscles.css'
import Breadcrumbs from '../components/Breadcrumbs'
import { useEffect, useState } from 'react'
import axiosInstance from '../config/axios.config'
import toast from 'react-hot-toast'
import useFetchData from '../hooks/useFetchData'
import PlaceholderAvatar from '../components/PlaceholderAvatar'

const MusclePage = () => {
	const { slug } = useParams()
	const [category, setCategory] = useState({})

	const { data: children } = useFetchData(`categories/params/${category.title}`)

	useEffect(() => {
		getCategory()
	}, [slug])

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

	return (
		<main>
			<Breadcrumbs
				type="muscles"
				category={category}
			/>
			<h1 className="main__title">{slug}</h1>
			{category.active ? (
				<section className="muscles__section muscles__section--page">
					<div className="muscles__section--info">
						<div className="muscles__section--gallery">
							{/* TODO: create image gallery */}
							{category.imageURL ? (
								<img
									src={category.imageURL}
									alt={category.title}
								/>
							) : (
								<PlaceholderAvatar />
							)}
						</div>
						<div className="muscles__section--actions">
							{children.length > 0 && (
								<ul>
									<h2>Subcategories:</h2>
									{children.map((child) => (
										<li key={child.id}>
											<Link to={`/muscles/${child.slug}`}>{child.title}</Link>
										</li>
									))}
								</ul>
							)}
							<div className="muscles__section--buttons">
								<Link to={`/exercises/${category.slug}`}>{`Exercises for ${category.title}`}</Link>
								{children.length > 0 &&
									children.map((child) => (
										<Link
											key={child._id}
											to={`/exercises/${child.slug}`}
										>{`Exercises form ${child.title}`}</Link>
									))}
							</div>
						</div>
					</div>
					<div className="muscles__section--details">{category.description}</div>
				</section>
			) : (
				<p>
					This page is inactive! Please go back to <Link to="/muscles">Muscle Hub</Link>
				</p>
			)}
		</main>
	)
}

export default MusclePage
