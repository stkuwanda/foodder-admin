import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar/NavBar.component';
import SideBar from './components/SideBar/SideBar.component';
import Add from './pages/Add/Add.page';
import List from './pages/List/List.page';
import Orders from './pages/Orders/Orders.page';
import './App.css';
import AuthRouteGaurd from './components/AuthRouteGuard/AuthRouteGaurd.component';
import { useAuthContext } from './contexts/AuthContext/AuthContext.tools';

function App() {
	const { isLoggedIn } = useAuthContext();

	return (
		<div>
			<ToastContainer />
			<NavBar />
			{isLoggedIn ? <hr /> : undefined}
			<main className='app-content'>
				{isLoggedIn ? <SideBar /> : undefined}
				<Routes>
					<Route path='/add' element={<AuthRouteGaurd />}>
						<Route index element={<Add />} />
					</Route>
					<Route path='/list' element={<AuthRouteGaurd />}>
						<Route index element={<List />} />
					</Route>
					<Route path='/orders' element={<AuthRouteGaurd />}>
						<Route index element={<Orders />} />
					</Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
