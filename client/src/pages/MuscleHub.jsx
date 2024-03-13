import { Link } from 'react-router-dom'
import './styles/Muscles.css'
import useFetchData from '../hooks/useFetchData'

const MuscleHub = () => {
	const { data: muscles } = useFetchData('categories')

	return (
		<main>
			<h1 className="main__title">Muscles Hub</h1>

			<section className="muscles__section">
				{/* TODO: Image map */}
				{/* TODO: Temporarly: links, remove after image map */}
				<ul className="exercises__categories--list">
					{muscles.map((muscle) => (
						<li
							key={muscle._id}
							className="exercises__categories--list-item"
						>
							<Link
								to={`/muscles/${muscle.slug}`}
								className="exercises__categories--link"
							>
								{muscle.title}
							</Link>
						</li>
					))}
				</ul>
			</section>
		</main>
	)
}

export default MuscleHub
