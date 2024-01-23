import React from 'react'
import StatusButton from './StatusButton/StatusButton'

const style = 'p-2 '

const CustomersTableItems = ({
	country,
	email,
	phone,
	status,
	username,
	company,
}) => {
	return (
		<tr className='border-b-2 border-black h-16 border-opacity-5 '>
			<td className={`${style} w-3/12 `}>{username}</td>
			<td className={`${style} w-2/12`}>{company}</td>
			<td className={`${style} w-2/12`}>{phone}</td>
			<td className={`${style} w-2/12`}>{email}</td>
			<td className={`${style} w-2/12`}>{country}</td>
			<td className={`${style} w-1/12`}>{<StatusButton status={status} />}</td>
		</tr>
	)
}

export default CustomersTableItems
