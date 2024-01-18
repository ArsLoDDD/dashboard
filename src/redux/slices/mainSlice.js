import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
}

const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setData: (state, action) => {
			state.data = action.payload
		},
	},
})

export const { setData } = mainSlice.actions
export default mainSlice.reducer
