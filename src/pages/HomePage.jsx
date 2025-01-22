import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import productsData from '../data/products.json';
import servicesData from '../data/services.json';
import PropTypes from 'prop-types';
import Card from "../components/Card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHooli,
  faLyft,
  faEnvira,
  faStripe,
  faAws,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';

import slidesData from '../data/slides.json'; // slides.json dosyasının doğru konumda olduğundan emin olun
import Featured from '../layout/Featured';
import Services from '../layout/Services';
import Layout from '../layout/Featuredposts';

const ProductCard = ({ title, department, originalPrice, discountedPrice, imageUrl }) => (
  <div className="border p-4 flex flex-col items-center">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-[300px] object-cover mb-4 transform hover:scale-105 transition-all duration-300"
    />
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-600">{department}</p>
    <div className="flex items-center mt-2">
      <p className="text-slate-600 mr-2">${parseFloat(originalPrice).toFixed(2)}</p>
      <p className="text-green-800 font-bold">${parseFloat(discountedPrice).toFixed(2)}</p>
    </div>
  </div>
);

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};


export default function HomePage() {
  const [features, setFeatures] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("src/data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  
  useEffect(() => {
    setFeatures(servicesData); // servicesData JSON verisini state'e atıyoruz
  }, []);



  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
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
      {/* Hero Bölümü */}
      <div className="flex justify-center items-center py-8">
        {/* Swiper Slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 2500 }}
          speed={1000}
          modules={[Navigation, Autoplay]}
          className="mySwiper w-full px-4 md:px-8 lg:px-16"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-r from-cyan-300 to-teal-100 flex flex-col md:flex-row items-center w-full bg-white rounded-3xl shadow-md p-8 relative max-w-[1500px] mx-auto h-auto max-h-[600px]">
                {/* Sol Taraf */}
                <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                  <p className="text-sm uppercase text-blue-500 tracking-wide mb-2">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-7xl font-medium text-gray-800 mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-center md:text-left">
                    {slide.description}
                  </p>
                  <a
                    href="#"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                  >
                    Shop Now
                  </a>
                </div>

                {/* Sağ Taraf */}
                <div className="md:w-1/2 flex justify-center items-center">
                  <img
                    src={slide.imgSrc}
                    alt={slide.title}
                    className="z-10 rounded-lg object-contain h-full max-h-[600px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Sponsor Bölümü */}
      <section className="py-12 bg-white">
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

      {/* Featured Products */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sol taraf: Büyük resim */}
          <motion.div
            className="relative lg:col-span-2 h-auto max-h-[635px] aspect-w-16 aspect-h-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/product-of/product-card-img-1.jpg"
              alt="Product 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 bg-sky-500 bg-opacity-50 text-white p-8 rounded-bl-lg">
              <motion.h3
                className="text-xl font-normal"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Top Product Of the Week
              </motion.h3>
              <motion.a
                href="#"
                className="mt-2 inline-block bg-transparent border-2 text-white font-normal py-2 px-6 rounded-md"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                Explore Items
              </motion.a>
            </div>
          </motion.div>

          {/* Sağ taraf: İki küçük resim */}
          <div className="flex flex-col gap-6">
            {/* Üstteki küçük resim */}
            <motion.div
              className="relative h-[365px] aspect-w-16 aspect-h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <img
                src="/product-of/product-card-img-2.jpg"
                alt="Product 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-sky-500 bg-opacity-50 text-white p-8 rounded-bl-lg">
                <motion.h3
                  className="text-lg font-normal"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Top Product Of the Week
                </motion.h3>
                <motion.a
                  href="#"
                  className="mt-2 inline-block bg-transparent border-2 text-white font-normal py-1.5 px-5 rounded-md"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore Items
                </motion.a>
              </div>
            </motion.div>

            {/* Alttaki küçük resim */}
            <motion.div
              className="relative h-[250px] aspect-w-16 aspect-h-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <img
                src="/product-of/product-card-img-3.jpg"
                alt="Product 3"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 bg-sky-500 bg-opacity-50 text-white p-8 rounded-bl-lg">
                <motion.h3
                  className="text-lg font-normal"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  Top Product Of the Week
                </motion.h3>
                <motion.a
                  href="#"
                  className="mt-2 inline-block bg-transparent border-2 text-white font-normal py-1.5 px-5 rounded-md"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Explore Items
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="px-12 lg:px-24 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
          <h2 className="text-xl text-gray-500 mb-6">Bestseller Products</h2>
          <p className="text-gray-700 mb-8">Discover our top-selling products of the week!</p>
        </div>

        {/* Ürün Kartları Grid */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {productsData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* "Load More Products" Butonu */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-4 bg-transparent text-sky-400 border-sky-400 font-bold border-2 rounded-md transition-all">
            Load More Products
          </button>
        </div>
      </div>

      <Featured />

      {/* Hero Bölümü */}
      <div className="p-8 text-center">
  <h1 className="text-3xl font-bold mb-2">Featured Products</h1>
  <h2 className="text-xl text-gray-500 mb-4">THE BEST SERVICES</h2>
  <p className="text-gray-700 mb-8">Problems trying to resolve the conflict between</p>
</div>

{/* Services Kartları */}
<div className="flex justify-center items-center gap-4 flex-wrap px-6">
  {features.map((feature, index) => (
    <Services key={index} {...feature} />
  ))}
</div>
{/* Post */}
<Layout>
  <div className="container mx-auto px-10 py-8">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-8">
      {posts.map((post, index) => (
        <Card key={index} {...post} />
      ))}
    </div>
  </div>
</Layout >


    </>
  );
}
