import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Textform from './components/Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <About/>,
  },
]);



function App() {
  const[mode,setMode]=useState("light");


  

   const toggleMode=() =>{
    if(mode ==='light'){
    setMode("dark");
    document.body.style.backgroundColor="#0a2e53";
   }else{
    setMode("light");
    document.body.style.backgroundColor="white";
   }
  }
  return ( 
   <>
    
    <Navbar title="Text-Converter"  aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Textform  RouterProvider router={router}   heading="Enter the text to analyze below." mode={mode}></Textform>
    

    
    
    </div>
   
    
     
   </>
    
  );  
}

export default App;
