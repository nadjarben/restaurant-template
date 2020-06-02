import { GET_LANGUAGE } from "../actions/types";


const initialState = {
    lang: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LANGUAGE:
        return {
          ...state, 
          lang: action.payload
        }
    default:
      return state;
  }
}
