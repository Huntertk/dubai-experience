import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageTimeSlot = () => {
  return (
    <section className='manageDates'>
      <h1>Manages TimeSlot</h1>
      <h3>Select Product</h3>
      <div className="btnContainer">
        <Link to="/admin/manage-timeslot/burj-khalifa">Burj Khalifa</Link>
      </div>
    </section>
  )
}

export default ManageTimeSlot