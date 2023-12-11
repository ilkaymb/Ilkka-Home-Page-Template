import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { SlideAreaInterface } from "@/interface/SlideInterface";

const Slider: React.FC<SlideAreaInterface> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const goToSlide = useCallback(
    (index:any) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();  // Varsayılan davranışı engelle
      const moveX = e.clientX - startX;
      if (moveX > 100 && currentIndex > 0) {
        goToPrevious();
        setIsDragging(false);
      } else if (moveX < -100 && currentIndex < slides.length - 1) {
        goToNext();
        setIsDragging(false);
      }
    },
    [isDragging, startX, currentIndex, slides.length, goToNext, goToPrevious]
  );

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("mousemove", handleMouseMove);
      slider.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("mousemove", handleMouseMove);
        slider.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [handleMouseMove]);

  return (
    <div className="w-full py-10 mt-10 bg-red-800">
      <div className="container mx-auto px-5">
        <h1
          className="mb-5"
          style={{
            color: "white",
            fontSize: 44,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Projelerimiz
        </h1>
        <div
          className=" relative w-full mx-auto overflow-hidden rounded-lg slider no-select no-selectable"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
        >
                   <div
            className="whitespace-nowrap transition-transform duration-700 ease-in-out mx-auto  rounded-2xl"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="inline-block w-full relative mx-auto h-full py-100 "
              >
                <div className="shadow lg:h-slide-height  sm:h-full 	lg:rounded-2xl no-selectable" draggable="false"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexWrap: "wrap",backgroundColor:"#161616",width:"100%"
                  }}
                >
                  <Image draggable="false"
                    className="sm:w-full lg:w-3/6	lg:rounded-l-2xl no-selectable object-cover" style={{height:"100%",objectFit:"cover"}}
                    src={slide.image}
                    alt={`Slide ${index}`}
                     objectFit="cover"
                  />
                  <div
                     className="sm:w-full md:w-3/6		lg:rounded-r-2xl"
                    style={{
                
                      padding: 50,height:"100%"
                    }}
                  >
                    <h2 className="text-4xl font-semibold text-white mb-3 whitespace-normal text-center text-limit2">
                      {slide.title}
                    </h2>
                    <p className="text-gray-400 text-2xl mb-4 whitespace-normal leading-relaxed text-limit4">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black p-2 text-white  hover:bg-red-700 transition duration-300"
            style={{
              width: 50,
              padding: 10,
              height: 75,
              borderRadius: " 0 12px 12px 0 ",
              boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.25)",
            }}
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black  hover:bg-red-700 text-white transition duration-300"
            style={{
              width: 50,
              padding: 10,              height: 75,

              borderRadius: "12px 0 0 12px",
              boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.25)",
            }}
          >
            &#10095;
          </button>
          <div className="absolute bottom-0 w-full text-center pb-4">
            {slides.map((slide, index) => (
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
