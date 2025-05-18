import React from 'react'
import Light from '../assets/images/app/light-mode-button.png'
import Dark from '../assets/images/app/dark-mode-button.png'
import { useState, useEffect } from 'react'

const DarkMode = () => {
    //GET USER DEFAULT THEME OR APPLY LIGHT DEFAULT
    const [theme, setTheme] = useState(
        localStorage.getItem("theme")? localStorage.getItem("theme") : "light")
    const element = document.documentElement;
    
    useEffect(()=>{
        
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }

    },[theme])


  return (
    <div className='relative'>
        <img src={Light} alt="lightmode toggle"
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark"? "opacity-0":"opacity-100"}`}
            //APPLY DARKMODE USE EFFECT ON CLICK
            onClick={()=>setTheme(theme==="light"? "dark":"light")}
        />
        <img src={Dark} alt="darkmode toggle" 
            className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 '
             //APPLY DARKMODE USE EFFECT ON CLICK
             onClick={()=>setTheme(theme==="light"? "dark":"light")}
        />
    </div>
  )
}

export default DarkMode