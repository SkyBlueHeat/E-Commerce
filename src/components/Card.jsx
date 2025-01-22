import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Card = ({ image, department, title, description, sales, price, discount, colors, lessons, hours, rating }) => {
  return (
    <div className="overflow-hidden transform transition-transform hover:scale-105 flex flex-col sm:flex-row max-w-2xl mx-auto my-4">
      
      {/* Sol tarafı tamamen kaplayan resim */}
      <div className="w-full sm:w-64 relative flex-shrink-0">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-lg">Sale</span>

        {/* Resmin alt kısmında ikonlar */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between px-4">
          <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition">
            <FontAwesomeIcon icon={faHeart} className="text-white" />
          </button>
          <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
          </button>
          <button className="bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition">
            <FontAwesomeIcon icon={faEye} className="text-white" />
          </button>
        </div>
      </div>

      {/* Sağ taraf içerik kısmı */}
      <div className="p-4 sm:p-10 flex-grow w-full sm:w-1/2 h-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="text-blue-500 text-sm font-semibold">{department}</span>
          <span className="bg-slate-700 text-gray-100 px-2 py-1 rounded-full text-xs font-semibold">⭐ {rating}</span>
        </div>
        <h3 className="text-2xl font-semibold mt-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-base mt-2">{description}</p>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <span className="mr-4">💾 {sales} Sales</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="line-through text-gray-400 mr-2">${price}</span>
          <span className="text-green-600 font-bold">${discount}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          {colors.map((color, index) => (
            <span key={index} className={`w-4 h-4 rounded-full border`} style={{ backgroundColor: color }}></span> 
          ))}
        </div>
        <div className="flex items-center text-xs text-gray-500 mt-2">
          <span>⏱️ {hours}h</span>
          <span className="ml-4">📚 {lessons} Lessons</span>
        </div>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Learn More</button>
      </div>
    </div>
  );
};

// PropTypes ile doğrulama
Card.propTypes = {
  image: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sales: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  lessons: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
