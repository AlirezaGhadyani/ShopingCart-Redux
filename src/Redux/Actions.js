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
}