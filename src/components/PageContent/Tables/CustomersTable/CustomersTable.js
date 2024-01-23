import React from 'react'
import CustomersTableItems from './CustomersTableItems/CustomersTableItems'

const style = 'p-2'

const CustomersTable = ({ customers }) => {
	return (
		<div className='mb-6'>
			<table className=' border-collapse'>
				<thead className='border-b-2 border-black h-20 border-opacity-5'>
					<tr className='text-left text-black opacity-20 font-poppins text-xm '>
						<th className={`${style} w-3/12`}>Customer Name</th>
						<th className={`${style} w-2/12`}>Company</th>
						<th className={`${style} w-2/12 whitespace-nowrap`}>
							Phone Number
						</th>
						<th className={`${style} w-2/12`}>Email</th>
						<th className={`${style} w-2/12`}>Country</th>
						<th className={`${style} w-1/12`}>Status</th>
					</tr>
				</thead>
				<tbody className=''>
					{customers?.map(customer => (
						<CustomersTableItems
							key={customer.userId}
							country={customer.country}
							company={customer.company}
							email={customer.email}
							phone={customer.phone}
							status={customer.status}
							username={customer.username}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CustomersTable
