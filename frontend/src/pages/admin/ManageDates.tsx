import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <h3>Select Product</h3>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/dubai-frame">Dubai Frame</Link>
        <Link to="/admin/manage-dates/aya-universe">Aya Universe</Link>
        <Link to="/admin/manage-dates/lost-chambers">Lost Chambers</Link>
        <Link to="/admin/manage-dates/green-planet">Green Planet</Link>
        <Link to="/admin/manage-dates/burj-khalifa">Burj Khalifa</Link>
        <Link to="/admin/manage-dates/madame-tussauds">Madame Tussauds</Link>
        <Link to="/admin/manage-dates/atlantis-aquaventure">Atlantis Aquaventure</Link>
        <Link to="/admin/manage-dates/dubai-sky-view">Dubai Sky View</Link>
        <Link to="/admin/manage-dates/dubai-ice-rink">Dubai Ice Rink</Link>
        <Link to="/admin/manage-dates/dubai-miracle-garden">Dubai Miracle Garden</Link>
        <Link to="/admin/manage-dates/dubai-aquarium-and-underwater-zoo">The Dubai Aquarium and Underwater Zoo</Link>
      </div>
    </section>
  )
}

export default ManageDates