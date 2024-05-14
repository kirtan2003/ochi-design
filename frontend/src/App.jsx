// import { useState } from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} exact/>
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </Router>
      
  )
}

export default App
