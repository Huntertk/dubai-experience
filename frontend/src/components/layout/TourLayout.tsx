import {Outlet} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

const TourLayout = () => {
  return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default TourLayout