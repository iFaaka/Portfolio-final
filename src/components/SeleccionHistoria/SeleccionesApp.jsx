import { useState } from 'react';
import { Modal } from './Modal';
import { SeleccionDeHistoria } from './SeleccionDeHistoria';
import './stylesheet/SeleccionesApp.css'



export const SeleccionesApp = ({ nextWindow }) => {

  const [typeOfView, settypeOfView] = useState('')
  const [typeHistory, setTypeHistory] = useState('')


  const show = () => {
    if(typeHistory !== ''){
      return ''
    } else {
        return (
          <div className={`SeleccionesApp`}>
          <Modal selectView={selectView} showModal={typeOfView}/>
          <SeleccionDeHistoria nextWindow={nextWindow} selectHistory={selectHistory} typeSelect={selectView} showModal={typeOfView}/>
        </div>
        )
    }
  }

  const selectHistory = (val) => {
    setTypeHistory(val)
    console.log(typeHistory)
  }

  const selectView = (val) => settypeOfView(val)


    return (
    <>
      {
        show()
      }
        
    </>

  )
}
