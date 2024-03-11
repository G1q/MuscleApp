import { Link, useParams } from 'react-router-dom'
import './styles/Muscles.css'
import Breadcrumbs from '../components/Breadcrumbs'

const MUSCLE = {
	id: 1,
	title: 'Neck',
	parent: 'asdcdsfsjdfn23o13321!@D11f',
	imageURL: 'https://iron-neck.co.uk/cdn/shop/articles/Muscles-neck.jpg',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinct',
	slug: 'neck',
	active: true,
}

const MUSCLE_PARENT = {
	id: 1,
	title: 'Deltoids',
	slug: 'deltoids',
}

const MUSCLE_CHILDREN = [
	{
		id: 1,
		title: 'Sternocleidomastoid',
		slug: 'sternocleidomastoid',
	},
	{
		id: 2,
		title: 'Splenius',
		slug: 'splenius',
	},
]

const MusclePage = () => {
	const { slug } = useParams()

	return (
		<main>
			<Breadcrumbs
				type="muscles"
				category={MUSCLE}
				parent={MUSCLE_PARENT}
			/>
			<h1 className="main__title">{slug}</h1>
			{MUSCLE.active ? (
				<section className="muscles__section muscles__section--page">
					<div className="muscles__section--info">
						<div className="muscles__section--gallery">
							{/* TODO: create image gallery */}
							<img
								src={MUSCLE.imageURL}
								alt={MUSCLE.title}
							/>
						</div>
						<div className="muscles__section--actions">
							{MUSCLE_CHILDREN.length > 0 && (
								<ul>
									<h2>Subcategories:</h2>
									{MUSCLE_CHILDREN.map((child) => (
										<li key={child.id}>
											<Link to={`/muscles/${child.slug}`}>{child.title}</Link>
										</li>
									))}
								</ul>
							)}
							<div className="muscles__section--buttons">
								<Link to={`/exercises/${MUSCLE.slug}`}>{`Exercises for ${MUSCLE.title}`}</Link>
								{MUSCLE_CHILDREN.length > 0 &&
									MUSCLE_CHILDREN.map((child) => (
										<Link
											key={child.id}
											to={`/exercises/${child.slug}`}
										>{`Exercises form ${child.title}`}</Link>
									))}
							</div>
						</div>
					</div>
					<div className="muscles__section--details">{MUSCLE.description}</div>
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
