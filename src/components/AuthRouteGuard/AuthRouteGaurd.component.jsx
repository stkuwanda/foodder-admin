import { useAuthContext } from '../../contexts/AuthContext/AuthContext.tools';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AuthRouteGaurd({ children }) {
	const { isLoggedIn } = useAuthContext();
 
  const location = useLocation();

  if (!isLoggedIn) {
    // Redirect to the login page (or any other unauthorized route)
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // If authenticated, render the child components (the actual protected route content)
  return children ? <Outlet /> : children;
}

export default AuthRouteGaurd;
