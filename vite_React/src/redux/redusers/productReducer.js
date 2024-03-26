import * as actionType from '../constants/productConstant';

export const getProductReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS: // Use a different action type
            return { product: action.payload };
        case actionType.GET_PRODUCT_FAIL: // Use a different action type
            return { error: action.payload };
        default:
            return state;
    }
};

export const getProductDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAIL_SUCCESS: // Use a different action type
            return { product: action.payload };
        case actionType.GET_PRODUCT_DETAIL_FAIL: // Use a different action type
            return { error: action.payload };
        default:
            return state;
    }
};
