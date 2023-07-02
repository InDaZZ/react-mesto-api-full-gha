import React from "react";

function PopupWithForm({isOpen, popupId, formName, id, onClose, title, children, buttonText, onSubmit}) {
  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id={popupId} >
      <div className="popup__container">
        <form className="popup__form" name={formName} id={id} onSubmit={onSubmit}>
          <button type="button" className="popup__button-close" onClick={onClose}></button>
          <h2 className="popup__heading">{title}</h2>
          {children}
          <button type="submit" className="popup__button">{buttonText}</button>
        </form>

      </div>
    </div>
  )
};

export default PopupWithForm;