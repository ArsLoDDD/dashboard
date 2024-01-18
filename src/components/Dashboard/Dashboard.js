import React from 'react'
import MainSide from './MainSide/MainSide'
import LeftSide from './LeftSide/LeftSide'

const Dashboard = () => {
	return (
		<div className='flex bg-red-800 w-full h-screen'>
			<LeftSide />
			<MainSide />
		</div>
	)
}

export default Dashboard
