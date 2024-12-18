import React, { useState } from "react";
import "./slider.css"; // Add custom CSS for styling

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for next and previous slides
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

  return (
    <div className="slider">
      {/* Images */}
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>

      {/* Navigation */}
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
