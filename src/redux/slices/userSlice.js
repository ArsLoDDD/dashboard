import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	userData: {},
	requestStatus: 'idle',
	error: null,
}

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
	try {
		if (!localStorage.getItem('userInfo')) {
			const { data } = await axios.get('https://randomuser.me/api/')
			const userInfo = {
				userName: `${data.results[0].name.first} ${data.results[0].name.last}`,
				avatar: data.results[0].picture.thumbnail,
				role: 'Product Manager',
			}
			return userInfo
		}
	} catch (error) {
		console.log(error)
	}
})

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUser.pending, (state, action) => {
				state.requestStatus = 'pending'
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.requestStatus = 'fulfilled'
				if (!localStorage.getItem('userInfo')) {
					state.userData = action.payload
					localStorage.setItem('userInfo', JSON.stringify(action.payload))
				} else {
					state.userData = JSON.parse(localStorage.getItem('userInfo'))
				}
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.requestStatus = 'rejected'
				state.error = action.error.message
			})
	},
})

export default userSlice.reducer
export { fetchUser }
