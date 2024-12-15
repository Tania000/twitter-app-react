import React, { useContext } from "react";
import { AppContext } from "./App.jsx";



 function Header() {
   const { theme, setTheme } = useContext(AppContext); 

   //toggleTheme function:
   const toggleTheme = () => {
     setTheme(theme === "light" ? "dark" : "light");
   };

   return (
     <header className="header">
       <h1 className="app-title">Twitter Clone</h1>
       <button className="theme-toggle-btn" onClick={toggleTheme}>
         Switch to {theme === "light" ? "Dark" : "Light"} Mode
       </button>
     </header>
   );
 };

export default Header;
