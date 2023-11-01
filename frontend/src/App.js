import React from 'react';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import ViewData from './ViewData';
import Read from './Read';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/ViewData' element={<ViewData />}></Route>
        <Route path='/Read' element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
