import { useEffect, useState } from 'react';
import { authContext as AuthContext } from './AuthContext.tools';

function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [token, setToken] = useState('');

	function setAuthToken() {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			setIsLoggedIn(true);
		}
	}

	function logout() {
		localStorage.setItem('token', '');
		setIsLoggedIn(false);
	}

	useEffect(() => {
		setAuthToken();
	}, []);

	const contextValue = {
		isLoggedIn,
		setIsLoggedIn,
		logout,
		setAuthToken,
		token,
	};
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider;
