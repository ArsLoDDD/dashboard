import React from 'react'
import PaginationItem from './PaginationItem/PaginationItem'
import { useSelector } from 'react-redux'

const Pagination = ({ page, setPage }) => {
	const pageCount = useSelector(state => state.customers?.pageCount)
	return (
		<div className='flex gap-3'>
			<PaginationItem up={false} setPage={setPage} disable={page === 1} />
			<PaginationItem page={page} />
			<PaginationItem
				up={true}
				setPage={setPage}
				disable={page === pageCount}
			/>
		</div>
	)
}

export default Pagination
