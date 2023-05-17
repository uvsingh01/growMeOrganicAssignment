import './App.css'
import LoginPage from './screens/LoginPage'
import HomePage from './screens/HomePage'
import {BrowserRouter as  Router , Routes, Route } from 'react-router-dom'


function App() {
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
