import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal"; 
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";


const images = [
  img1,
  img2,
  img3,
];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">

      <div className="overflow-hidden rounded-lg shadow-lg">

        <Fade key={currentIndex}>
          <img
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            className="w-full h-auto object-cover" 
          />
        </Fade>
      </div>


      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <button
          onClick={handlePrev} 
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &larr;
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <button
          onClick={handleNext} 
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &rarr;
        </button>
      </div>


      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index} 
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            } focus:outline-none`} 
            onClick={() => setCurrentIndex(index)} 
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
