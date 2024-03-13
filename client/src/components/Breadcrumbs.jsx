/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { LuChevronsRight } from 'react-icons/lu'
import './styles/Breadcrumbs.css'

const Breadcrumbs = ({ type, category, parent = 0 }) => {
	let mainCategory = ''

	if (type === 'muscles')
		mainCategory = {
			url: '/muscles',
			title: 'Muscle HUB',
		}

	return (
		<ul className="page__breadcrumbs">
			<Link to={mainCategory.url}>{mainCategory.title}</Link>
			<LuChevronsRight />
			{category.parent !== 0 && (
				<>
					<li>
						<Link to={`/muscles/${parent.slug}`}>{parent.title}</Link>
					</li>
					<LuChevronsRight />
				</>
			)}
			<li>
				<p>{category.title}</p>
			</li>
		</ul>
	)
}

export default Breadcrumbs
