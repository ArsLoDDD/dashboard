import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CustomersPage from './pages/CustomersPage'
import IncomePage from './pages/IncomePage'
import PromotePage from './pages/PromotePage'
import HelpPage from './pages/HelpPage'

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/product' element={<ProductPage />} />
			<Route path='/customers' element={<CustomersPage />} />
			<Route path='/income' element={<IncomePage />} />
			<Route path='/promote' element={<PromotePage />} />
			<Route path='/help' element={<HelpPage />} />

			<Route path='*' element={<h1>error</h1>} />
		</Routes>
	)
}

export default AppRoutes
