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