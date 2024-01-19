import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	customers: [],
	pageCount: null,
	itemsCount: null,
}

const fetchCustomers = createAsyncThunk(
	'customers/fetchCustomers',
	async page => {
		try {
			const { data } = await axios.get('./../../data/userData.json')
			const newData = []
			for (let i = 8 * (page - 1); i < page * 8; i++) {
				newData.push(data[i])
			}
			console.log(newData)
			return {
				customers: newData,
				pageCount: Math.ceil(data.length / 8),
				itemsCount: data.length,
			}
		} catch (error) {
			console.log(error)
		}
	}
)

const customersSlice = createSlice({
	name: 'customers',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchCustomers.pending, (state, action) => {
				state.requestStatus = 'pending'
			})
			.addCase(fetchCustomers.fulfilled, (state, action) => {
				state.requestStatus = 'fulfilled'
				state.customers = action.payload.customers
				state.pageCount = action.payload.pageCount
				state.itemsCount = action.payload.itemsCount
				console.log(action.payload.pageCount)
			})
			.addCase(fetchCustomers.rejected, (state, action) => {
				state.requestStatus = 'rejected'
				state.error = action.error.message
			})
	},
})

export default customersSlice.reducer
export { fetchCustomers }
