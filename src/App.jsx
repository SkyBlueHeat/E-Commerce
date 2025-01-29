import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage"; // ShopPage'i ekliyoruz
import Header from "./layout/Header"; // HomePage için Header
import ShopHeader from "./layout/Shop/ShopHeader"; // ShopPage için ShopHeader

function App() {
  return (
    <Router basename="/">
      <Routes>
        {/* HomePage için Header, ShopPage için ShopHeader */}
        <Route path="/" element={<><Header /><HomePage /></>} />
        <Route path="/shop" element={<><ShopHeader /><ShopPage /></>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
