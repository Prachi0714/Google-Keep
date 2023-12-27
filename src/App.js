import React from 'react'
import {BrowserRouter,Routes ,Route} from "react-router-dom"
import Footer from './components/Footer'
import Header from './components/Header'
import './components/KeepGoogle.css'
import './App.css'
import Content from './components/Content'
import Tempapp from './components/Tempapp'


function App() {
  return (
    <>
    

    <BrowserRouter>
    <Header />

    <Routes>

      <Route path = "/" element={<Content />}/>
      <Route path = "/weatherapp" element={<Tempapp />}/>
      


    </Routes>
    <Footer />
    
    </BrowserRouter>



    
    
    </>
  )
}

export default App