import React from 'react';
import BMW from './newcar.mp4';
import { Link,useParams} from 'react-router-dom';

const Homepage = () => {
  const { firstName } = useParams();
  console.log({firstName});

  return (
    <div>
      <div className="nav">
        <label className="logo">Welcome, {firstName}</label>
        <ul className='ul'>
          <li className='li'>
            <a className="active" href="#">
              Home
            </a>
          </li>
          <li className='li'>
            <a href="#">Location</a>
          </li>
          <li className='li'>
            <a href="#">Services</a>
          </li>
          <li className='li'>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className='sec'>
        <video src={BMW} autoPlay loop muted />
        <div className='content'>
          <h1>Let's Go...</h1><br />
          <Link to='/cars'><button type='enter'>Show Cars</button></Link>
                  </div>
      </div>
      <center>
      <Link to='/' className='bk'>Signout</Link>
      </center>
     
    </div>
  );
}

export default Homepage;
