import { useState } from 'react'
import './App.css'
import LoginPage from './screens/LoginPage'
import HomePage from './screens/HomePage'
import {BrowserRouter as  Router , Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  const [loggedIn, setLoggedIn]= useState(false)
  useEffect(()=>{
    console.log("before", loggedIn);
    
    if(localStorage.getItem("userDetails")){
      setLoggedIn(true);
    }else{
      setLoggedIn(false)
    }
    console.log("after", loggedIn);

  },[])

  return (
    <div className='App'>
      <Router>
          <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>

            <Route path="/" element={<HomePage />}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
