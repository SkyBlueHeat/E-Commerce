const Featured = () => (
    <div className="p-8 flex justify-evenly grid-cols-1 md:grid-cols-3 gap-8">
      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="relative w-full md:w-1/2">
          <img
            src="\featured-img\featured-img-1.png"
            alt="Person 1"
            className="h-full w-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full md:w-1/2">
          <img
            src="\featured-img\featured-img-2.png"
            alt="Person 2"
            className="h-full w-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="col-span-1 flex flex-col justify-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-medium text-sky-400 mb-2">Featured Products</h1>
        <p className="text-gray-700 mb-4 font-bold text-xl md:text-4xl">We love what we do</p>
        <p className="text-gray-600 text-sm md:text-base">
          Problems trying to resolve the conflict between the two major realms<br />
          of Classical physics: Newtonian mechanics.<br /><br />
          Problems trying to resolve<br /> the conflict between the two major<br /> realms of Classical physics: Newtonian mechanics.
        </p>
      </div>
    </div>
  );
  
  export default Featured;
  