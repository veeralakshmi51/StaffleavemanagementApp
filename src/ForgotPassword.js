import React, { useState } from 'react';
import axios from 'axios'; 
import './Login.css';
import forgotpasswordicon from './forgotpassword.png'


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
    
      const response = await axios.post('????/', { email });
      setMessage(response.data.message);
      setSent(true);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>
          Forgot Password
        </div>
        <div className='underline'></div>
      </div>
      {sent ? (
        <p>{message}</p>
      ) : (
        <div className='inputs'>
          <div className='input'>
            <img src={forgotpasswordicon} alt='password-img' />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='submit-container'>
            <button className="submit" onClick={handleForgotPassword}>
              Send Link to Reset Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
