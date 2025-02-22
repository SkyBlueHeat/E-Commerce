import { useState, useEffect } from "react";
import ShopSection from "../layout/Shop/ShopSection";
import ProductCard from "../components/Shop/ShopProductCard";
import itemsData from "../data/shopData/shopClothes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faEnvira, faHooli, faLyft, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

function ShopPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = [
    { value: "all", label: "Tüm Ürünler" },
    { value: "tshirt", label: "T-Shirt" },
    { value: "shoes", label: "Ayakkabı" },
    { value: "pants", label: "Pantolon" },
    { value: "jacket", label: "Ceket" },
    { value: "accessories", label: "Aksesuarlar" },
    { value: "dress", label: "Elbise" },
    { value: "bag", label: "Çanta" },
  ];

  useEffect(() => {
    if (itemsData && itemsData.products) {
      const productsWithUpdatedImages = itemsData.products.map(product => ({
        ...product,
        image: product.image.startsWith('/') ? product.image.slice(1) : product.image
      }));
      setItems(productsWithUpdatedImages);
      setFilteredItems(productsWithUpdatedImages);
      setLoading(false);
    } else {
      setError("Error loading data!");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let filtered = items;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => 
        item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, items]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    buttons.push(
      <button
        key="first"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        First
      </button>
    );

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="last"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Last
      </button>
    );

    return buttons;
  };

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
        <ShopSection />

        {/* Search and Filter Section */}
        <div className="bg-white shadow-sm py-6 mb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>

              {/* Category Filter */}
              <div className="w-full md:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="container mx-auto px-4 mb-4">
          <div className="text-gray-600">
            {filteredItems.length} ürün bulundu
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        {/* Show message when no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Aradığınız kriterlere uygun ürün bulunamadı.
          </div>
        )}

        {/* Pagination */}
        {filteredItems.length > 0 && (
          <div className="mt-8 mb-8 flex justify-center space-x-2">
            {renderPaginationButtons()}
          </div>
        )}
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