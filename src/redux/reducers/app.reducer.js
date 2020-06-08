import { GET_LANGUAGE, TOGGLE_CONTACT, TOGGLE_CONTACT_CLOSE } from "../actions/types";


const initialState = {
    lang: "",
    modalContact: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LANGUAGE:
        return {
          ...state, 
          lang: action.payload
        }
    case TOGGLE_CONTACT: {
        return {
          ...state,
          modalContact: true
        }
    }
    case TOGGLE_CONTACT_CLOSE: {
      return {
        ...state,
        modalContact: false
      }
  }
    default:
      return state;
  }
}
