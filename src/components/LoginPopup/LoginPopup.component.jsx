import { useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../contexts/AuthContext/AuthContext.tools';
import './LoginPopup.component.css';
import { serverUrl } from '../../utils';


function LoginPopup() {
	const { login, setIsLoginPopup } = useAuthContext();
	const [currState, setCurrentState] = useState('Login');
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
	});

	function onChangeHandler(event) {
		const name = event.target.name;
		const value = event.target.value;

		setUserData((prev) => ({ ...prev, [name]: value }));
	}

	async function onSubmitHandler(event) {
		event.preventDefault();

		let url = serverUrl;

		if (currState === 'Login') {
			url += '/api/user/login';
		} else {
			url += '/api/user/register';
		}

		try {
			const response = await axios.post(url, userData);
			if (response.data.success) {
				login(response.data.token);
				localStorage.setItem('token', response.data.token);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			if (error.message.includes('409')) {
				toast.error('This user already exists.');
			} else {
				toast.error(error.message);
			}
		}
	}

	return (
		<div className='login-popup'>
			<form onSubmit={onSubmitHandler} className='login-popup-container'>
				<div className='login-popup-title'>
					<h2>{currState}</h2>
					<img
						onClick={() => setIsLoginPopup(false)}
						src={assets.cross_icon}
						alt='Cross icon image'
					/>
				</div>
				<div className='login-popup-inputs'>
					{currState === 'Login' ? undefined : (
						<input
							type='text'
							name='name'
							onChange={onChangeHandler}
							value={userData.name}
							placeholder='Enter your full name'
							required
						/>
					)}
					<input
						type='email'
						name='email'
						placeholder='Enter your email'
						onChange={onChangeHandler}
						value={userData.email}
						required
					/>
					<input
						type='password'
						name='password'
						onChange={onChangeHandler}
						value={userData.password}
						placeholder='Password'
						required
					/>
				</div>
				<button type='submit'>
					{currState === 'Sign Up' ? 'Sign Up' : 'Login'}
				</button>
				<div className='login-popup-condition'>
					<input type='checkbox' required />
					<p>By continuing, I agree to the terms of use and privacy policy</p>
				</div>
				{currState === 'Login' ? (
					<p>
						Do you want to sign up?{' '}
						<span onClick={() => setCurrentState('Sign Up')}>Click here</span>
					</p>
				) : (
					<p>
						Already signed up?{' '}
						<span onClick={() => setCurrentState('Login')}>Login</span>
					</p>
				)}
			</form>
		</div>
	);
}

export default LoginPopup;
