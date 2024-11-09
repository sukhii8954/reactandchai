import { useEffect, useState } from "react";
import "./App.css";
import { ThemeContext, ThemeProvider } from "./contexts/Theme";
import Themebtn from "./components/Themebtn";
import Cards from "./components/Cards";

function App() {
 
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = ()=> {
    setThemeMode("light");
  }

  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  // acutal change in theme using pure javascript

  useEffect(() => {
    //  removing the default classes of theme in html 
     document.querySelector('html').classList.remove("light","dark")
    //  no we have to add our own value so we removed default value
    document.querySelector("html").classList.add(themeMode); // joh bhi theme mai hoga voh set hojyega light hoga ya dark hoga 

  },[themeMode]);


 
  /* adding dependency here ki kiske change hone per useeffect
   dubara call hona chaye theme ke change hone per call hona
    chaiye toh hm thememode dependency dalenge */
  
    // Note:- 
    /*  html se functionality joh aati h uske liye tailwind mai configuration krni padti h 
      current project ke basis per hame config mai darkmode ko enable krna 
      padhta h usme class ya media property leni padhti h 
    */
   
  return (
    <ThemeProvider value={{themeMode , lightTheme, darkTheme}}>
    <div className=" flex flex-wrap min-h-screen items-center">
      <div className="w-full text-3xl font-serif">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
           {/* theme btn  component*/}
           <Themebtn/>
        </div>      
              Theme switcher
        <div className="w-full max-w-sm mx-auto">
           {/* card  component*/}
           <Cards/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

// Note : if we are importing functions and we dont know what they
// are doing actually , so we define methods with a same name there
// functionality goes in the called methods or passed methods in ThemeProvider
