context API  in react :- 
associated with pure React 

<!-- state managements -->
react-redux -> redux toolkit
zustand

<!-- context api -->
It is a global variable which stores all data 

we can create multiple context


## 09 project 


```javascript
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


```
 ## Notes by myself 

  by default we can pass in context 
 so when intially context created so it hold something by defualt already

Example :-

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})

``` javascript

 // e.currentTarget similar to e.target, but currentTarget 
    // is often more accurate when dealing with event
    //  delegation.
```

## Notes :- 
/* adding dependency here ki kiske change hone per useeffect
   dubara call hona chaye theme ke change hone per call hona
    chaiye toh hm thememode dependency dalenge */
  
    // Note:- 
    /*  html se functionality joh aati h uske liye tailwind mai configuration krni padti h 
      current project ke basis per hame config mai darkmode ko enable krna 
      padhta h usme class ya media property leni padhti h 
    */

// Note : if we are importing functions and we dont know what they
// are doing actually , so we define methods with a same name there
// functionality goes in the called methods or passed methods in ThemeProvider


## Notes summary :- 
The useContext hook in React provides an easy way to share data between components without having to pass props manually at every level. It allows you to access the value of a context in any component,
1. Create a Context: First, you create a context using the React.createContext() method. This provides a way to define a "global" value that can be shared across components.

2. Provide the Context Value: You use the Provider component that comes with the context to specify the value of the context. The Provider wraps the components that need access to the context.

3. Consume the Context Value: Any component can use the useContext hook to access the context's value without passing props
