import React, { useState, useEffect, useMemo, useRef } from 'react';
import './Slider.css'; // Import the CSS file for styling
import CatImage from '../Slider/cat.jpg';
import ArtistImage from '../Slider/artist.jpg';
import WorkingImage from '../Slider/working_img.jpg';

const Slider = () => {
  const images = [CatImage, ArtistImage, WorkingImage];
  const texts = useMemo(
    () => ['Curious to know about me ?', 'I am an Artist,', 'a Web Developer'],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [counter, setCounter] = useState(0);

  const timer = useRef(null); // Use useRef to store the timer variable

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCounter((prevCounter) => prevCounter + 1);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer.current);
  }, [images.length]);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex, texts]);

  useEffect(() => {
    if (counter === 30) {
      clearInterval(timer.current);
    }
  }, [counter]);

  return (
    <div className="slider-container">
      <div
        id="slider"
        className="slider"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="text-overlay">
          <h2>{currentText}</h2>
        </div>
      </div>
    </div>
  );
};

export default Slider;
