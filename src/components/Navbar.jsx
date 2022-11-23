import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Select } from '../components';

const navlinks =  require('../data/navlinks.json')



const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const activeLink = "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
  const normalLink = "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"

  return (
    <nav className='bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded'>
      <div className='flex flex-wrap justify-between item mx-auto'>
        <a href="/" className='flex items-center text-4xl font-bold text-dark'>StockApp</a>
        <button data-collapse-toggle="navbar-default" onClick={() => {setIsNavExpanded(!isNavExpanded)}} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      <div className={`w-full md:block md:w-auto ${isNavExpanded? "expanded" : "hidden"}`} id="navbar-default">
        <ul className="flex items-center flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent ">
          {navlinks.links.map((item) => (
            <NavLink
              to={`/${item.path}`}
              key={item.title}
              className={({ isActive }) => isActive? activeLink : normalLink}>
              <span className="capitalize">
                    {item.title}
              </span>
            </NavLink> 
          ))}
          <Select/>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar