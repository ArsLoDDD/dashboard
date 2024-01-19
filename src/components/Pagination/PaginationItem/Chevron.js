import React from 'react'

const Chevron = ({ up, className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke={'black'}
			className={`${className} w-5 h-5' ${!up ? 'transform -rotate-180' : ''}`}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='m8.25 4.5 7.5 7.5-7.5 7.5'
			/>
		</svg>
	)
}

export default Chevron
