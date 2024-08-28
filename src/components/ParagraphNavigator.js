import React, { useState } from "react";


const ParagraphNavigator = ({ paragraphs }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const showPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : paragraphs.length - 1
      );
    };
  
    const showNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < paragraphs.length - 1 ? prevIndex + 1 : 0
      );
    };
  
    return (
      <div className="container">
        <button onClick={showPrevious} className="arrow arrow-left">
          &lt;
        </button>
        <div className="content">
          <p>{paragraphs[currentIndex]}</p>
        </div>
        <button onClick={showNext} className="arrow arrow-right">
          &gt;
        </button>
      </div>
    );
  };
  
  export default ParagraphNavigator;