import datas from "../../data.json";

const initialState = {
    products: datas
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
