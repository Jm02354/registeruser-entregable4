import React, { useState } from 'react'
import './styles/userCard.css'
import Modal from './Modal'


const UserCard = ({ user, deleteUser, setUpdate, setIsShow}) => {

  const [isOpen, setIsOpen] = useState(false)


  const handleDelete = () => {
    setIsOpen(true)
    // deleteUser('/users', user.id)
  }

  const handleEdit = () => {
    setUpdate(user)
    setIsShow(true)
  }

  return (
    <article className='usercard'>
      <Modal
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        deleteUser={deleteUser}
      />
      <div className='imageusers'>
        <figure className='imageuser'>
        <img className='image' src={user.image_url} alt="image" />
        </figure>
      </div>
      
      <h2 className='usercard__name'>{user.first_name} {user.last_name}</h2>
      <hr />
      <ul className='usercard__list'>
        <li className='usercard__item'><span>Email: </span><span>{user.email}</span></li>
        <li className='usercard__item'><span>Birthday: </span><span><ion-icon name="gift-outline"></ion-icon> {user.birthday}</span></li>
      </ul>
      <hr />
      <div className='usercard__buttons'>
        <button className='usercard__btn-delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
        <button className='usercard__btn-edit' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
      </div>
    </article>
  )
}

export default UserCard
