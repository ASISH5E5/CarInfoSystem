import React from 'react';
import { database } from './Firebase';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Signup = () => {
  const history = useNavigate();
  const mystyle = {
    color: "white",
    padding:"10px 200px 10px 50px",
    fontFamily: "Arial"
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.names.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name
        })
          .then(() => {
            console.log(name);
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
          const fname=name.split(' ')[0];

        console.log(user, "authData");
        alert("Registered Successfully");
        history(`/home/${fname}`);
      })
      .catch((err) => {
        alert('Error occurred,Please Enter correct Email/password');
        console.error(err);
      });
  };

  return (
    <div className='signup'>
      <center>
        <div className='signs'>
          <h1>Signup</h1>
          
          <form onSubmit={submitHandler} autoComplete="off">
          <label className='label'>Name:</label> <br />
          <input type="text" name="names" /><br />
            <label>Email:</label>
            <input type="email" name='email' id="first" />
            <label id='pas'>Password:</label>
            <input type="password" name='password' id="last" />
            <button className='sp'>SIGN UP</button><br />
            <Link to='/login' style={mystyle} className='lb'>Login</Link>
            <Link to='/' className='Link' style={mystyle}>Home</Link>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Signup;
