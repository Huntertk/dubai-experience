import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <h3>Select Product</h3>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/splash-mania">Splash Mania</Link>
        <Link to="/admin/manage-dates/aras-resturant">Aras Resturant</Link>
        <Link to="/admin/manage-dates/sunway-lagoon">Sunway Lagoon</Link>
      </div>
    </section>
  )
}

export default ManageDates