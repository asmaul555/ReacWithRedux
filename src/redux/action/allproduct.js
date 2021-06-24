import *as Types from '../action/types'



const allProducts=product=>{
    
    return{
        type:Types.PRODUCT,
        payload: product
        
    }
}
export default allProducts;