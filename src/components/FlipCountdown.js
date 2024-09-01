import React, { useState, useEffect } from 'react';
import './FlipCountdown.css';

const FlipCountdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevTimeLeft(timeLeft);
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTimeUnit = (unit) => String(unit).padStart(2, '0');

  const renderUnit = (value, label) => (
    <div className="flip-clock__unit">
      <div className={`flip-clock__card ${value !== prevTimeLeft[label] ? 'flip' : ''}`}>
        <span className="flip-clock__digit">{formatTimeUnit(value)}</span>
      </div>
      <div className="flip-clock__label">{label.charAt(0).toUpperCase() + label.slice(1)}</div>
    </div>
  );

  return (
    <div className="flip-clock">
      {renderUnit(timeLeft.days, 'days')}
      <span className="flip-clock__separator">:</span>
      {renderUnit(timeLeft.hours, 'hours')}
      <span className="flip-clock__separator">:</span>
      {renderUnit(timeLeft.minutes, 'minutes')}
      <span className="flip-clock__separator">:</span>
      {renderUnit(timeLeft.seconds, 'seconds')}
    </div>
  );
};

export default FlipCountdown;
