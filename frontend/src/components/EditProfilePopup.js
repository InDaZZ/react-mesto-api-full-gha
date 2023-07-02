import React from 'react';
import { useEffect, useState } from "react";
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function EditProfilePopup ( {isOpen, onClose, onUpdateUser,isLoading} ) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name,setName] = useState('');

  const [description,setDescription] = useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser,isOpen]); 

  function handleChangeName (e) {
    setName(e.target.value);
  };

  function handleChangeActivity (e) {
    setDescription(e.target.value);
  }

  function handleSubmit (evt) {
    evt.preventDefault();
    
    onUpdateUser({
      name: name,
      about: description,
    })
  }

  

  return(
    <PopupWithForm popupId="popupProfile" formName="editProfile" id="popupFormProfile" title="Редактировать профиль" buttonText={isLoading? 'Сохранение...' : 'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
    <label htmlFor="fullName" className="popup__field">
      <input type="text" className="popup__item popup__item_type_name" placeholder="Имя" name="name" id="fullName"
        value={name || ''} minLength="2" maxLength="40" required onChange={handleChangeName} />
      <span className="fullName-error popup__error"></span>
    </label>
    <label htmlFor="activity" className="popup__field">
      <input type="text" className="popup__item popup__item_type_activity" placeholder="О себе" name="about"
        id="activity" value={description || ''} minLength="2" maxLength="200" required onChange={handleChangeActivity}/>
      <span className="activity-error popup__error"></span>
    </label>
  </PopupWithForm >
  );

  };
  export default EditProfilePopup;
