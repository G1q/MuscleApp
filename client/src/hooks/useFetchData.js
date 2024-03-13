import { useState, useEffect } from 'react'
import axiosInstance from '../config/axios.config'
import toast from 'react-hot-toast'

function useFetchData(url) {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get(url)
				setData(response.data)
			} catch (error) {
				error.response.data.message
					? toast.error(`Error ${error.response.status}: ${error.response.data.message}`, { position: 'top-right', id: url })
					: toast.error(error.message, { position: 'top-right', id: url })
			}
		}

		fetchData()
	}, [url])

	return { data }
}

export default useFetchData
