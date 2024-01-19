import { combineReducers } from 'redux'
import mainSlice from './slices/mainSlice'
import menuSlice from './slices/menuSlice'
import userSlice from './slices/userSlice'
import customersSlice from './slices/customersSlice'

const rootReducer = combineReducers({
	main: mainSlice,
	menu: menuSlice,
	user: userSlice,
	customers: customersSlice,
})

export default rootReducer
