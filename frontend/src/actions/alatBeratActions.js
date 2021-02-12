import axios from 'axios'
import {
    
    NEW_ALAT_BERAT_REQUEST,
    NEW_ALAT_BERAT_SUCCESS,
    NEW_ALAT_BERAT_FAIL,
    ALL_ALAT_BERATS_REQUEST,
    ALL_ALAT_BERATS_SUCCESS,
    ALL_ALAT_BERATS_FAIL,
    ALAT_BERAT_DETAILS_REQUEST,
    ALAT_BERAT_DETAILS_SUCCESS,
    ALAT_BERAT_DETAILS_FAIL,
    UPDATE_ALAT_BERAT_REQUEST,
    UPDATE_ALAT_BERAT_SUCCESS,
    UPDATE_ALAT_BERAT_FAIL,
    DELETE_ALAT_BERAT_REQUEST,
    DELETE_ALAT_BERAT_SUCCESS,
    DELETE_ALAT_BERAT_FAIL,
   
    CLEAR_ERRORS
} from '../constants/alatBeratConstants'


// New alatBerat
export const newAlatBerat = (alatBeratData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_ALAT_BERAT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/api/v1/admin/alatBerat/new', alatBeratData, config)

        dispatch({
            type: NEW_ALAT_BERAT_SUCCESS,
            //payload: data.alatBerat <= ubah ini jika error
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_ALAT_BERAT_FAIL,
            payload: error.response.data.message
        })
    }
}


// Get all alatBerats
export const allAlatBerats = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_ALAT_BERATS_REQUEST })

        const { data } = await axios.get('/api/v1/admin/alatBerats')

        dispatch({
            type: ALL_ALAT_BERATS_SUCCESS,
            payload: data.alatBerats
        })

    } catch (error) {
        dispatch({
            type: ALL_ALAT_BERATS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Get alatBerat details - ADMIN
export const getAlatBeratDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: ALAT_BERAT_DETAILS_REQUEST })


        const { data } = await axios.get(`/api/v1/admin/alatBerat/${id}`)

        dispatch({
            type: ALAT_BERAT_DETAILS_SUCCESS,
            payload: data.alatBerat
        })

    } catch (error) {
        dispatch({
            type: ALAT_BERAT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update alatBerat - ADMIN
export const updateAlatBerat = (id, alatBeratData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_ALAT_BERAT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/alatBerat/${id}`, alatBeratData, config)

        dispatch({
            type: UPDATE_ALAT_BERAT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_ALAT_BERAT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete alatBerat - ADMIN
export const deleteAlatBerat = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_ALAT_BERAT_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/alatBerat/${id}`)

        dispatch({
            type: DELETE_ALAT_BERAT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_ALAT_BERAT_FAIL,
            payload: error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}