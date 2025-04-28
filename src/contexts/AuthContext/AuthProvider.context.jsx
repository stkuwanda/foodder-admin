import { useEffect, useState } from 'react';
import { authContext as AuthContext } from './AuthContext.tools';

function AuthProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoginPopup, setIsLoginPopup] = useState(false);
	const [token, setToken] = useState('');

	function onLoadAppSetAuthToken() {
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
			setIsLoggedIn(true);
		}
	}

	function logout() {
		localStorage.setItem('token', '');
		setIsLoggedIn(false);
		setToken('');
	}

	function login(token) {
		setToken(token);
		localStorage.setItem('token', token);
		setIsLoggedIn(true)
		setIsLoginPopup(false);
	}

	useEffect(() => {
		onLoadAppSetAuthToken();
	}, []);

	const contextValue = {
		isLoggedIn,
		setIsLoggedIn,
		logout,
		onLoadAppSetAuthToken,
		login,
		setIsLoginPopup,
		isLoginPopup,
		token,
	};
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}

export default AuthProvider;
