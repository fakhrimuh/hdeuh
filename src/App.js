import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Admin from "./pages/admin";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Delivery from "./pages/deliveryPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </Router>
    </div>
  );
}
