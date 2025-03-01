import React from 'react';

const CategoryCard = ({ title, image }) => {
  return (
    <div className="relative w-72 h-80 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-lg group transition-all duration-300 transform hover:scale-105">
      {/* Flex container for image and title */}
      <div className="flex flex-col justify-between h-full">
        <img
          src={image}
          alt={title}
          className="w-full h-2/3 object-cover group-hover:scale-110 transition-all duration-300"
        />
        <div className="flex items-center justify-center bg-black bg-opacity-50 py-2">
          <h2 className="text-white text-xl font-semibold">{title}</h2>
        </div>
        {/* "VIEW MORE" button */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-center py-3">
          <a href="#" className="text-white text-sm font-semibold hover:text-blue-500">[ VIEW MORE ]</a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
