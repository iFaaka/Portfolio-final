import React from 'react'
import './stylesheet/Modal.css'
import './stylesheet/Mobile/ModalResponsive.css'
export const Modal = ({ showModal,selectView }) => {
  return (

    <div  className={` ${showModal !== '' && 'visible'} modal-bg`}>
        <div className='modal-container'>
            <p>¿Cual es el motivo que te trajo a mi portafolio?</p>
            <div className='boton-modal-container'>
                <div className='modal-button' onClick={() => selectView('recluiter')}>Soy recluiter IT</div>
                <div className='modal-button' onClick={() => selectView('curioso')}>Soy curioso/a</div>

            </div>

        </div>


    </div>

  )
}
