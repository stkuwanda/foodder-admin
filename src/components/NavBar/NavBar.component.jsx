import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext/AuthContext.tools';
import './NavBar.component.css';

function NavBar() {
	const { isLoggedIn, logout, setIsLoginPopup } = useAuthContext();

	return (
		<nav>
			<Link to='/'>
				<img className='logo' src={assets.logo} alt='Image of logo' />
			</Link>

			<div className='navbar-right'>
				{isLoggedIn ? (
					<div className='navbar-profile'>
						<img
							className='profile'
							src={assets.profile_image}
							alt='Profile image'
						/>
						<ul className='navbar-profile-dropdown'>
							<li onClick={logout}>
								<img src={assets.logout_icon} alt='Image of a logout icon' />
								<p>Logout</p>
							</li>
						</ul>
					</div>
				) : (
					<button onClick={() => setIsLoginPopup(true)}>sign in</button>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
