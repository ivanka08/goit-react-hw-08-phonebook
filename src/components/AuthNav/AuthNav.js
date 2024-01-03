import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { IoLogIn } from 'react-icons/io5';
import { MdOutlineManageAccounts } from 'react-icons/md';

const getClassName = ({ isActive }) => {
  return isActive ? `${css.btn} ${css.current}` : css.btn;
}

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={getClassName} to="/register">
        Register
        <MdOutlineManageAccounts className={css.icon} />
      </NavLink>
      <NavLink className={getClassName} to="/login">
        Log In
        <IoLogIn className={css.icon} />
      </NavLink>
    </div>
  )
}

export default AuthNav;