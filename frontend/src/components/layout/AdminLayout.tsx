import { Outlet } from 'react-router-dom'
import '../../styles/adminLayout.scss'
import { useState } from 'react'
import AdminHeader from '../admin/AdminHeader'
import AdminSmallSidebar from '../admin/AdminSmallSidebar'
import AdminBigSidebar from '../admin/AdminBigSidebar'

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebarHandler = (value:boolean):void => {
    setIsSidebarOpen(value)
  }
  
  return (
    <>
        <AdminHeader toggleSidebarHandler={toggleSidebarHandler} />
        <div id='mainContainerWrapper'>
            <div className="sidebars">
              {
                isSidebarOpen && <AdminSmallSidebar toggleSidebarHandler={toggleSidebarHandler} />
              }
              <AdminBigSidebar />
            </div>
            <div className='mainContainerOutlet'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default AdminLayout