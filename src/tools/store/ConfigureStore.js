//? CREATESTORE-UN İCERSİNDEKI CALLBACK = REDUCER-DIR;

import { combineReducers, createStore } from "redux";
import { productReducer } from "../reducers/ProductReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      product: productReducer,
    })
  );

  return store;
};

export default configureStore;
