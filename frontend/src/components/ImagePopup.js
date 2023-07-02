function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_image ${card.link ? "popup_active" : ""} `} id="popupImage">
      <div className="popup__image-container">
        <img src={card.link} alt={card.name} className="popup__image" />
        <button type="button" className="popup__button-close popup__button-close_image" id="popupImageButtonClose" onClick={onClose}></button>
        <h3 className="popup__image-title">{card.name}</h3>
      </div>
    </div>
  )
};
export default ImagePopup;