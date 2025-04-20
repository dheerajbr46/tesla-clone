import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home() {
  return (
    <div className="hero">
      <img
        src="https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg"
        alt="Model S"
        className="hero-image"
        onError={(e) => {
          console.error(`Hero image failed to load: ${e.target.src}`);
          e.target.src = 'https://via.placeholder.com/1200x600?text=Hero+Image+Not+Found';
        }}
      />
      <div className="hero-content">
        <h1 className="hero-title">Experience Electric</h1>
        <Link to="/cars" className="hero-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cars')
      .then(response => {
        console.log('API Response:', response.data);
        setCars(response.data);
      })
      .catch(err => {
        console.error('API Error:', err);
        setError('Failed to fetch cars');
      });
  }, []);

  if (error) return <div className="error">{error}</div>;

  // Static image URLs for Model S and Model 3
  const getCarImage = (carName) => {
    console.log(`Car name: "${carName}"`);
    const trimmedName = carName.trim();
    if (trimmedName === 'Model S') {
      return 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg';
    } else if (trimmedName === 'Model 3') {
      return 'https://www.tesla.com/sites/default/files/model3-new/social/model-3-hero-social.jpg';
    }
    return 'https://via.placeholder.com/400x200?text=No+Image'; // Fallback
  };

  return (
    <div className="app">
      <h1 className="heading">Our Models</h1>
      <div className="grid">
        {cars.map(car => {
          const imageSrc = getCarImage(car.name);
          console.log(`Image for ${car.name}: ${imageSrc}`);
          return (
            <div key={car.id} className="card">
              <img
                src={imageSrc}
                alt={car.name}
                onError={(e) => {
                  console.error(`Image failed to load for ${car.name}: ${e.target.src}`);
                  e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
                }}
              />
              <div>
                <h2>{car.name}</h2>
                <p>${car.price.toLocaleString()}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<CarList />} />
      </Routes>
    </Router>
  );
}

export default App;