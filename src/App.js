import React, { useEffect } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import { useDispatch } from 'react-redux'
import { fetchUser } from './redux/slices/userSlice'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchUser())
	}, [])

	return (
		<>
			<Dashboard />
		</>
	)
}

export default App
