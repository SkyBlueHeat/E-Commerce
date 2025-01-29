import { useState } from 'react';
import ShopHeader from '../layout/Shop/ShopHeader';
import ShopNavbar from '../layout/Shop/ShopNavbar';
import MobileMenu from '../layout/Shop/ShopMobileMenu';
import ShopSection from '../layout/Shop/ShopSection';


function ShopPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ShopHeader />
      <ShopNavbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <MobileMenu />}
      <ShopSection />
    </>
  );
}

export default ShopPage;