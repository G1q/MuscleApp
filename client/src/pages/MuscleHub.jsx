import { Link } from 'react-router-dom'
import './styles/Muscles.css'

const MUSCLES = [
	{
		id: 1,
		title: 'Deltoids',
		parent: 0,
		imageURL: 'https://exrx.net/application/files/7215/1007/0286/SternoSideSmall.png',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'deltoids',
		active: true,
	},
	{
		id: 2,
		title: 'Front deltoids',
		parent: 'Deltoids',
		imageURL: 'https://image.com/123',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'front-deltoids',
		active: true,
	},
	{
		id: 3,
		title: 'Lats',
		parent: 'Back',
		imageURL: 'https://image.com/123',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'lats',
		active: false,
	},
	{
		id: 4,
		title: 'Traps',
		parent: 0,
		imageURL: 'https://image.com/123',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'traps',
		active: true,
	},
	{
		id: 5,
		title: 'Neck',
		parent: 0,
		imageURL: 'https://exrx.net/application/files/7215/1007/0286/SternoSideSmall.png',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'neck',
		active: true,
	},
]

const MuscleHub = () => {
	return (
		<main>
			<h1 className="main__title">Muscles Hub</h1>

			<section className="muscles__section">
				{/* TODO: Image map */}
				{/* TODO: Temporarly: links, remove after image map */}
				<ul className="exercises__categories--list">
					{MUSCLES.map((muscle) => (
						<li
							key={muscle.id}
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
