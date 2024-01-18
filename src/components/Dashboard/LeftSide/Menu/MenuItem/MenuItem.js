import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { setActiveElement } from '../../../../../redux/slices/menuSlice'
import ChevronRight from './ProductItemIcons/ChevronRight'

const MenuItem = ({ icon, text, link, index = 0 }) => {
	const dispatch = useDispatch()

	const handleChangeActiveElement = () => {
		dispatch(setActiveElement(index))
	}

	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				`flex justify-between items-center py-2.5 px-4   rounded-2xl gap-2 duration-700 ease-in-out  ${
					isActive
						? 'hover:bg-opacity-80 bg-purple-bg-item-menu '
						: 'hover:bg-opacity-10 hover:bg-purple-bg-item-menu'
				}`
			}
			onClick={handleChangeActiveElement}
		>
			{({ isActive }) => (
				<>
					<div className='flex gap-4 items-center'>
						{React.createElement(icon, { isActive, additionalProp: 'value' })}
						<span
							className={`text-lg font-poppins ${
								isActive ? 'text-white' : 'text-gray-item '
							}`}
						>
							{text}
						</span>
					</div>
					{index !== 0 && <ChevronRight isActive={isActive} />}
				</>
			)}
		</NavLink>
	)
}

export default MenuItem
