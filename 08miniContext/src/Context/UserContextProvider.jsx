import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
   const [user, setUser] = useState(null)
  return (
         // giving access or passing object as a prop in provider 
     <UserContext.Provider value ={{user, setUser}}> 
      {children}
     </UserContext.Provider>
    
  )
}

export default UserContextProvider

// Note:- 
//  children is like a div joh bhi a rha h as a prop usko as it is pass krdo 
//  children ki jgh kuch or naam bhi de sakte h 
/*
  children act like a special prop lets you pass components or 
  elements nested inside a component's opening and closing tags
directly to that component. 


for example:- 
<UserContextProvider>
  <SomeComponent />
  <AnotherComponent />
</UserContextProvider>

here somecomponent , anothercomponent become children 
of usercontextprovider.

Inside UserContextProvider, {children} renders whatever content
you pass in between
<UserContextProvider> ... </UserContextProvider>. 
It’s like saying, "Render exactly what’s passed here."
*/