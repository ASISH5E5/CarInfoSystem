import React from 'react';

const CarDetails = ({ carData }) => {
  return (
    <div>
      <center>
        <div className='rent'>
          <div className='rimage'>
            <img src={carData.image} alt={carData.title} />
          </div>
          <div className='car-details'>
            <h1>{carData.title}</h1>
            <p>Make: {carData.class}</p>
            <p>Price: {carData.price}</p>
            <p>Year: {carData.year}</p>
            {/* Add more details about the car as needed */}
            <button className='rent-button'>Rent Now</button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default CarDetails;
