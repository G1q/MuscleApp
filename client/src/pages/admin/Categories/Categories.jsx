import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Table from '../../../components/Table'
import TableFilter from '../../../components/TableFilter'

const CATEGORIES = [
	{
		id: 1,
		title: 'Deltoids',
		parent: 0,
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'deltoids',
		active: true,
	},
	{
		id: 2,
		title: 'Front deltoids',
		parent: 'Deltoids',
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'front-deltoids',
		active: true,
	},
	{
		id: 3,
		title: 'Lats - N/A',
		parent: 'Back',
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'front-deltoids',
		active: false,
	},
	{
		id: 4,
		title: 'Traps',
		parent: 0,
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'front-deltoids',
		active: true,
	},
	{
		id: 5,
		title: 'Gluteus maximus',
		parent: 'Feet',
		media: {
			imageURL: 'https://image.com/123',
			videoURL: 'https://youtube.com/video/123',
		},
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus alias in quod perspiciatis. Neque blanditiis minima ad repellat distinctio libero eaque fuga non aliquam quidem natus temporibus quia provident, pariatur enim, sit earum sapiente omnis! Adipisci officia officiis, porro nostrum, fugiat quam fuga atque accusamus aperiam est saepe, reiciendis ullam? Nemo cupiditate facilis blanditiis a perspiciatis. Itaque ducimus officia sapiente quo ex architecto consequatur, voluptatum expedita voluptatibus? Inventore rerum commodi, corporis velit impedit illo ullam in adipisci sed, accusamus dolorum minima molestiae atque, aspernatur necessitatibus sequi voluptas exercitationem et obcaecati qui ratione voluptate. Provident modi numquam quaerat sed pariatur est!',
		slug: 'front-deltoids',
		active: true,
	},
]

const Categories = () => {
	const [categories, setCategories] = useState(CATEGORIES)
	const [searchQuery, setSearchQuery] = useState('')

	const deleteCategory = async (id) => {
		const confirm = window.confirm('Are you sure you want to delete this category?')

		if (confirm) {
			try {
				setCategories(categories.filter((category) => category.id !== id))
				toast.success(`Category ${id} deleted successfully!`, { position: 'top-right', id: 'delete-category' })
			} catch (err) {
				toast.error(err.message)
			}
		}
	}

	return (
		<main>
			<h1>Categories</h1>
			<section>
				<div className="actions">
					<Link to="./create">Add new category</Link>
				</div>
				<Toaster />
				<TableFilter onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
				{categories.length > 0 ? (
					<Table headers={['Title', 'Category', 'Active', 'View', 'Edit', 'Delete']}>
						<tbody>
							{categories
								.filter((category) => category.title.concat(category.parent).toLowerCase().includes(searchQuery))
								.map((category) => (
									<tr key={category.id}>
										<td>{category.title}</td>
										<td>{category.parent !== 0 && category.parent}</td>
										<td>{category.active ? 'Yes' : 'No'}</td>
										<td>
											<Link
												to={`/categories/${category.slug}`}
												target="_blank"
											>
												<RiEyeLine color="royalblue" />
											</Link>
										</td>
										<td>
											<Link to={`./edit/${category.id}`}>
												<RiEditLine color="forestgreen" />
											</Link>
										</td>
										<td>
											<button onClick={() => deleteCategory(category.id)}>
												<RiDeleteBinLine color="crimson" />
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				) : (
					<p>No registered categories</p>
				)}
			</section>
		</main>
	)
}

export default Categories
