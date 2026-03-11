import React, { useState, useEffect } from 'react';

const LiveCountdownDisplay = () => {
  // Set the date we're counting down to: June 10, 2026, 00:00:00 local time
  const eventDate = new Date('June 10, 2026 00:00:00').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Check if the event has already started
  const eventStarted = Object.values(timeLeft).every(val => val <= 0);

  if (eventStarted) {
    return <div className="countdown-timer-message">Event Has Started!</div>;
  }

  return (
    <div className="countdown-timer">
      <div className="timer-box"><span>{timeLeft.days}</span><span>Days</span></div>
      <div className="timer-box"><span>{timeLeft.hours}</span><span>Hours</span></div>
      <div className="timer-box"><span>{timeLeft.minutes}</span><span>Minutes</span></div>
      <div className="timer-box"><span>{timeLeft.seconds}</span><span>Seconds</span></div>
    </div>
  );
};

export default LiveCountdownDisplay;