import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assests/icons/logo.png'
const Navbar = () => {
  const [isProject, setProject] = useState(false);
  const [isMetrics, setMetrics] = useState(false);
  
  return (
    <div className='bg-red-300 text-[#212222 p-4]' >
        <nav className='flex justify-between items-center'>
          <Link to= "/">
        <img className='w-10 h-10' src={logo} alt="" />
          </Link>
        <ul className="flex space-x-4 relative">
        <li 
            className="hover:underline relative cursor-pointer" 
            onMouseEnter={() => setProject(true)} 
            onMouseLeave={() => setProject(false)}
          >
            Projects
            {isProject && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-20">
                <li className="p-2 hover:bg-gray-200"><Link to="/projects/task1">Task 1</Link></li>
                <li className="p-2 hover:bg-gray-200"><Link to="/projects/task2">Task 2</Link></li>
              </ul>
            )}
          </li>
          <li 
            className="hover:underline relative cursor-pointer" 
            onMouseEnter={() => setMetrics(true)} 
            onMouseLeave={() => setMetrics(false)}
          >
            Metrics
            {isMetrics && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-20">
                <li className="p-2 hover:bg-gray-200"><Link to="/metrics/report1">Report 1</Link></li>
                <li className="p-2 hover:bg-gray-200"><Link to="/metrics/report2">Report 2</Link></li>
              </ul>
            )}
          </li>
        <li><Link to="/" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/stories" className="hover:underline">Stories</Link></li>
        <li><Link to="/settings" className="hover:underline">Settings</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
