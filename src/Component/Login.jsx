import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
    <div className='p-3'>
      <h2 >Signin to your<br/>PopX account</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="mb-3">
        <input type='text' className="form-control custom-input" placeholder='Email'   required/>
      </div>
      <div className="mb-3">
        <input type='text' className="form-control custom-input" placeholder='Password'   required/>
      </div>
      <div className="mb-3">
        <Link to="/account" className="btn btn-primary pl-5" style={{backgroundColor:'#CEBAFB ', width:'100%',border:'none',color:'black'}}>Login</Link>
      </div>
    </div>
    </Container>
  );
};

export default Login;
