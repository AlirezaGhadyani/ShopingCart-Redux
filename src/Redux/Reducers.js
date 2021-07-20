const initialState = {
    homeProducts: {
        products: [],
        loading: false,
        error: null
    },
    singleProduct: {
        item: {},
        loading: false,
        error: null
    }
};

export const productsReducer = ( state = initialState.homeProducts, { type, payload } ) => {
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
};

export const singleProductReducer = ( state = initialState.singleProduct, { type, payload } ) => {
    switch ( type ) {
        case "FETCHING_SINGLE_PRODUCT":
            return {
                ...state,
                item: {},
                loading: true,
                error: null
            };
        case "FETCHING_SINGLE_PRODUCT_SUCCESSFUL":
            return {
                ...state,
                item: payload,
                loading: false,
                error: null
            };
        case "FETCHING_SINGLE_PRODUCT_FAILURE":
            return {
                ...state,
                item: {},
                loading: false,
                error: payload
            };
        default: return state
    };
};