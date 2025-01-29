import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";  // ShopPage'i ekliyoruz


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} /> {/* ShopPage için route ekliyoruz */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
