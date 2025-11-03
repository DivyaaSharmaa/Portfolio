import { useState } from 'react'

import './App.css'
import Contacts from './assets/Contact'
import Header from './assets/Header';
import Project from './assets/Project';
import Footer from './assets/Footer'
function App() {

  return (
    <>
    <div className='main'>
     <Header /> 
    <Project/>
    <Contacts/>
    
    <Footer/>  
    </div>
    </>
  )
}

export default App;
