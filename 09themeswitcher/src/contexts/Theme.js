import { createContext, useContext } from "react";


//  by default we can pass in context 
//  so when intially context created so it hold something by defualt already

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})


export const ThemeProvider = ThemeContext.Provider 

export default function useTheme(){
    return useContext(ThemeContext)
}