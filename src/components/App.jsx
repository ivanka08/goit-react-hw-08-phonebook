
import '../../src/index.css';


import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';

import { ProgressBar } from 'react-loader-spinner';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]) 

  return <div className="container">
        <div className="in_container">
          {isRefreshing ? <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#000000'
        barColor='#F033F3' /> : <>
          <AppBar />
          <Suspense fallback={null}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='/register'
              element={<RestrictedRoute redirectTo='/contacts' component={<RegisterPage />} />} />
            <Route path='/login'
              element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
            <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<ContactsPage />} />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense></>}
        </div>
        <div className="circle"></div>
      </div>
}

export default App;

