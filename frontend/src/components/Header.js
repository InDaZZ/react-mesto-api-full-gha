import { children } from 'react';
import headerLogo from '../images/Logo.png'
function Header({ children, userEmail}) {
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Логотип-'Mesto'" />
      
      {children}
      
    </header>

  )
};

export default Header;