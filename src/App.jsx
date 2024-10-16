import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Project'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-gray-900 bg-opacity-[0.19] text-gray-950'>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App