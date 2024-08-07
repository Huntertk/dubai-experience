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
      </div>
    </section>
  )
}

export default ManageDates