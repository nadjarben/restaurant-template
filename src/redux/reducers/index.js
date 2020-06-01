import { combineReducers } from 'redux';
import category from './category.reducer'
import product from './product.reducer'

const rootReducer = () => combineReducers({
  category,
  product
});

export default rootReducer;