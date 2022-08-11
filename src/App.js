import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Delivery from "./pages/deliveryPage";
import Order from "./pages/orderPage";
import Payment from "./pages/paymentPage";
import Product from "./pages/productPage";
import Store from "./pages/storePage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/store" element={<Store />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </Router>
    </div>
  );
}
