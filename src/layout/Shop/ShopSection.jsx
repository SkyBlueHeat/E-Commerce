import { useEffect, useState } from "react";
import itemsData from "../../data/shopData/shopData.json";

const ShopSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  if (items.length === 0) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <section className="flex justify-center items-center bg-slate-100 py-10">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-7xl px-4 mb-4">
          <h2 className="absolute top-0 left-0 text-2xl font-bold text-black px-4 py-2 z-10">
            Shop
          </h2>
          <div className="flex justify-end items-center mb-4">
            <nav className="text-lg font-bold">
              <a href="/" className="text-black">Home</a>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-400">Shop</span>
            </nav>
          </div>
        </div>

        {/* Grid Layout - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-7xl px-4">
          {items.slice(0, 5).map((item, index) => (
            <a href="#"
              key={index}
              className="bg-cover bg-center h-64 relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl">
                {item.category}
                <div className="text-sm">{item.count} Items</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
