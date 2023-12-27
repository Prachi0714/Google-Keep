import React from 'react';
import Logo from '../Images/logo.png'
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <>
    <div className='keep-main'>
     <img src={Logo} alt='logo' width= '50' height = '50' />

        <h1>Keep</h1>
        <ul>
        <li><Link to = "/">Notes</Link></li>
        <li><Link to = "/weatherapp">Weather App</Link></li>
        
          
        </ul>
    </div>
    </>
  )
}


export default Header