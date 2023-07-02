import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
function Card({ card, onCardClick, onCardLike, onCardDelete }) {


  function handleClick() {
    onCardClick(card)
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick () {
    onCardDelete(card)
  }

  const userContext = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === userContext._id;

  const isLiked = card.likes.some(i => i._id === userContext._id);

  const cardLikeButtonClassName = ( 
    `element__like ${isLiked && 'element__like_active'}` 
  ); 

  return (
    <div className="element">
      <img src={`${card.link}`} alt={card.name} className="element__image" style={{ color: "FFFFFF" }} onClick={handleClick} />
      <div className="element__content">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <div className="element__like-counter">{card.likes.length}</div>
        </div>
        {isOwn && <button type="button" className="element__delete" onClick={handleDeleteClick}></button>}
      </div>
    </div>
  )
}
export default Card
