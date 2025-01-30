//? CREATESTORE-UN İCERSİNDEKI CALLBACK = REDUCER-DIR;

import { createStore } from "redux";
import { productReducer } from "../reducers/ProductReducer";



const configureStore = () => {
  const store = createStore(productReducer);

  return store;
};

export default configureStore;
