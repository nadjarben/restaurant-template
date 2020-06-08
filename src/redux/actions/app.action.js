import { GET_LANGUAGE, TOGGLE_CONTACT, TOGGLE_CONTACT_CLOSE } from "./types";


export const getLanguage = (lang) => (dispatch) => {
  dispatch({
    type: GET_LANGUAGE,
    payload: lang
  });
};

export const toggleContact = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CONTACT
  });
};

export const toggleContactClose = () => (dispatch) => {
  dispatch({
    type: TOGGLE_CONTACT_CLOSE
  });
};

export const timeoutToggleContact = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: TOGGLE_CONTACT
    });
  }, 12000);
};

