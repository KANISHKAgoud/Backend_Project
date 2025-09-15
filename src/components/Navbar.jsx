import React from 'react'

const Navbar = () => {
  return (
    <div>
    
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MyWebsite</div>
        
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Services</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M4 6h16M4 12h16m-7 6h7">
            </path>
          </svg>
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
