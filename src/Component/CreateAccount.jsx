import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Container';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  return (
    <Container>
    <div className="container">
      <h2 className="text-center">Create Account Page</h2>
      <div className="mb-3">
        <input type='text' className="form-control custom-input" placeholder='Full Name*'  required />
      </div>
      <div className="mb-3">
        <input type='text' className="form-control custom-input" placeholder='Phone number*'  required />
      </div>
      <div className="mb-3">
        <input type='text' className="form-control custom-input" placeholder='Email address*'  required />
      </div>
      <div className="mb-3">
        <input type='password' className="form-control custom-input" placeholder='Password*'  required />
      </div>
      <div className="mb-3">
        <input type='text' className="form-control custom-input" placeholder='Company name' />
      </div>
      <div className="mb-3">
        <h6>Are you an agency?</h6>
       
          <input type='radio' className="form-check-input " name='agency' value='yes' id="yes" />
          <label className="form-check-label" htmlFor="yes">Yes</label>
          <input type='radio' className="form-check-input ms-5" name='agency' value='no' id="no" />
          <label className="form-check-label" htmlFor="no">No</label>
        </div>
        <Link to='/account' className='btn btn-primary pl-5 mt-4  ' style={{backgroundColor:'#6C25FF ', width:'100%' }} >Create Account</Link>
    </div>
    </Container>
  );
};

export default CreateAccount;
