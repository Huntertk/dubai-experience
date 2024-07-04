import {Outlet} from 'react-router-dom';
import TourFooter from '../TourFooter';
import TourHeader from '../TourHeader';

const TourLayout = () => {
  return (
    <>
        <header>
            <TourHeader />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <TourFooter />
        </footer>
    </>
  )
}

export default TourLayout