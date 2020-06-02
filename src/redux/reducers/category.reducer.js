import { CHANGE_CATEGORY } from "../actions/types";
import categoriesData from "../../category.json";


const initialState = {
    category: {
      "id": "1",
      "category": "Populaires",
      "namefr": "Populaires",
      "nameen": "Populars",
      "icon": "popular.png",
      "active": true
  },
    categories: categoriesData
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
        return {
          ...state, 
          category: action.payload
        }
    default:
      return state;
  }
}
