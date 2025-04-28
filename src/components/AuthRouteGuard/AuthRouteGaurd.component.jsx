import { Navigate } from 'react-router-dom';

function AuthRouteGaurd({ isLoggedIn, children }) {
	return isLoggedIn ? children : <Navigate to='/' />;
}

export default AuthRouteGaurd;
