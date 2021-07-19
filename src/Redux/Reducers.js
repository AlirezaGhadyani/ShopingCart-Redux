const productState = {
    products: [],
    loading: false,
    error: null
};

export const productReducer = ( state = productState, { type, payload } ) => {
    switch ( type ) {
        case "FETCHING_PRODUCTS":
            return {
                ...state,
                loading: true,
            };
        case "FETCHING_PRODUCTS_SUCCESSFUL":
            return {
                ...state,
                products: payload,
                loading: false
            };
        case "FETCHING_PRODUCTS_FAILURE":
            return {
                ...state,
                products: [],
                error: payload
            };
    }
}