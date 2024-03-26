import axios from 'axios';
import * as actionType from '../constants/productConstant'
const url = ''



export const getProduts = ()=> async (dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:8000/produts`)
        
        dispatch({type:actionType.GET_PRODUCT_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_FAIL,payload:error.message})
    }
}

export const getProductDetail = (id)=> async (dispatch)=>{
    try {
        const response = await axios.get(`http://localhost:8000/product/${id}`)
        dispatch({type:actionType.GET_PRODUCT_DETAIL_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAIL_FAIL,payload:error.message})
    }
}