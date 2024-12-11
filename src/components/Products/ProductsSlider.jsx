import React, { useState, useEffect } from "react";


const SlideshowBackground = ({img1,img2,img3,img4}) => {
  const images = [
   img1,
   img2,
   img3,
   img4
  ];

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