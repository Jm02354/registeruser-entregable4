import React, { useState } from 'react'
import './styles/modal.css'

const Modal = ({ user, isOpen, setIsOpen, deleteUser }) => {
  
  const handleAccept = () => {
    deleteUser('/users', user.id)
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <article className={`modal ${isOpen && 'active'}`}> 
      <div className='modal__back'>
        <h3 className='modal__title'>Are you sure?</h3>
        <div className='modal__container'>
          <button onClick={handleAccept} className='modal__btn'>Accept</button>
          <button onClick={handleCancel} className='modal__btn'>Cancel</button>
        </div>
      </div>
    </article>
  )
}

export default Modal
