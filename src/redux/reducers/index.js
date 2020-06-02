import { combineReducers } from 'redux';
import category from './category.reducer'
import product from './product.reducer'
import cart from "./cart.reducer";

const rootReducer = () => combineReducers({
  category,
  product,
  cart
});

export default rootReducer;