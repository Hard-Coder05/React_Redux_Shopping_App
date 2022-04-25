import { ActionTypes } from '../constants/action-types'

// actions always return a plain JS object 
// where key will be the ActionType and 
// payload which will be the data the method receives

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	}
}

export const setSelcetedProducts = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: products,
	}
}