import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";
import configureStore from "./tools/store/ConfigureStore.js";
import { addProduct, getProduct } from "./tools/actions/ProductAction.js";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

//! TOOLS FOLDERI YARADANDAN SONRA
const store = configureStore();

store.dispatch(getProduct());

store.dispatch(
  addProduct({
    img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2Frange-rover-sport_625x300_1530181391799.jpg&w=1080&q=75",
    title: "RR",
    price: 250,
    desc: "Range Rover",
  })
);
store.dispatch(
  addProduct({
    img: "https://imgcdn.oto.com/medium/gallery/exterior/31/248/porsche-panamera-48871.jpg",
    title: "PR",
    price: 350,
    desc: "Porsche",
  })
);
store.dispatch(
  addProduct({
    img: "https://www.europeanprestige.co.uk/blobs/stock/394/images/d54b823d-3a0c-4377-9ecc-314bfc88ea55/hi4a9316.jpg?width=2000&height=1333",
    title: "MR",
    price: 200,
    desc: "Mercedes",
  })
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
