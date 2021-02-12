import {

    ALL_ALAT_BERATS_REQUEST, 
    ALL_ALAT_BERATS_SUCCESS,
    ALL_ALAT_BERATS_FAIL,
    NEW_ALAT_BERAT_REQUEST,
    NEW_ALAT_BERAT_SUCCESS,
    NEW_ALAT_BERAT_RESET,
    NEW_ALAT_BERAT_FAIL,
    DELETE_ALAT_BERAT_REQUEST,
    DELETE_ALAT_BERAT_SUCCESS,
    DELETE_ALAT_BERAT_RESET,
    DELETE_ALAT_BERAT_FAIL,
    UPDATE_ALAT_BERAT_REQUEST,
    UPDATE_ALAT_BERAT_SUCCESS,
    UPDATE_ALAT_BERAT_RESET,
    UPDATE_ALAT_BERAT_FAIL,
    ALAT_BERAT_DETAILS_REQUEST,
    ALAT_BERAT_DETAILS_SUCCESS,
    ALAT_BERAT_DETAILS_FAIL,
    //SEE_ALAT_BERAT_REQUEST,
    //SEE_ALAT_BERAT_SUCCESS,
    //SEE_ALAT_BERAT_FAIL,
   
    CLEAR_ERRORS

} from '../constants/alatBeratConstants'

export const newAlatBeratReducer = (state = { alatBerat: {} }, action) => {
    switch (action.type) {

        case NEW_ALAT_BERAT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_ALAT_BERAT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                alatBerat: action.payload.alatBerat
            }

        case NEW_ALAT_BERAT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_ALAT_BERAT_RESET:
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
export const alatBeratReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_ALAT_BERAT_REQUEST:
        case UPDATE_ALAT_BERAT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_ALAT_BERAT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        
        case UPDATE_ALAT_BERAT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        
        case DELETE_ALAT_BERAT_FAIL:
        case UPDATE_ALAT_BERAT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        
        case DELETE_ALAT_BERAT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_ALAT_BERAT_RESET:
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
export const alatBeratReducer = (state = {}, action) => {
    switch (action.type) {

        
        case UPDATE_ALAT_BERAT_REQUEST:
        case DELETE_ALAT_BERAT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ALAT_BERAT_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_ALAT_BERAT_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_ALAT_BERAT_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_ALAT_BERAT_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case UPDATE_ALAT_BERAT_FAIL:
        case DELETE_ALAT_BERAT_FAIL:
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


export const allAlatBeratsReducer = (state = { alatBerats: [] }, action) => {
    switch (action.type) {

        case ALL_ALAT_BERATS_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_ALAT_BERATS_SUCCESS:
            return {
                ...state,
                loading: false,
                alatBerats: action.payload
            }

        case ALL_ALAT_BERATS_FAIL:
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

export const alatBeratDetailsReducer = (state = { alatBerat: {} }, action) => {
    switch (action.type) {
        
        //case SEE_ALAT_BERAT_REQUEST:
        case ALAT_BERAT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        
        //case SEE_ALAT_BERAT_SUCCESS:
        case ALAT_BERAT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                alatBerat: action.payload
            }

        //case SEE_ALAT_BERAT_FAIL:
        case ALAT_BERAT_DETAILS_FAIL:
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

