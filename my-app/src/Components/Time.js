import React, { useState } from "react";

function Time() {
  const [times, setTimes] = useState([]);

  const captureTime = () => {
    const now = new Date().toLocaleTimeString(); // get current time
    setTimes((prev) => [...prev, now]); // push to array
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Time Logger App</h2>

      <button onClick={captureTime}>Capture Current Time</button>

      <ul>
        {times.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
}

export default Time;
