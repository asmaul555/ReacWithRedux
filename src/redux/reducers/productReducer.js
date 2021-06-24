import *as Types from '../action/types'
export const initial={
    products:[]
}

const productReducter=(state=initial,{type,payload})=>{
    
    switch(type){
        case Types.PRODUCT:{
            return {
                ...state,
                products:payload
            }
        }
        default:return state
    }
}
export default productReducter;