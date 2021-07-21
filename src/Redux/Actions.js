import axios from "axios";

// HOME PAGE ACTIONS
export const getProducts = () => async ( dispatch, getState ) => {
    // FETCHING ACTION
    dispatch( { type: "FETCHING_PRODUCTS" } );
    try {
        const response = await axios.get( 'https://fakestoreapi.com/products' );
        // ACTION SUCCESSFUL FETCH
        dispatch( { type: "FETCHING_PRODUCTS_SUCCESSFUL", payload: response.data } );
    } catch ( error ) {
        // ACTION FAILURE FETCH
        dispatch( { type: "FETCHING_PRODUCTS_FAILURE", paylocd: error } );
    }
}

// SINGLE PRODUCT ACTIONS
export const getProduct = ( productID ) => async ( dispatch, getState ) => {
    // FETCHING ACTION
    dispatch( { type: "FETCHING_SINGLE_PRODUCT" } );
    try {
        const response = await axios.get( `https://fakestoreapi.com/products/${productID}` );
        // ACTION SUCCESSFUL FETCH
        dispatch( { type: "FETCHING_SINGLE_PRODUCT_SUCCESSFUL", payload: response.data } );
    } catch ( error ) {
        // ACTION FAILURE FETCH
        dispatch( { type: "FETCHING_SINGLE_PRODUCT_FAILURE", paylocd: error } );
    }
};

// SINGLE PRODUCT REMOVE ACTION
export const removeSingleProduct = () => {
    return {
        type: "REMOVE_SINGLE_PRODUCT"
    };
};

// ADD TO CART
export const addToCart = ( product ) => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        payload: product
    };
};

// GET TOTAL QTY
export const getTotalQty = () => {
    return {
        type: "GET_TOTAL_QTY"
    };
}

// // INCREASE TOTAL QTY CART
// export const increaseTotalQty = () => {
//     return { type: "INCREASE_TOTAL_QTY" };
// };

// // DECREASE TOTAL QTY CART
// export const decreaseTotalQty = () => {
//     return { type: "DECREASE_TOTAL_QTY" };
// };

// GET TOTAL PRICE
export const getTotalPrice = ( price ) => {
    return {
        type: "GET_TOTAL_PRICE",
        payload: price
    };
};

// REMOVE CART ITEM
export const removeCartItem = ( itemId ) => {
    return {
        type: "REMOVE_CART_ITEM",
        payload: itemId
    };
};