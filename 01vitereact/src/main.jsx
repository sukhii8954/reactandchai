import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


// const reactElement  = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'click me to visit google'
// }


// what props react used behind the scenes in predefined syntax :- 

// this the actual syntax react used in bts which are predef:-

const anotherUser = "chai aur code"

// babble inject this react element in react
const reactElement = React.createElement(
  // type
  'a',
  // attributes
  {href: 'https://google.com',target: '_blank'},
  // children
  'click me to visit google',
  // evaluated expression
  anotherUser
)

// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google</a>
// )

createRoot(document.getElementById('root')).
render(  
     <StrictMode>
      <App/>
    </StrictMode>
)