import React from 'react';
import { useEffect, useState } from "react";
import '../index.css';
import Main from './Main.js';
import Footer from './Footer.js';
import { api } from '../utils/Api.js';
import ImagePopup from "./ImagePopup.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Registr from './Registr.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRouteElement from './ProtectedRoute.js';
//import { register, authorize, getToken } from '../utils/authentication.js'
import * as authentication from "../utils/authentication.js";

function App(props) {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltopPopupOpen] = useState(false);
  const [authResult, setauthResult] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  React.useEffect(() => {

    handleTokenCheck()
 
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then((res) => {
          
          setCurrentUser(res) 
          
        })
        .catch((error) => console.log(`Ошибка :( ${error})`));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      api.getTaskCards()
        .then((res) => {
          setCards(res)
        })
        .catch((error) => console.log(`Ошибка :( ${error})`));
    }

  }, [loggedIn]);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closePopups = () => {
    setIsEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
    setInfoTooltopPopupOpen(false);
  };

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.link || isInfoTooltipPopupOpen;

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closePopups();
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
    }
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    }
  }, [isOpen])


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((error) => console.log(`Ошибка :( ${error})`));
  };

  function handleCardDelete(card) {
    api.deleteTask(card._id,).then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id))
    })
      .catch((error) => console.log(`Ошибка :( ${error})`));
  };

  function handleUpdateUser(data) {
    setIsLoading(true)
    api.setUserInfo({ data }).then((newInfo) => {
      setCurrentUser(newInfo)
      closePopups()
    })
      .catch((error) => console.log(`Ошибка :( ${error})`))
      .finally(() => { setIsLoading(false) })
  };

  function handleUpdateAvatar(newAvatar) {
    setIsLoading(true)
    api.pathTaskFromAvatar(newAvatar)
      .then((newData) => {
        setCurrentUser(newData);
        closePopups();
      })
      .catch((error) => console.log(`Ошибка :( ${error})`))
      .finally(() => { setIsLoading(false) })

  }

  function handleAddPlaceSubmit(data) {
    setIsLoading(true)
    api.postTask({ data }).then((newCard) => {
      setCards([newCard, ...cards]);
      closePopups();
    })
      .catch((error) => console.log(`Ошибка :( ${error})`))
      .finally(() => { setIsLoading(false) })
  }

  function handleRegisterSubmit(password, email) {
    authentication

      .register(password, email)
      .then((res) => {
        if (res) {
          setauthResult(true);
          navigate("/sign-in", { replace: true });
        }
      })
      .catch((error) => {
        setauthResult(false);
        console.log(`Ошибка :( ${error})`)
      })

      .finally(() => {
        setInfoTooltopPopupOpen(true)
      })

  }

  function handleLoginSubmit(password, email) {
    authentication

      .authorize(password, email)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token)
          setLoggedIn(true)
          setUserEmail(email)
          navigate("/", { replace: true });
          setauthResult(true);
        }
      })
      .catch((error) => {
        console.log(`Ошибка :( ${error})`)
        setauthResult(false)
        setInfoTooltopPopupOpen(true)
      })
  }

  function exit() {
    setLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  }


  function handleTokenCheck() {
    
    if (localStorage.getItem('token')) {
      const jwt = localStorage.getItem('token');
      authentication
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setUserEmail(res.data.email)
            navigate("/", { replace: true });
          }
        })
        .catch((error) => console.log(`Ошибка :( ${error})`))
    }

  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={
          <ProtectedRouteElement
            element={Main}
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete}
            loggedIn={loggedIn}
            exit={exit}
            userEmail={userEmail}
            tokenCheck={handleTokenCheck}
          />} />
        <Route path="/sign-up" element={<Registr onSubmit={handleRegisterSubmit} />} />
        <Route path="/sign-in" element={<Login onSubmit={handleLoginSubmit} />} />

      </Routes>
      <InfoTooltip isOpen={isInfoTooltipPopupOpen} result={authResult} onClose={closePopups} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closePopups} onUpdateUser={handleUpdateUser} isLoading={isLoading} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closePopups} onAddCard={handleAddPlaceSubmit} isLoading={isLoading} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closePopups} onUpdateAvatar={handleUpdateAvatar} />
      < ImagePopup card={selectedCard} onClose={closePopups} />
    </CurrentUserContext.Provider>

  );
}

export default App;
