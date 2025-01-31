import { FaPhone, FaEnvelope, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ShopHeader = () => (
  <div className="bg-emerald-700 text-white p-4">
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <div className="flex items-center mb-2 sm:mb-0">
          <FaPhone className="mr-2" /> (225) 555-0118
        </div>
        <div className="flex items-center">
          <FaEnvelope className="ml-4 mr-2" /> michelle.rivera@example.com
        </div>
      </div>

      <div className="text-center mb-2 sm:mb-0">
        Follow Us and get a chance to win 80% off!
      </div>

      <div className="flex justify-center sm:justify-end space-x-2">
        <div>Follow Us :</div>
        <div className="flex items-center space-x-2">
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>
    </div>
  </div>
);

export default ShopHeader;
