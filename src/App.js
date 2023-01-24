import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Navbar/>

        <Routes>

        <Route path='/' element={<Dashboard />}/> 


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
