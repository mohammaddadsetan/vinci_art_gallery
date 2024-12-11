import React, { useState, useEffect } from "react";
import img1 from '../..//img/products.jpeg'
import img2 from '../..//img/products1.jpg'
import img3 from '../..//img/products2.jpg'
import img4 from '../..//img/products3.jpg'

const SlideshowBackground = () => {
  const images = [
   img1,
   img2,
   img3,
   img4
  ]; // آدرس تصاویر شما

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => {
      clearInterval(interval); 
    };
  }, [images.length]);

  return (
    <div
      style={{
        height: "100vh", 
        width: "100%", 
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex", 
          transition: "transform 1s ease-in-out", 
          transform: `translateX(-${currentIndex * 100}vw)`,
          width: `${images.length * 100}%`,
        //   filter: "brightness(80%)"
        opacity:".50"
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              width: "100vw", 
              height: "100vh", 
              backgroundImage: `url(${image})`,
              backgroundSize: "cover", 
              backgroundPosition: "center", 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideshowBackground;