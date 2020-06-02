import { combineReducers } from 'redux';
import app from "./app.reducer";
import category from './category.reducer'
import product from './product.reducer'
import cart from "./cart.reducer";

const rootReducer = () => combineReducers({
  app,
  category,
  product,
  cart
});

export default rootReducer;