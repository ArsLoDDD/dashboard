import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from './Avatar/Avatar'
import { Link, NavLink } from 'react-router-dom'

const ActiveUser = () => {
	const userInfo = useSelector(state => state.user?.userData)
	if (userInfo)
		return (
			<NavLink
				to={'/profile'}
				className={({ isActive }) =>
					`flex justify-start items-center gap-2 w-9/12 mx-auto group  rounded-2xl py-2.5 px-4 duration-1000 ease-in-out ${
						isActive
							? 'hover:bg-white bg-purple-bg-item-menu '
							: ' hover:bg-purple-bg-item-menu'
					}`
				}
			>
				{({ isActive }) => (
					<>
						<Avatar url={userInfo.avatar} />
						<div
							className={`flex flex-col font-poppins gap-0.5 ${
								isActive
									? 'group-hover:translate-x-0 translate-x-3'
									: 'group-hover:translate-x-3'
							} duration-1000 `}
						>
							<span
								className={` text-sm font-medium  ${
									isActive
										? ' text-white group-hover:text-black'
										: 'text-black group-hover:text-white'
								} duration-500`}
							>
								{userInfo.userName}
							</span>
							<span
								className={` opacity-40 text-xs  ${
									isActive
										? ' text-white group-hover:text-black'
										: 'text-black group-hover:text-white'
								} duration-500`}
							>
								{userInfo.role}
							</span>
						</div>
					</>
				)}
			</NavLink>
		)
}

export default ActiveUser
