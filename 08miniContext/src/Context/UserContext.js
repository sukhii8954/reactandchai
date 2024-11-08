import React from 'react'


// it is a method 

const UserContext = React.createContext();

export default UserContext;

// context gives you a major thing : provider , so each context 
// is a provider , UserContext is a provider , it wraps around the
// components which means the components which are within the wrapper get access to the global UserContext which is a variable


