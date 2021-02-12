import {

    ALL_SUPPLIERS_REQUEST, 
    ALL_SUPPLIERS_SUCCESS,
    ALL_SUPPLIERS_FAIL,
    NEW_SUPPLIER_REQUEST,
    NEW_SUPPLIER_SUCCESS,
    NEW_SUPPLIER_RESET,
    NEW_SUPPLIER_FAIL,
    DELETE_SUPPLIER_REQUEST,
    DELETE_SUPPLIER_SUCCESS,
    DELETE_SUPPLIER_RESET,
    DELETE_SUPPLIER_FAIL,
    UPDATE_SUPPLIER_REQUEST,
    UPDATE_SUPPLIER_SUCCESS,
    UPDATE_SUPPLIER_RESET,
    UPDATE_SUPPLIER_FAIL,
    SUPPLIER_DETAILS_REQUEST,
    SUPPLIER_DETAILS_SUCCESS,
    SUPPLIER_DETAILS_FAIL,
   
    CLEAR_ERRORS

} from '../constants/supplierConstants'

export const newSupplierReducer = (state = { supplier: {} }, action) => {
    switch (action.type) {

        case NEW_SUPPLIER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_SUPPLIER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                supplier: action.payload.supplier
            }

        case NEW_SUPPLIER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_SUPPLIER_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

/*
export const supplierReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_SUPPLIER_REQUEST:
        case UPDATE_SUPPLIER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_SUPPLIER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        
        case UPDATE_SUPPLIER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        
        case DELETE_SUPPLIER_FAIL:
        case UPDATE_SUPPLIER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        
        case DELETE_SUPPLIER_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_SUPPLIER_RESET:
            return {
                ...state,
                isUpdated: false
            }

        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
*/
export const supplierReducer = (state = {}, action) => {
    switch (action.type) {

        
        case UPDATE_SUPPLIER_REQUEST:
        case DELETE_SUPPLIER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_SUPPLIER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_SUPPLIER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_SUPPLIER_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_SUPPLIER_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_SUPPLIER_FAIL:
        case DELETE_SUPPLIER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const allSuppliersReducer = (state = { suppliers: [] }, action) => {
    switch (action.type) {

        case ALL_SUPPLIERS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_SUPPLIERS_SUCCESS:
            return {
                ...state,
                loading: false,
                suppliers: action.payload
            }

        case ALL_SUPPLIERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const supplierDetailsReducer = (state = { supplier: {} }, action) => {
    switch (action.type) {

        case SUPPLIER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case SUPPLIER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                supplier: action.payload
            }

        case SUPPLIER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

