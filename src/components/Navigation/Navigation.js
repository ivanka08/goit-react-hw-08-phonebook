import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import css from './Navigation.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TiHome } from 'react-icons/ti';


const getClassName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.current}` : css.link;
}

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.container}>
      <NavLink className={getClassName} to="/">
        Home
        <TiHome className={css.icon} />
      </NavLink>
      {isLoggedIn && (<NavLink className={getClassName} to="/contacts">
        Contacts
        <RiContactsBook2Fill className={css.icon} />
      </NavLink>)}
    </nav>
  )
}


export default Navigation;