import React from 'react'
import './stylesheet/Deslizable.css'
import './stylesheet/Mobile/DeslizableResponsive.css'

export const Deslizable = ({ texto,url,showModal,id,selectHistory,nextWindow }) => {
  
  const handleClick = (val) => {
    

    setTimeout(() => {
      selectHistory(val)
      if(val === 'historiaCorta'){
        nextWindow(99)
      }else {
        nextWindow(1)
      }
    }, 1500);
  }
  //./image/photo-${url}.png
  return (
    <div 
    className={`${showModal == '' ? 'blurer' : ''} noblurer option-container`}
    onClick={() => handleClick(id)}>
        <img className='deslizable-image' src={require(`./image/photo-${url}.png`)}/>
        <p className='deslizable-text'>{texto}</p>
   
    </div>
  )
}
