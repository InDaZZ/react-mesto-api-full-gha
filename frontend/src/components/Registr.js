import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Registr({onSubmit}) {

  

  const [isValue, setIsValue] = useState({
    password:"",
    email:"",
    
  })

  const handleChange = (evt) => {

    const { name, value } = evt.target;

    setIsValue({

      ...isValue,

      [name]: value

    });

  }

  function handleSubmit (e) {
    e.preventDefault();
    const { password , email } = isValue
    onSubmit(password,email)
  };

  
  return (
    <>
      <Header>
        <Link to="/sign-in" className="header__link">Войти</Link>
      </Header>
      <div className="registr__registr-container">
        <form className="registr__form" name="refistrForm" id="refistrForm" onSubmit={handleSubmit}>
          <h2 className="registr__heading">Регистрация</h2>
          <label htmlFor="userEmail" className="registr__field">
            <input type="email" className="registr__item registr__item_type_name" placeholder="Email" name="email"
              id="userEmail" value={isValue.email || ''} minLength="2" maxLength="30" required onChange={handleChange}/>
            <span className="registrEmail-error registr__error"></span>
          </label>
          <label htmlFor="userPassword" className="registr__field">
            <input type="password" className="registr__item registr__item_type_password" placeholder="Пароль" name="password"
              id="userPassword" value={isValue.password || ''} minLength="6 я" maxLength="30" required onChange={handleChange}  />
            <span className="pictureName-error popup__error"></span>
          </label>
          <button type="submit" className="registr__button">Зарегистрироваться</button>
        </form>
      </div>
      <Link to="/sign-in" className="header__textLink">Уже зарегистрированы? Войти</Link>
    </>
  )
}
export default Registr;