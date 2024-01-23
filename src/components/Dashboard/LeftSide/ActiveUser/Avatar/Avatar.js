import React from 'react'

const Avatar = ({ url, up }) => {
	return (
		<img
			src={url}
			alt=''
			className={`rounded-full ${up && ' absolute -translate-y-1/2 ml-5'}`}
		/>
	)
}

export default Avatar
