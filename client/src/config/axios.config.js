import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:4002/api/v1/',
})

export default axiosInstance
