import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import DashboardHome from './MenuItem/ProductItemIcons/DashboardHome'
import ProductIcon from './MenuItem/ProductItemIcons/ProductIcon'
import CustomersIcon from './MenuItem/ProductItemIcons/CustomersIcon'
import IncomeIcon from './MenuItem/ProductItemIcons/IncomeIcon'
import PromoteIcon from './MenuItem/ProductItemIcons/PromoteIcon'
import HelpIcon from './MenuItem/ProductItemIcons/HelpIcon'

const menuItems = [
	{
		icon: DashboardHome,
		text: 'Dashboard',
		link: '/',
	},
	{
		icon: ProductIcon,
		text: 'Product',
		link: '/product',
	},
	{
		icon: CustomersIcon,
		text: 'Customers',
		link: '/customers',
	},
	{
		icon: IncomeIcon,
		text: 'Income',
		link: '/income',
	},
	{
		icon: PromoteIcon,
		text: 'Promote',
		link: '/promote',
	},
	{
		icon: HelpIcon,
		text: 'Help',
		link: '/help',
	},
]

const Menu = () => {
	return (
		<nav className='w-9/12 mx-auto flex flex-col justify-center gap-3'>
			{menuItems.map((item, index) => (
				<MenuItem
					key={item.text}
					index={index}
					icon={item.icon}
					text={item.text}
					link={item.link}
				/>
			))}
		</nav>
	)
}

export default Menu
