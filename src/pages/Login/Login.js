
import { Helmet } from 'react-helmet';
import LoginForm from '../../components/LoginForm/LoginForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <ToastContainer autoClose={2000} hideProgressBar closeOnClick/>
    </div>
  );
}