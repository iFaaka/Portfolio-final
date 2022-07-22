import React from 'react'
import { Deslizable } from './Deslizable';
import './stylesheet/SeleccionDeHistoria.css'
import './stylesheet/Mobile/SeleccionDeHistoria.css'


export const SeleccionDeHistoria = ({ showModal,selectView,selectHistory,nextWindow }) => {
  return (
    <div>
        <div className='deslizable-container'>

        <Deslizable
        showModal={showModal} 
        url={'hey'}
        texto={'Quiero hacer el recorrido completo'}
        id={'historiaLarga'}
        selectHistory={selectHistory}
        nextWindow={nextWindow}
        />



        <div className="v-line">
        </div>


        <Deslizable
        showModal={showModal}  
        url={'busy'}
        texto={'Soy una persona ocupada, quiero la historia breve'}
        id={'historiaCorta'}
        selectHistory={selectHistory}
        nextWindow={nextWindow}/>

      </div>
    </div>
  )
}
