import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider1 from "@/images/slider1.png";
import Slider2 from "@/images/slider2.png";
import Slider3 from "@/images/slider3.png";

const images = [Slider1, Slider2, Slider3];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className=" w-full py-10 mt-10" style={{ backgroundColor: "#060606" }}>
      <div className="container  mx-auto px-5">
        <h1
          style={{
            color: "white",
            fontSize: 44,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Projeler
        </h1>
        <div className="relative w-full mx-auto overflow-hidden rounded-lg shadow-lg ">
          <div
            className="whitespace-nowrap transition-transform duration-700 ease-in-out mx-auto "
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="inline-block w-full  relative mx-auto h-full"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <Image
                    className=" lg:h-slide-width md:h-full lg:w-slide-width md:w-full"
                    src={image}
                    alt={`Slide ${index}`}
                    objectFit="cover"
                  />
                  <div
                    className=" lg:w-slide-width lg:h-slide-width md:h-full"
                    style={{
                      backgroundColor: "white",
                      padding: 20,
                    }}
                  >
                    <h2 class="text-3xl font-semibold text-gray-800 mb-3 whitespace-normal">
                      Başlık
                    </h2>

                    <p class="text-gray-600  mb-4 whitespace-normal leading-relaxed text-limit8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem. Veritatis obcaecati tenetur iure
                      eius earum ut molestias architecto voluptate aliquam
                      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt
                      quaerat, odit, tenetur error, harum nesciunt ipsum debitis
                      quas aliquid. Reprehenderit, quia. Quo neque error
                      repudiandae fuga? Ipsa laudantium molestias eos sapiente
                      officiis modi at sunt excepturi expedita sint? Sed
                      quibusdam recusandae alias error harum maxime adipisci
                      amet laborum. Perspiciatis minima nesciunt dolorem!
                      Officiis iure rerum voluptates a cumque velit quibusdam
                      sed amet tempora. Sit laborum ab, eius fugit doloribus
                      tenetur fugiat, temporibus enim commodi iusto libero magni
                      deleniti quod quam consequuntur! Commodi minima excepturi
                      repudiandae velit hic maxime doloremque. Quaerat provident
                      commodi consectetur veniam similique ad earum omnis ipsum
                      saepe, voluptas, hic voluptates pariatur est explicabo
                      fugiat, dolorum eligendi quam cupiditate excepturi
                      mollitia maiores labore suscipit quas? Nulla, placeat.
                      Voluptatem quaerat non architecto ab laudantium modi
                      minima sunt esse temporibus sint culpa, recusandae aliquam
                      numquam totam ratione voluptas quod exercitationem fuga.
                      Possimus quis earum veniam quasi aliquam eligendi, placeat
                      qui corporis!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 bg-red-900 text-white"
            style={{
              width: 50,
              padding: 10,
              borderRadius: 12,
              boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.25)",
            }}
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 bg-red-900 text-white"
            style={{
              width: 50,
              padding: 10,
              borderRadius: 12,
              boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.25)",
            }}
          >
            &#10095;
          </button>
          <div className="absolute bottom-0 w-full text-center pb-4">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => goToSlide(index)}
                className={`inline-block cursor-pointer bg-red-900 h-2 w-2 mx-1 rounded-full ${
                  currentIndex === index ? "opacity-100" : "opacity-50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
