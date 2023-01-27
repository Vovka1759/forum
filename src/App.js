import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import PostDetails from './Components/Posts/PostDetails';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import CreatePost from './Components/Posts/CreatePost';
function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar/>

        <Routes>

          <Route path='/' element={<Dashboard />}/> 
          <Route path='/signin' element={<SignIn />}/> 
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/create' element={<CreatePost />}/>
          <Route path='/post/:id' element={<PostDetails />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
