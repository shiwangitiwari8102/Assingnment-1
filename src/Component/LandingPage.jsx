import Container from "./Container";
import {  Link } from 'react-router-dom';
function LandingPage(){
  return(
   
     <Container>
    <div>
    <div className='container-fluid vh-100 d-flex flex-column justify-content-between'>
      <div className="text-center">
        <h1>Welcome to PopX</h1> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore omnis dolore accusamus ullam placeat!</p>
        <div>
          <Link to="/create-account" className='btn btn-primary mt-2' style={{backgroundColor:'#6C25FF ', width:'100%'}}>Create Account</Link>
        </div>
        <div className='mt-2'>
          <Link to="/login" className='btn btn-primary'  style={{backgroundColor:'#CEBAFB ', width:'100%',border:'none',color:'black'}}>Already Registered ? Login</Link> 
        </div>
      </div>
    </div>
  </div>
  </Container>
 

  );
}

export default LandingPage;

