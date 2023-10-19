import React from 'react'
import Thar from './tharcar.mp4';
import './Home.css'
import { Link } from 'react-router-dom';
const Front = () => {
  return (
    <div>
  <div className="nav">
    <label className="logo">CarsInfo</label>
  </div>
  <div className='sec'>
    <video src={Thar} autoPlay loop muted/>
    <div className='content'>
    <h1 className='hed'>Ride with your Own Car...</h1><br/>
   <Link to='/signup'><button type='enter'>Signup</button></Link> 
    </div>
  </div>
  
    </div>
  )
}

export default Front