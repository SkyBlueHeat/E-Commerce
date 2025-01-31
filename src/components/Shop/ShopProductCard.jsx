/* eslint-disable react/prop-types */

function ProductCard({ product }) {
    if (!product) {
      return <div>Product not found</div>;
    }
  
    // Fiyatı iki parçaya ayıralım
    const priceParts = product.price.split("  "); // Fiyatı ayırıyoruz
    const currentPrice = priceParts[0]; // İlk kısmı (örneğin "$15.48")
    const oldPrice = priceParts[1]; // İkinci kısmı (örneğin "$48")
  
    return (
      <div className="overflow-hidden w-full"> {/* Kartın genişliğini tam genişlik yapıyoruz */}
        <div className="w-full h-96 relative"> {/* Resim için bir container oluşturuyoruz */}
          <img 
            src={product.image} 
            alt={product.title} 
            className="absolute inset-0 w-full h-full object-contain" 
          /> {/* Resmi container'a sığdırıyoruz, kesilmesin diye object-contain kullanıyoruz */}
        </div>
        <div className="p-4 flex flex-col items-center justify-center"> {/* İçeriği ortalayacak şekilde düzenliyoruz */}
          <h3 className="text-base font-bold text-center">{product.title}</h3> {/* Başlık ortalanmış */}
          
          <p className="text-sm text-gray-700 text-center">
            <span className="font-bold text-slate-400">{currentPrice}</span> {/* İlk kısmı siyah */}
            <span className="font-bold text-green-500 ml-2">{oldPrice}</span> {/* İkinci kısmı kırmızı */}
          </p>
  
          <div className="flex space-x-2 mt-2 justify-center"> {/* Butonları ortalıyoruz */}
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            <span className="w-4 h-4 bg-red-500 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-300 rounded-full"></span>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  