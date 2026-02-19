import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import VendorProfile from "./pages/vendorprofile";
import ReviewerLogin from "./pages/authentication/ReviewerLogin";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Vendor Profile Page */}
        <Route
          path="/vendor/:phoneNumber"
          element={<VendorProfile />}
        />
        <Route path="/reviewer/login" element={<ReviewerLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
