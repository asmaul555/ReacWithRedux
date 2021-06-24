import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import Axios from 'axios'

import allProducts from './redux/action/allproduct';
const ProductListin = () => {
    const dispatch=useDispatch()
    const fetchProduct=async ()=>{
            const response= await Axios.get('https://fakestoreapi.com/products').catch(err=>console.log(err))
            dispatch(allProducts(response))
    } 

    useEffect(() => {
        fetchProduct()
    },);
     
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
}

export default ProductListin;
