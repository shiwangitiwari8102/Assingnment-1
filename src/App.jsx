import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import CreateAccount from './Component/CreateAccount';
import Login from './Component/Login';
import LandingPage from './Component/LandingPage';

import Account from './Component/Account';

function App() {
  return (
       <>
       
     < Router>
  
     
      <Routes>
     
         <Route path="/create-account" element={<CreateAccount/>} /> 
         <Route path="/login" element={<Login />} /> 
         
         <Route exact path="/" element={<LandingPage/>} />
         <Route path="/account" element={<Account/>} />
      </Routes>
     
      
    </Router>
    </>
  )
}

export default App;
