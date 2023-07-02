import sucsess from "../images/Unionsuccess.png";
import fail from "../images/Unionfail.png"

function InfoTooltip ( {isOpen, popupId, onClose, result}) {
  return ( 
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id={popupId} >
    <div className="popup__container">
        <button type="button" className="popup__button-close" onClick={onClose}></button>
        <img src={result ? sucsess : fail } alt="#" className="popup__image-info"></img>
        <h2 className="popup__heading-info">{result ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
        
    </div>
  </div>
  )
}
export default InfoTooltip;