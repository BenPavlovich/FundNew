import React from 'react'
import './Fund.css';
import 'font-awesome/css/font-awesome.min.css';
import Money from './money.png'

export const Fund = () => {
  const city = {}
  return (
    <section className='fund'>
      <div className='img-container'>
        <img className="img-fund" 
        src={Money} 
        alt='finance' />
        <span className='close.btn'><i class="fa-solid fa-square-xmark"></i></span>
      </div>
      <div className='fund-info'>
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>Info<span><i className='fas fa-caret-square-down' /></span> </h5>
      </div>
      <p>Lorem Impsumfsdafdsf</p>
    </section>
  )
}
