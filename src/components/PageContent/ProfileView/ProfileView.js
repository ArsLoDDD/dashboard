import React from 'react'
import ProfileViewBg from './ProfileViewBg/ProfileViewBg'
import ProfileViewInfo from './ProfileViewInfo/ProfileViewInfo'
import ComingSoon from '../../ComingSoon/ComingSoon'

const ProfileView = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='bg-slate-100 w-11/12 h-2/5 mx-auto rounded-3xl mt-5'>
				<ProfileViewBg />
				<ProfileViewInfo />
			</div>
			<div className=' w-10/12 h-2/4 mx-auto bg-slate-100 rounded-b-3xl flex justify-center items-center relative'>
				<ComingSoon />
			</div>
		</div>
	)
}

export default ProfileView
