import React from 'react'
import AppRoutes from '../../../AppRoutes'
import { useSelector } from 'react-redux'

const MainSide = () => {
	const userInfo = useSelector(state => state.user?.userData)
	return (
		<div className='w-full bg-slate-200 flex justify-center '>
			<div className='flex flex-col w-11/12'>
				{userInfo && (
					<p className='font-poppins text-3xl font-semibold my-12 select-none'>
						Hello {userInfo.userName} 👋🏼,
					</p>
				)}
				<div className=' bg-white rounded-3xl flex justify-center h-screen mb-12'>
					<AppRoutes />
				</div>
			</div>
		</div>
	)
}

export default MainSide
