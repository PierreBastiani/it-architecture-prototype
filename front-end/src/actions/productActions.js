import { ADD_TO_CART , GET_NUMBERS_BASKET } from './types';

export const addToCart = (product)=> {
    return(dispatch)=> {
        // console.log("Adding basket of item");
        dispatch({
            type: ADD_TO_CART,
            payload: product.name,
            data: product
        });
    }
}

export const getCartNumbers = ()=> {
    return(dispatch)=> {
        // console.log("getting total cart in basket")
        dispatch({
            type: GET_NUMBERS_BASKET,
            // payload: item
        });
    }
}
