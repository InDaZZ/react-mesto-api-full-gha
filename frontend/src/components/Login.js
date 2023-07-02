import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login({onSubmit}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword,setUserPassword] = useState('');

  const [isValue, setIsValue] = useState({
    password: '',
    email: ''
    
  })

  const handleChange = (evt) => {

    const { name, value } = evt.target;

    setIsValue({

      ...isValue,

      [name]: value

    });

  }

  /*function handleEmail (e) {
    setUserEmail(e.target.value)
    
  }*/

  /*function handlePassword (e) {
    setUserPassword(e.target.value)
    
  }*/

  function handleSubmit (e) {
    e.preventDefault()
    const { password,email } = isValue
    onSubmit(password,email)
  }
  return (
    <>
      <Header>
        <Link to="/sign-up" className="header__link">Регистрация</Link>
      </Header>
      <div className="login__login-container">
        <form className="login__form" name="refistrForm" id="refistrForm">
          <h2 className="login__heading">Вход</h2>
          <label htmlFor="userEmail" className="login__field">
            <input type="text" className="login__item login__item_type_name" placeholder="Email" name="email"
              id="userEmail" defaultValue="" minLength="2" maxLength="30" required onChange={handleChange}/>
            <span className="loginEmail-error login__error"></span>
          </label>
          <label htmlFor="userPassword" className="login__field">
            <input type="password" className="login__item login__item_type_password" placeholder="Пароль" name="password"
              id="userPassword" defaultValue="" minLength="6" maxLength="30" required  onChange={handleChange}/>
            <span className="pictureName-error popup__error"></span>
          </label>
          <button type="submit" className="login__button" onClick={handleSubmit}>Войти</button>
        </form>
      </div>
    </>
  )
}
export default Login;