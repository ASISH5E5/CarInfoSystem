import jsonData from './data/cars.json';
import React, { useState } from 'react';
import './Home.css';
import Table from './Table';
import Rating from './Rating';
import { useParams, Link } from 'react-router-dom';

const Renting = () => {
  const [carRatings, setCarRatings] = useState({});
  const { id } = useParams();
  console.log('ID:', id);
  const car = jsonData.users.find((user) => user.id === Number(id));
  console.log('Car Data:', car);

  const handleRatingChange = (carId, newRating) => {
    setCarRatings({
      ...carRatings,
      [carId]: newRating,
    });
  };

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className='rent'>
      <span
        className="back-icon"
        onClick={() => window.history.back()}
        style={{
          fontSize: "50px",
          cursor: "pointer",
          borderRadius: "13px",
          margin: "30px 10px 0px 10px"
        }}
      >
        &#8592;]
      </span>
      <h1 style={{ fontSize: '100px', margin: "-90px 0px 0px 90px" }}>{car.title}</h1>
      <center>
        <div className='eimg'>
          <img src={car.image} alt="Logo" style={{ width: "1200px", margin: "50px 250px 50px 370px" }} />
          <img src={car.image1} alt="Logo" style={{ width: "1300px", margin: "50px 250px 50px 370px" }} />
          <img src={car.image2} alt="Logo" style={{ width: "1300px", margin: "50px 250px 50px 370px" }} />
          <img src={car.image3} alt="Logo" style={{ width: "1200px", margin: "50px 250px 50px 370px" }} />
        </div>
        <div className='cnt'>
          <p className='con'>{car.content}</p>
          <p><strong>Model: </strong> {car.model}</p>
          <p><strong>Price: </strong> {car.price}</p>
          <p><strong>Type: </strong> {car.type}</p>
          
          <p><strong>Year: </strong>{car.year}</p>
          <h2>Rolls-Royce Phantom VIII Specs and Features</h2>
          <Table/>
          <strong>Rate: </strong><Rating
            initialRating={carRatings[id] || 0}
            onRatingChange={(newRating) => handleRatingChange(id, newRating)}
          /><br/>
          <Link to={car.link}>
            <button type='submit'>More</button>
          </Link>
        </div>
      </center>
    </div>
  );
};

export default Renting;
