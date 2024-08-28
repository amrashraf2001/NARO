import React, { useState } from "react";
import "../Styles.css"; // Ensure the path to your CSS file is correct

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const showPrevious = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container">
      <button onClick={showPrevious} className="arrow">
        &lt;
      </button>
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`image ${index === currentIndex ? 'active' : direction === 'prev' && index === (currentIndex + 1) % images.length ? 'previous' : ''}`}
          />
        ))}
      </div>
      <button onClick={showNext} className="arrow">
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
