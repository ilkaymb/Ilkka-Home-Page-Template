// components/Card.js
import Image from "next/image";
import React from "react";

const Card = ({ title, content, image }) => {
  return (
    <div
      className="  lg:w-card-width-lg md:w-card-width-md sm:w-card-width-sm pt-10"
      style={{ backgroundColor: "#060606", zIndex: 1, borderRadius: 25 }}
    >
      {image && (
        <div className="  w-full  relative ">
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            style={{ width: "100%", height: "250px" }}
          />
        </div>
      )}
      <div className="px-4 py-8 flex justify-items-center flex-col items-center ">
        <h2 class="text-3xl font-semibold text-white mb-3 whitespace-normal">
          {title}
        </h2>
        <p class="text-gray-600  mb-4 whitespace-normal leading-relaxed">
          {content}
        </p>
        <button className="bg-red-700  hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
