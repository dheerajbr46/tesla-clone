import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cars')
      .then(response => setCars(response.data))
      .catch(err => setError('Failed to fetch cars'));
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>Tesla Clone</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.name} - ${car.price} - <img src={car.imageUrl} alt={car.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;