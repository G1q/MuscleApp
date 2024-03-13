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
import AdminSettings from './pages/admin/Settings/AdminSettings/'
import AdminStats from './pages/admin/AdminStats'
import MainLayout from './layouts/MainLayout'
import ExercisesList from './pages/Exercises'
import UserLayout from './layouts/UserLayout'
import UserProfile from './pages/user/UserProfile'
import UserWorkouts from './pages/user/UserWorkouts'
import UserDiary from './pages/user/UserDiary'
import UserSettings from './pages/user/UserSettings'
import NoHeaderLayout from './layouts/NoHeaderLayout'
import MuscleHub from './pages/MuscleHub'
import MusclePage from './pages/MusclePage'
import ExercisePage from './pages/ExercisePage'
import Login from './pages/auth/Login'
import { AuthProvider } from './contexts/AuthContext'
import Register from './pages/auth/Register'
import RolesSettings from './pages/admin/Settings/RolesSettings'
import ExerciseTypeSettings from './pages/admin/Settings/ExerciseTypeSettings'
import ExerciseEquipmentSettings from './pages/admin/Settings/ExerciseEquipmentSettings'

function App() {
	return (
		<AuthProvider>
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
						path="/admin/categories/edit/:slug"
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
						path="/admin/exercises/edit/:slug"
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
						path="/admin/settings/roles"
						element={<RolesSettings />}
					/>

					<Route
						path="/admin/settings/exercise-type"
						element={<ExerciseTypeSettings />}
					/>

					<Route
						path="/admin/settings/exercise-equipment"
						element={<ExerciseEquipmentSettings />}
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

					<Route
						path="/exercises/:slug"
						element={<ExercisePage />}
					/>

					<Route
						path="/muscles"
						element={<MuscleHub />}
					/>

					<Route
						path="/muscles/:slug"
						element={<MusclePage />}
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

				<Route
					path="/"
					element={<NoHeaderLayout />}
				>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="*"
						element={<h1>Page not found 404</h1>}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App
