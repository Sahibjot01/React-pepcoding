import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='p-4 bg-black mb-3 '>
        <Link to="/">
        <span className="font-medium 
     text-3xl   
     text-white   
     inline-block 
     mr-4
     ">IMDB</span>
        </Link>
      
     <Link to="/login">
     <span className=" font-medium 
     text-blue-500 
      text-xl hover:text-blue-400" >Login</span>
     </Link>
      
    </nav>
    </div>
  )
}

export default Navbar

