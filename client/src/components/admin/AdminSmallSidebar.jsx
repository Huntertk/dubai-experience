import '../../styles/adminSmallSidebar.scss'
import { NavLink } from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { adminSidebarClose } from '../../redux/features/adminSlice'
import {RiAdminFill} from 'react-icons/ri'
import {VscGraph} from 'react-icons/vsc'
import { BsQrCode } from "react-icons/bs";
import { IoCalendarNumberOutline } from 'react-icons/io5'

const AdminSmallSidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className='smallSidebarWrapper'>
      <div className="smallSidebarContainer">
        <h1>Dashboard <RiAdminFill /></h1>
        <ImCross className='crossIcon' onClick={() => dispatch(adminSidebarClose())} />
          <NavLink 
          to="/admin/all-booking"
          onClick={() => dispatch(adminSidebarClose())}
          ><VscGraph /> All Booking</NavLink>

          <NavLink to="/admin/manage-dates"
           onClick={() => dispatch(adminSidebarClose())}
          ><IoCalendarNumberOutline /> Manages Dates</NavLink>

          <NavLink to="/admin/qr-code"
          onClick={() => dispatch(adminSidebarClose())}
          ><BsQrCode />Qr Codes</NavLink>
      </div>
    </div>
  )
}

export default AdminSmallSidebar