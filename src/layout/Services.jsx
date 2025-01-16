import React from 'react';

const Services = ({ title, description, imageUrl }) => {
  const formattedDescription = description.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  return (
    <div className=" p-4 flex flex-col items-center space-y-4 w-full max-w-[400px] h-[320px] mx-0">
      <img src={imageUrl} alt={title} className="text-blue-500 text-4xl mb-4 w-20 h-20" /> {/* Boyut daha da artırıldı */}
      <div className="text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{formattedDescription}</p>
      </div>
    </div>
  );
};

export default Services;
