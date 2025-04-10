import React, { useEffect, useState } from "react";
import "../styles/ImageSlider.css";

const images = [
    "/image-gallery/image1.JPG",
    "/image-gallery/image2.JPG",
    "/image-gallery/image3.JPG",
    "/image-gallery/image4.JPG",
    "/image-gallery/image5.JPG",
  ];
  
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageSlider;