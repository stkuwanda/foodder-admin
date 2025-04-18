import React from 'react';
import NavBar from './components/NavBar/NavBar.component';
import SideBar from './components/SideBar/SideBar.component';

function App() {
	return (
		<div>
			<NavBar />
			<hr />
			<main className='app-content'>
        <SideBar />
      </main>
		</div>
	);
}

export default App;
