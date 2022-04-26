import { ActionTypes } from '../constants/action-types'

// actions always return a plain JS object 
// where key will be the ActionType and 
// payload which will be the data the method receives

export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	};
};

export const selectedProduct = (products) => {
	return {
		type: ActionTypes.SELECTED_PRODUCTS,
		payload: products,
	};
};

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
	};
};