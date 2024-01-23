import React from 'react'
import Avatar from '../../../Dashboard/LeftSide/ActiveUser/Avatar/Avatar'
import { useSelector } from 'react-redux'

const ProfileViewInfo = () => {
	const userInfo = useSelector(state => state.user.userData)
	return (
		<div className='  h-2/5 rounded-b-3xl relative'>
			{userInfo && (
				<>
					<Avatar url={userInfo.avatar.large} up />
					<div className=' ml-48 pt-3 font-poppins flex justify-between items-center'>
						<div>
							<p className=' font-bold text-2xl'>{userInfo.userName}</p>
							<p className=' text-md opacity-60'>{userInfo.role}</p>
						</div>
						<button disabled className=' h-10 mr-5 text-sm bg-gray-400 px-3 text-gray-300 rounded-3xl '>
							Edit Profile
						</button>
					</div>
				</>
			)}
		</div>
	)
}

export default ProfileViewInfo
