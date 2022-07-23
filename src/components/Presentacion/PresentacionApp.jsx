import React, { useState } from 'react'
import './stylesheets/PresentacionApp.css'


export const PresentacionApp = ({ nextWindow }) => {


  return (
    <div className='presentacion-container'>
        <h1>Mi nombre es Facundo </h1>
        <div className='content-container'>
          <img src={require('./image/presentacion-img.png')} />
        <div className='right-content'>
          <span>bienvenido a mi portfolio</span>
          <button className='' onClick={() => nextWindow(prevS => prevS + 1)}>Comencemos!</button>
        </div>

        </div>
        


    </div>
  )
}
