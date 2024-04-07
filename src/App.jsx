import React,{useState, useEffect} from 'react'
import Card from './Card'
import FirstScreen from './FirstScreen'



export default function App() {
const [darkMode, setDarkMode] = useState(false)

useEffect(() => {
  const isDarkMode = localStorage.getItem('darkMode') === "true";
  setDarkMode(isDarkMode);
  applyDarkMode(isDarkMode);
}, []);

const toggleDarkMode = ()=>{
const newDarkMode = !darkMode
setDarkMode(newDarkMode)
applyDarkMode(newDarkMode)
localStorage.setItem('darkMode', newDarkMode.toString())
}

const applyDarkMode = (isDarkMode)=>{
    const htmlElement = document.documentElement
    if(isDarkMode) {
        htmlElement.classList.add('dark')
    }
    else {
        htmlElement.classList.remove('dark')
    }
}
  return ( <div className={` ${darkMode ? 'bg-[#000]  text-white':'  bg-[#FEFFFE]' } `}>
    <div className='pt-10 pl-[86%] absolute '>
           <button 
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none" 
          onClick={toggleDarkMode} 
        > 
          {darkMode ? ( 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /> 
          </svg> 
           
          ) : ( 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> 
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /> 
</svg> 
 
          )} 
        </button> 
        </div>
    <div className='items-center mx-auto justify-center h-[100vh] flex flex-col w-[320px] lg:w-[900px] md:w-[700px]   '><FirstScreen />
    </div>
    <div className={ `${darkMode ? ' text-black border-[#000]':'  text-[#000]' } pb-5`}><Card darkMode={darkMode}/></div>
    
    <a href='https://lj-six.vercel.app/'><div className={`py-5 items-center justify-center flex ${darkMode? ' bg-[#232B2B] text-[#fff]': 'bg-[#232B2B] text-[#fff]'} `}>REMAKE BY LAJA</div>
    </a></div>
  )
}
