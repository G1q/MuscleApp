import { RiDeleteBinLine, RiEditLine, RiEyeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import Table from '../../../components/Table'
import TableFilter from '../../../components/TableFilter'
import axiosInstance from '../../../config/axios.config'
import { useAuth } from '../../../contexts/AuthContext'
import useFetchData from '../../../hooks/useFetchData'

const Users = () => {
	const { getUserId } = useAuth()
	const [searchQuery, setSearchQuery] = useState('')
	const { data: users } = useFetchData('users')

	const deleteUser = async (id) => {
		const confirmation = window.confirm('Are you sure you want to delete this user?')

		if (confirmation) {
			try {
				await axiosInstance.delete(`/users/${id}`)
				toast.success(`User deleted successfully!`, { position: 'top-right', id: 'delete-user' })
			} catch (error) {
				error.response.data.message
					? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: 'get-users' })
					: toast.error(error.message, { position: 'top-right', id: 'get-users' })
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
									<tr key={user._id}>
										<td>{user.username}</td>
										<td>{user.role}</td>
										<td>{user.active ? 'Yes' : 'No'}</td>
										<td>
											<Link to={`./view/${user._id}`}>
												<RiEyeLine color="royalblue" />
											</Link>
										</td>
										<td>
											<Link to={`./edit/${user._id}`}>
												<RiEditLine color="forestgreen" />
											</Link>
										</td>
										<td>
											{getUserId() !== user._id && (
												<button onClick={() => deleteUser(user._id)}>
													<RiDeleteBinLine color="crimson" />
												</button>
											)}
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
