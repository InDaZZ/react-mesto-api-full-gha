import React from 'react';
import { useEffect, useState, useRef} from "react";
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditAvatarPopup ({isOpen, onClose,onUpdateAvatar}) {
  const avatar = useRef();

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit (e) {
    e.preventDefault();

    onUpdateAvatar(avatar.current.value);
  }

  return (
    <PopupWithForm popupId="popupEditAvatar" id="popupFormAvatar" title="Обновить аватар" buttonText="Да" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label htmlFor="editAvatar" className="popup__field">
        <input type="url" className="popup__item popup__item_type_card-name" placeholder="Ссылка на картинку"
          name="link" id="editAvatar" defaultValue="" required ref={avatar}/>
        <span className="editAvatar-error popup__error"></span>
      </label>
    </PopupWithForm>
  );
};
export default EditAvatarPopup;