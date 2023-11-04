import Image from "next/image";
import React, { useState, useEffect , useCallback} from "react";
import SlideInterface from "@/interface/SlideInterface";



const Slider: React.FC<SlideInterface> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useCallback ile goToNext fonksiyonunu memoize edin
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  // Etki için bağımlılık dizisine goToNext'i ekleyin
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  // goToSlide ve goToPrevious fonksiyonlarına useCallback kullanmanız gerekebilir.
  // Bu, onların da her render'da yeniden oluşturulmamasını sağlar.
  // Aşağıdaki gibi güncelleyebilirsiniz:

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  return (
    <div className="w-full py-10 mt-10 bg-[#161616]">
      <div className="container mx-auto px-5">
      <h1
          style={{
            color: "white",
            fontSize: 44,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Projelerimiz
        </h1>
        <div className="relative w-full mx-auto overflow-hidden rounded-lg">
          <div
            className="whitespace-nowrap transition-transform duration-700 ease-in-out mx-auto"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="inline-block w-full relative mx-auto h-full py-100"
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
                    className="lg:h-slide-width md:h-full lg:w-slide-width md:w-full"
                    src={slide.image}
                    alt={`Slide ${index}`}
                     objectFit="cover"
                  />
                  <div
                    className="lg:w-slide-width lg:h-slide-width md:h-full"
                    style={{
                      backgroundColor: "white",
                      padding: 20,
                    }}
                  >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-3 whitespace-normal text-center text-limit2">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 mb-4 whitespace-normal leading-relaxed text-limit8">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-800 p-2 text-white  hover:bg-red-700"
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
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-red-800  hover:bg-red-700 text-white"
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
