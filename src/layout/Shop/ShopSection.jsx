// import React from 'react';

const ShopSection = () => (
  <section className="container mx-auto py-8">
    <h2 className="text-2xl font-bold mb-4">Shop</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-cover bg-center h-64 relative" style={{ backgroundImage: `url('path_to_image_${index + 1}.jpg')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
            CLOTHS
            <div className="text-sm">5 Items</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ShopSection;