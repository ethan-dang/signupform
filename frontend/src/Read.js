import React from 'react'
import ViewData from './ViewData'
import NavBar from './NavBar'

function Read() {
  return (
    <div>
        <NavBar />
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100 text-white">
            <ViewData />
        </div>
    </div>
  )
}

export default Read;