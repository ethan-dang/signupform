import React from 'react';
import NavBar from './NavBar';

function Home() {
  return (
    <div>
      <NavBar />
      <div class="d-flex justify-content-center align-items-center bg-primary vh-100">
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home