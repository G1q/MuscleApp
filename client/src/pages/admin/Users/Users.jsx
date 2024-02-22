import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Table from '../../../components/Table'
import TableFilter from '../../../components/TableFilter'

const USERS = [
	{
		id: 1,
		username: 'admin',
		active: true,
		role: 'admin',
	},
	{
		id: 2,
		username: 'G1q',
		active: true,
		role: 'admin',
	},
	{
		id: 3,
		username: 'user',
		active: true,
		role: 'user',
	},
	{
		id: 4,
		username: 'test',
		active: false,
		role: 'user',
	},
]

const Users = () => {
	const [users, setUsers] = useState(USERS)
	const [searchQuery, setSearchQuery] = useState('')

	const deleteUser = async (id) => {
		const confirmation = window.confirm('Are you sure you want to delete this user?')

		if (confirmation) {
			try {
				setUsers(users.filter((user) => user.id !== id))
				toast.success(`User ${id} deleted successfully!`, { position: 'top-right', id: 'delete-user' })
			} catch (err) {
				toast.error(err.message)
			}
		}
	}

	return (
		<main>
			<h1>Users</h1>
			<section>
				<div className="actions">
					<Link to="./create">Add new user</Link>
				</div>
				<Toaster />
				<TableFilter onChange={(e) => setSearchQuery(e.target.value.toLowerCase())} />
				{users.length > 0 ? (
					<Table headers={['Username', 'Role', 'Active', 'View', 'Edit', 'Delete']}>
						<tbody>
							{users
								.filter((user) => user.username.toLowerCase().includes(searchQuery))
								.map((user) => (
									<tr key={user.id}>
										<td>{user.username}</td>
										<td>{user.role}</td>
										<td>{user.active ? 'Yes' : 'No'}</td>
										<td>
											<Link to={`./view/${user.id}`}>
												<RiEyeLine color="royalblue" />
											</Link>
										</td>
										<td>
											<Link to={`./edit/${user.id}`}>
												<RiEditLine color="forestgreen" />
											</Link>
										</td>
										<td>
											<button onClick={() => deleteUser(user.id)}>
												<RiDeleteBinLine color="crimson" />
											</button>
										</td>
									</tr>
								))}
						</tbody>
					</Table>
				) : (
					<p>No registered user</p>
				)}
			</section>
		</main>
	)
}

export default Users
