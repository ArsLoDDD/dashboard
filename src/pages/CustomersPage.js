import React, { useEffect, useState } from 'react'
import CustomersTable from '../components/Tables/CustomersTable/CustomersTable'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../redux/slices/customersSlice'
import Pagination from '../components/Pagination/Pagination'

const CustomersPage = () => {
	const dispatch = useDispatch()
	const customers = useSelector(state => state.customers?.customers)
	const itemsCount = useSelector(state => state.customers?.itemsCount)

	const [page, setPage] = useState(1)

	useEffect(() => {
		dispatch(fetchCustomers(page))
	}, [page])
	return (
		<div className='w-11/12 mx-auto'>
			<CustomersTable customers={customers} />
			<div className='flex justify-between items-center mx-4'>
				<p className=' opacity-30 font-poppins select-none'>
					Showing data {8 * (page - 1) + 1} to {page * 8} of {itemsCount}{' '}
					entries
				</p>
				<Pagination page={page} setPage={setPage} />
			</div>
		</div>
	)
}

export default CustomersPage
