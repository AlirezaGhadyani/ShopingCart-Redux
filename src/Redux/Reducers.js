const initialState = {
    homeProducts: {
        products: [],
        loading: false,
        error: null
    }
};

export const productReducer = ( state = initialState.homeProducts, { type, payload } ) => {
    switch ( type ) {
        case "FETCHING_PRODUCTS":
            return {
                ...state,
                products: [],
                loading: true,
                error: null
            };
        case "FETCHING_PRODUCTS_SUCCESSFUL":
            return {
                ...state,
                products: payload,
                loading: false,
                error: null
            };
        case "FETCHING_PRODUCTS_FAILURE":
            return {
                ...state,
                products: [],
                loading: false,
                error: payload
            };
        default: return state;
    }
}