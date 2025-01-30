import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import configureStore from "./tools/store/ConfigureStore.js";
import { getProduct } from "./tools/actions/ProductAction.js";

//! TOOLS FOLDERI YARADANDAN SONRA
const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());

// ! TOOLS FOLDERI YARATMADAN ONCE
// const initialState = {
//   count: 0,
// };

// const store = createStore((state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + action.payload };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// });

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({
//   type: "INCREMENT",
//   payload: 10,
// });

// store.dispatch({
//   type: "RESET",
// });

// store.dispatch({
//   type: "DECREMENT",
// });

// console.log(store);

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
