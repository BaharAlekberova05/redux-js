import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/dashboard/AddProduct";
import EditProduct from "./pages/dashboard/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add" element={<AddProduct />} />
        <Route path="/dashboard/edit/:slug" element={<EditProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
