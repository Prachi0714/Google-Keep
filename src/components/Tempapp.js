import React, { useEffect, useState } from 'react'
import './Tempapp.css';
import Sun from '../Images/sun.png'

const Tempapp = () => {
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("Indore");


    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=538b79d272649f86a62a2d4825c58cb9`;
            const response = await fetch(url);
            const reJson = await response.json();
            setCity(reJson.main);



        }


        fetchApi();
    },[search]);




  return (
    <>
    <div className='temp-main'>
        
        <input className='input-temp'
        placeholder='Search'
        onChange={(event) =>{
            setSearch(event.target.value);
        }}
               type='search' />
               <button className='search-btn'><i className="fa fa-search" aria-hidden="true"></i></button>


    
        <img src={Sun} alt='logo' width= '150' height = '150'className='sun' />

        {!city ? (<p className='no-data'>No Data Found</p>) :
            (
                <div>

        <h1 className='degree'>{city.temp}°c</h1>
        <h1 className='city'>{search}</h1>

                </div>
            )
        }
        
    
    </div>
   
    </>
  )
}

export default Tempapp