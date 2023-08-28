import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedProduct = (product) => {
    return {
        types: ActionTypes.SELECTED_PRODUCTS,
        payload: product,
    }
}

export const deleteProduct = (product) => {
    return {
        tpyes: ActionTypes.DELETE_PRODUCT,
        payload: product,
    }
}