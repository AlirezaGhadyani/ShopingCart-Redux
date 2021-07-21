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
    },
    cart: {
        items: [],
        totalQty: 0,
        totalPrice: 0
    },
    userStepInfo: []
};

// PRODUCTS REDUCER
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

// SINGLE PRODUCT REDUCER
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
        case "REMOVE_SINGLE_PRODUCT":
            return {
                ...state,
                item: {},
                loading: false,
                error: null
            };
        default: return state
    };
};

// CART REDUCER
export const cartReducer = ( state = initialState.cart, { type, payload } ) => {
    switch ( type ) {
        case "ADD_PRODUCT_TO_CART":
            return {
                ...state,
                items: [{ ...payload, qty: 1 }, ...state.items]
            };
        case "GET_TOTAL_QTY":
            return {
                ...state,
                totalQty: state.items.length !== 0 ?
                    state.items
                        .map( item => item.qty )
                        .reduce( ( acc, curr ) => acc + curr )
                    : 0
            };
        case "GET_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: payload
            };
        case "REMOVE_CART_ITEM":
            return {
                ...state,
                items: state.items.filter( item => item.id !== payload )
            };
        default: return state;
    }
};

// USER STEP INFO REDUCER
export const userStepInfoReducer = ( state = initialState.userStepInfo, { type, payload } ) => {
    switch ( type ) {
        case "GET_USER_STEP_INFORMATION":
            return {
                ...state,
                payload
            };
        default: return state
    }
};