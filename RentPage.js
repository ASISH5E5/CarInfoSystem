import React from 'react';

const RentPage = (props) => {
  const carData = props.location.state.car;
    console.log('Data receiving in rent page', carData);
    

    return (
      <div>
        <center>
         <h1>{props.title}</h1>

        </center>
      </div>
    );
    }
export default RentPage;
