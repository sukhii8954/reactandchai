import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/Contact/Contactus.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Github, { githubLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   // list of objects that we need
//   {
//     path: "/",
//     element: <Layout/>,
//     // want to add home , aboutus , contact us are refered as childeren here
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       }, 

//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contactus/>
//       }
//     ]
//   }
// ])
  //   ANOTHER WAY...

//  by using routeselements we can do nesitng in routes
   const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contactus' element={<Contactus/>} />
      <Route path='user/:id' element={<User/>} />
      <Route 
      // optimal way to fetch data from api or Db
       loader ={githubLoader}
        path='github'
       element={<Github/>}
        />
      {/* taken id as a parameter here */}
      
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
