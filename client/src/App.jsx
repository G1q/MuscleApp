import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLayout from './layouts/AdminLayout'
import Users from './pages/admin/Users/Users'
import ViewUser from './pages/admin/Users/ViewUser'
import EditUser from './pages/admin/Users/EditUser'
import CreateUser from './pages/admin/Users/CreateUser'
import Categories from './pages/admin/Categories/Categories'
import CreateCategory from './pages/admin/Categories/CreateCategory'
import EditCategory from './pages/admin/Categories/EditCategory'
import Exercises from './pages/admin/Exercises/Exercises'
import EditExercise from './pages/admin/Exercises/EditExercise'
import CreateExercise from './pages/admin/Exercises/CreateExercise'
import AdminSettings from './pages/admin/AdminSettings/'
import AdminStats from './pages/admin/AdminStats'
import MainLayout from './layouts/MainLayout'
import ExercisesList from './pages/Exercises'
import UserLayout from './layouts/UserLayout'
import UserProfile from './pages/user/UserProfile'
import UserWorkouts from './pages/user/UserWorkouts'
import UserDiary from './pages/user/UserDiary'
import UserSettings from './pages/user/UserSettings'

function App() {
	return (
		<Routes>
			<Route
				path="/admin"
				element={<AdminLayout />}
			>
				<Route
					index
					element={<AdminDashboard />}
				/>
				<Route
					path="/admin/users"
					element={<Users />}
				/>
				<Route
					path="/admin/users/view/:id"
					element={<ViewUser />}
				/>
				<Route
					path="/admin/users/edit/:id"
					element={<EditUser />}
				/>
				<Route
					path="/admin/users/create"
					element={<CreateUser />}
				/>

				<Route
					path="/admin/categories/"
					element={<Categories />}
				/>
				<Route
					path="/admin/categories/edit/:id"
					element={<EditCategory />}
				/>
				<Route
					path="/admin/categories/create"
					element={<CreateCategory />}
				/>

				<Route
					path="/admin/exercises/"
					element={<Exercises />}
				/>
				<Route
					path="/admin/exercises/edit/:id"
					element={<EditExercise />}
				/>
				<Route
					path="/admin/exercises/create"
					element={<CreateExercise />}
				/>

				<Route
					path="/admin/settings"
					element={<AdminSettings />}
				/>

				<Route
					path="/admin/stats"
					element={<AdminStats />}
				/>
			</Route>

			<Route
				path="/"
				element={<MainLayout />}
			>
				<Route
					index
					element={<h1>Homepage</h1>}
				/>

				<Route
					path="/exercises"
					element={<ExercisesList />}
				/>
			</Route>

			<Route
				path="/user"
				element={<UserLayout />}
			>
				<Route
					index
					element={<UserProfile />}
				/>
				<Route
					path="/user/workouts"
					element={<UserWorkouts />}
				/>
				<Route
					path="/user/diary"
					element={<UserDiary />}
				/>
				<Route
					path="/user/settings"
					element={<UserSettings />}
				/>
			</Route>
		</Routes>
	)
}

export default App
