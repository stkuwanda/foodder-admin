import NavBar from '../../components/NavBar/NavBar.component';
import './NotFound.page.css';

function NotFound() {
  return (
    <main className='home'>
      <NavBar />
			<section className='h-text'>
        <h1>Error 404! Page not found.</h1>
      </section>
		</main>
  )
}

export default NotFound;
