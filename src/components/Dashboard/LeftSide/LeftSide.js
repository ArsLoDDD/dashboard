import React from 'react'
import Logo from '../../Logo/Logo'
import Menu from './Menu/Menu'
import ActiveUser from './ActiveUser/ActiveUser'

const LeftSide = () => {
	return (
		<div className='bg-white w-3/12 flex flex-col justify-between py-12'>
			<div className='flex flex-col justify-center items-center'>
				<Logo version={'0.01'} />
				<Menu />
			</div>
			<ActiveUser />
		</div>
	)
}

export default LeftSide
