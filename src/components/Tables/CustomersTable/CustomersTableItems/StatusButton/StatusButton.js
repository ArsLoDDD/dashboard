import React from 'react'

const StatusButton = ({ status }) => {
	return (
		<div
			className={` border-2 text-center  p-1 rounded-lg ${
				status
					? ' border-green-status bg-green-status-bg text-green-status'
					: 'border-red-status bg-red-status-bg text-red-status'
			}`}
		>
			<span className=' select-none'>{status ? 'Active' : 'Inactive'}</span>
		</div>
	)
}

export default StatusButton
