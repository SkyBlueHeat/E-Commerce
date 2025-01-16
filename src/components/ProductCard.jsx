export default function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">${price}</p>
    </div>
  );
}