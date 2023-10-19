import React from 'react';
import { database } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const mystyle = {
    color: "white",
    padding: "10px 200px 10px 50px",
    fontFamily: "Arial"
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(database, email, password)
      .then(data => {
        console.log(data, "authData");
        const displayName = data.user.displayName;
        const firstName = displayName.split(' ')[0];
        console.log({firstName})
        history(`/home/${firstName}`);

      })
      .catch(err => {
        alert('Error occurred, maybe you do not have an account');
        console.log(err);
      });
  };

  return (
    
    <div className='lons'>
      
      <center>
        <h1>Login</h1>
        <form onSubmit={submitHandler} className='Login'>
       
          <label className='label'>Email</label> <br />
          <input type="email" name="email"  /><br/>
          <label className='label' id='pas'>Password</label> <br />
          <input type="password" name="password"  /><br/>
          <button className='sp'>SIGN IN</button><br/>
          <Link to='/signup' style={mystyle} className='lb'>Register</Link>
          <Link to='/' className='Link' style={mystyle}>Home</Link>
        
        </form>
       
        
      </center>
   
    </div>
      
  );
};

export default Login;
