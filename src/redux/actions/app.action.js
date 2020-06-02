import { GET_LANGUAGE } from "./types";


export const getLanguage = (lang) => (dispatch) => {
  dispatch({
    type: GET_LANGUAGE,
    payload: lang
  });
};

