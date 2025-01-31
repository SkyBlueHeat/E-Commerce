import { useState, useEffect } from "react";
import ShopHeader from "../layout/Shop/ShopHeader";
import ShopNavbar from "../layout/Shop/ShopNavbar";
import MobileMenu from "../layout/Shop/ShopMobileMenu";
import ShopSection from "../layout/Shop/ShopSection";
import ProductCard from "../components/Shop/ShopProductCard";
import itemsData from "../data/shopData/shopClothes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faEnvira, faHooli, faLyft, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";

function ShopPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (itemsData && itemsData.products) {
      setItems(itemsData.products);
      setLoading(false);
    } else {
      setError("Error loading data!");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
    <div className="flex flex-col">
      <ShopHeader />
      <ShopNavbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      {isMenuOpen && <MobileMenu />}
      <ShopSection />

      {/* Header with Results Count */}
      <header className="flex flex-col sm:flex-row sm:justify-around items-center mb-4 p-4">
  <div className="text-gray-600 text-center sm:text-left">Showing all 12 results</div>
  
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:w-auto w-full">
    <div className="flex items-center mb-4 sm:mb-0">
      <span className="mr-2 text-gray-600">Views:</span>
      <button className="focus:outline-none">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <button className="focus:outline-none">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
        </svg>
      </button>
    </div>

    <div className="flex items-center mb-4 sm:mb-0 w-full sm:w-auto">
      <select className="border border-gray-300 rounded p-1 text-sm w-full sm:w-auto">
        <option>Popularity</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto">Filter</button>
    </div>
  </div>
</header>



      <div className="flex flex-wrap justify-center gap-4 px-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
           
            <ProductCard product={item} />
          </div>
        ))}
      </div>

     
      <footer className="mt-4 flex justify-center space-x-1 pb-6">
  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">First</button>
  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">1</button>
  <button className="bg-blue-500 text-white px-4 py-2 rounded">2</button>
  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">3</button>
  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Next</button>
</footer>
    </div>

   
    <section className="py-12 bg-slate-100">
    <div className="container mx-auto px-6">
      <Slider {...settings}>
        {[faHooli, faLyft, faEnvira, faStripe, faAws, faRedditAlien].map(
          (icon, index) => (
            <a
              key={index}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <FontAwesomeIcon
                className="h-20 md:h-24 text-slate-500 m-4"
                icon={icon}
                style={{
                  filter: 'grayscale(100%)',
                  maxWidth: '120px',
                  maxHeight: '120px',
                  objectFit: 'contain',
                }}
              />
            </a>
          )
        )}
      </Slider>
    </div>
  </section>
  </>
  );
}

export default ShopPage;