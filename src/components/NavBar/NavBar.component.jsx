import { assets } from '../../assets/assets';
import './NavBar.component.css';

import React from 'react';

function NavBar() {
	return (
		<nav>
			<img className='logo' src={assets.logo} alt='Image of logo' />

			<div className='navbar-right'>
				<button>sign in</button>
				<div className='navbar-profile'>
					<img
						className='profile'
						src={assets.profile_image}
						alt='Profile image'
					/>
					<ul className='navbar-profile-dropdown'>
						<li>
							<img src={assets.logout_icon} alt='Image of a logout icon' />
							<p>Logout</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
