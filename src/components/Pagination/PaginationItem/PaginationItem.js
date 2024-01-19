import React from 'react'
import Chevron from './Chevron'

const PaginationItem = ({ up, setPage, page, disable }) => {
	const handlePageChange = () => {
		if (disable) return
		if (up) {
			setPage(prev => prev + 1)
		} else {
			setPage(prev => prev - 1)
		}
	}
	return (
		<div
			onClick={!page ? handlePageChange : () => {}}
			className={`border-2 py-1 px-3 flex justify-center items-center group rounded-md duration-700 ${
				disable
					? 'bg-gray-600 opacity-20 select-none'
					: ` hover:bg-purple-bg-item-menu hover:border-purple-bg-item-menu ${
							!page
								? 'cursor-pointer'
								: ' select-none bg-purple-bg-item-menu border-purple-bg-item-menu'
					  } border-btn-gray-border bg-btn-gray`
			} `}
		>
			{page && <span className='text-white'>{page}</span>}
			{!page && (
				<span>
					{up ? (
						<Chevron
							up={up}
							className={' group-hover:stroke-white duration-500'}
						/>
					) : (
						<Chevron
							className={`${
								disable
									? 'text-gray-600'
									: ' group-hover:stroke-white duration-500'
							}}`}
							up={up}
						/>
					)}
				</span>
			)}
		</div>
	)
}

export default PaginationItem
