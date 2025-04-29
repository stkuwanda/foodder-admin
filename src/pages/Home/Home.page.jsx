import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar.component';
import { useAuthContext } from '../../contexts/AuthContext/AuthContext.tools';
import './Home.page.css';

function Home() {
	const { isLoggedIn, setIsLoginPopup } = useAuthContext();
	return (
		<main className='home'>
			<NavBar />
			<section className='h-text'>
				<span>Dishes | Orders | Menu</span>
				<h1>Manage your meals and orders</h1>
				{isLoggedIn ? (
					<Link to='/add'><span>Click here to add a dish now</span></Link>
				) : (
					<span className='click' onClick={() => setIsLoginPopup(true)}>
						Click here to add a dish now
					</span>
				)}
			</section>
		</main>
	);
}

export default Home;
