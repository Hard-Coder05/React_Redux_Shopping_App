// reducer always takes the initial state and the action

import { ActionTypes } from '../constants/action-types'

const initialState = {
	products: [
		{
			id:1,
			title: "Dipesh",
			category: "programmer",
		}
	]
}
// export const productReducer = (state, action) => {}
// action => {type, payload}
export const productReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
}