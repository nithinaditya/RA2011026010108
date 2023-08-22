import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from your backend API
    fetch('/train/trains') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => setTrains(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <div className="train-list">
        {trains.map(train => (
          <div key={train.id} className="train-card">
            <h2>{train.name}</h2>
            <p>Price: {train.price}</p>
            <p>Available Seats: {train.availableSeats}</p>
            <p>Departure Time: {train.departureTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
