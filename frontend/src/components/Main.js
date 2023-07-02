import React from 'react';
import { useEffect, useState } from "react";
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditAvatarImage from '../images/edit-profile-avatar.png';
import Header from "./Header";

function Main({ onCardClick, onEditAvatar, onEditProfile, onAddPlace, onCardLike, cards, onCardDelete, exit, userEmail, tokenCheck}) {

  const [userName, setUserName] = useState('');

  const [userDescription, setUserDescription] = useState('');

  const [userAvatar, setUserAvatar] = useState('');

  const userContext = React.useContext(CurrentUserContext);
  
 

  return (
    <>
      <Header exit={exit} userEmail={userEmail}>
        <div className='header__container'>
          <p className="header__email-user">{userEmail}</p>
          <button onClick={exit} className="header__link">Выйти</button>
        </div>
      </Header>
      <main className="main">
        <section className="profile">
          <div className="profile__avatar-container">
            <img src={userContext.avatar} alt="Фото-профиля" className="profile__avatar" onClick={onEditAvatar} />
            <img src={EditAvatarImage} alt="Иконка-редактирования"
              className="profile__edit-avatar" />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userContext.name}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            <p className="profile__activity">{userContext.about}</p>
          </div>
          <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
          {cards.map((card) => {

            return (

              <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
            )
          }
          )}
        </section>
      </main >
    </>
  )
};

export default Main;