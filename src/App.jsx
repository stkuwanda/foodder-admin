import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar/NavBar.component';
import SideBar from './components/SideBar/SideBar.component';
import Add from './pages/Add/Add.page';
import List from './pages/List/List.page';
import Orders from './pages/Orders/Orders.page';
import AuthRouteGaurd from './components/AuthRouteGuard/AuthRouteGaurd.component';
import { useAuthContext } from './contexts/AuthContext/AuthContext.tools';
import LoginPopup from './components/LoginPopup/LoginPopup.component';
import Home from './pages/Home/Home.page';
import NotFound from './pages/NotFound/NotFound.page';
import './App.css';

function App() {
	const { isLoggedIn, isLoginPopup } = useAuthContext();
	const location = useLocation();
	const currentPath = location.pathname;

	function isIncludedPath() {
		const inclusionPaths = ['/orders', '/list', '/add']
		const res = inclusionPaths.includes(currentPath);
		return res;
	}

	return (
		<div>
			<ToastContainer />
			{isLoginPopup ? <LoginPopup /> : undefined}
			<NavBar />
			{isLoggedIn && isIncludedPath() ? <hr /> : undefined}
			<main className='app-content'>
				{isLoggedIn && isIncludedPath() ? <SideBar /> : undefined}
				<Routes>
					{isLoggedIn ? (
						<>
							<Route
								path='/add'
								element={
									<AuthRouteGaurd isLoggedIn={isLoggedIn}>
										<Add />
									</AuthRouteGaurd>
								}
							/>
							<Route
								path='/list'
								element={
									<AuthRouteGaurd isLoggedIn={isLoggedIn}>
										<List />
									</AuthRouteGaurd>
								}
							/>

							<Route
								path='/orders'
								element={
									<AuthRouteGaurd isLoggedIn={isLoggedIn}>
										<Orders />
									</AuthRouteGaurd>
								}
							/>
						</>
					) : undefined}
					<Route path='/' element={<Home />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
