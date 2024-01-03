import css from './UserMenu.module.css';
import { IoLogOut } from 'react-icons/io5';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <p className={css.user_mail}>{user.email}</p>
      <button
        type='button'
        className={css.btn}
        onClick={() => dispatch(logOut())}>
        Logout
        <IoLogOut className={css.icon} />
      </button>
    </div>
  )
}

export default UserMenu;