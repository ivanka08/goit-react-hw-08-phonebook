

import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to='/contacts'/>
  }
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <ToastContainer autoClose={2000} hideProgressBar closeOnClick/>
    </div>
  );
}

