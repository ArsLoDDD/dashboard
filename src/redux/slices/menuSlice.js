import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	activeElement: 0,
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setActiveElement: (state, action) => {
			state.activeElement = action.payload
		},
	},
})

export const { setActiveElement } = menuSlice.actions
export default menuSlice.reducer
