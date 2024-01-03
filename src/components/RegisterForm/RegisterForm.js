import { useDispatch } from 'react-redux';

import css from './RegisterForm.module.css';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

import { register } from '../../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/auth/selectors';
import { toast } from "react-toastify";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  const error = useSelector(selectError);
  // console.log(error);

  if (error) {
    toast.error(`${error}`);
  }

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <HiOutlineUserCircle className={css.icon}/>
        <input type="text" name="name" className={css.input}/>
      </label>
      <label className={css.label}>
        Email
        <FiMail className={`${css.icon} ${css.mail}`}/>
        <input type="email" name="email" className={css.input}/>
      </label>
      <label className={css.label}>
        Password
        <RiLockPasswordLine className={css.icon}/>
        <input type="password" name="password" className={css.input}/>
      </label>
      <button type="submit" className={css.btn}>
        Register
      </button>
    </form>
  );
};


export default RegisterForm;