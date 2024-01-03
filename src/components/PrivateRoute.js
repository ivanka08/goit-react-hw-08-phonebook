import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';



export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();

  if (!isLoggedIn && token) {
    return (<ColorRing
      visible={true}
      height="22"
      width="22"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={[]}
    />)
  }

  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
