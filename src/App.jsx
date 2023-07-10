import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import './App.css'
import Navbar from './components/NavBar';
function App() {

  return (
    <>
      <div className='app'>
        <Navbar />
      </div>
    </>
  )
}

export default App