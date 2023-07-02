export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз-Фото'
  },
  {
    name: 'Челябинская область-Фото',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область-Фото'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново-Фото'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка-Фото'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район-Фото'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал-Фото'
  }
];

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item-type_error',
  errorClass: 'popup__error'
};

export const editButton = document.querySelector('.profile__edit-button');
export const popupProfile = document.querySelector('#popupProfile');
export const profileNameText = document.querySelector('.profile__name');
export const activity = document.querySelector('.profile__activity');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupCard = document.querySelector('#popupCard');
export const popupInputName = document.querySelector('.popup__item_type_name');
export const popupInputActivity = document.querySelector('.popup__item_type_activity');
export const popupFormCard = document.querySelector('#popupFormCard');
export const popupFormProfile = document.querySelector('#popupFormProfile');
export const elements = document.querySelector('.elements');
export const popupImage = document.querySelector('#popupImage');
export const popupElementImg = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__image-title');
export const PopupConfirmDelete = document.querySelector('#popupConfirmDeletion')
export const popupAvatarEditForm = document.querySelector('#popupFormAvatar');
export const popupEditAvatar = document.querySelector('#popupEditAvatar');
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupSubmitButton = document.querySelector('.popup__button');
