import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/NavBar/NavBar.component';
import SideBar from './components/SideBar/SideBar.component';
import Add from './pages/Add/Add.page';
import List from './pages/List/List.page';
import Orders from './pages/Orders/Orders.page';
import './App.css';

function App() {
	return (
		<div>
			<ToastContainer />
			<NavBar />
			<hr />
			<main className='app-content'>
        <SideBar />
				<Routes>
					<Route path='/add' element={<Add />} />
					<Route path='/list' element={<List />} />
					<Route path='/orders' element={<Orders />} />
				</Routes>
      </main>
		</div>
	);
}

export default App;
