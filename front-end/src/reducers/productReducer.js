import { ADD_TO_CART, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';
import { get_price_range } from "../products.ts";

/**

  state:

cart: total number of items in cart
cartPrice: total price of items in cart
products: object containing all the products
products: [
  name: {
    name: name,
    price: price range of the product
    numbers: number of items in cart
  }
]

**/

const initialState = {
  cart: 0,
  cartPrice: [0, 0],
  products: {}
};

export default (state = initialState, action) => {
  let productSelected = "";
  let id = action.payload ? action.payload.replace(/\s/g, '') : "";
  switch (action.type) {
    case ADD_TO_CART:
      let price = get_price_range(action.payload);
      productSelected = state.products[action.payload] || {
        name: action.payload,
        price: [price[0], price[1]],
        numbers: 0,
      };
      console.log(action.payload);
      productSelected.numbers += 1;
      return {
        ...state,
        cart: state.cart + 1,
        cartPrice: [state.cartPrice[0] + price[0], state.cartPrice[1] + price[1]],
        products: {
          ...state.products,
          [id]: productSelected
        }
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state
      };

    case INCREASE_QUANTITY:
      productSelected = { ...state.products[id] };
      console.log("productSelected: ");
      console.log(state.products);
      console.log(id);
      console.log(state.products[id]);
      productSelected.numbers += 1;
      return {
        ...state,
        cart: state.cart + 1,
        cartPrice: [state.cartPrice[0] + productSelected.price[0], state.cartPrice[1] + productSelected.price[1]],
        products: {
          ...state.products,
          [id]: productSelected
        }
      };

    case DECREASE_QUANTITY:
      productSelected = { ...state.products[id] };
      let newCartPrice = 0;
      let newCartNumbers = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newCartPrice = state.cartPrice;
        newCartNumbers = state.cart;
      }
      else {
        productSelected.numbers -= 1;
        newCartPrice = [state.cartPrice[0] - state.products[id].price[0], state.cartPrice[1] - state.products[id].price[1]];
        newCartNumbers = state.cart - 1;
      }
      return {
        ...state,
        cart: newCartNumbers,
        cartPrice: newCartPrice,
        products: {
          ...state.products,
          [id]: productSelected
        }
      };

    case CLEAR_PRODUCT:
      productSelected = { ...state.products[id] };
      let _price = productSelected.price;
      let numbers = productSelected.numbers;
      delete state.products[id];
      return {
        ...state,
        cartPrice: [state.cartPrice[0] - _price[0] * numbers, state.cartPrice[1] - _price[1] * numbers],
        cart: state.cart - numbers,
        products: {
          ...state.products,
          [id]: productSelected
        }
      };

    default:
      return state;
  }
};
