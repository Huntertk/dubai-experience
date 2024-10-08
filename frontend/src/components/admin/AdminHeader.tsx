import '../../styles/adminHeader.scss' 
import {BiAlignLeft} from 'react-icons/bi'
import { useAppSelector } from '../../redux/hook'
import { useLazyLogoutAdminQuery } from '../../redux/api/authApi'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

type TypeAdminHeaderProps = {
  toggleSidebarHandler:(value:boolean) => void
}
 
const AdminHeader = ({toggleSidebarHandler}:TypeAdminHeaderProps) => {
    const {adminEmail} = useAppSelector((state) => state.admin);
    const [logoutAdmin, {data}] = useLazyLogoutAdminQuery()
    const navigate = useNavigate();

    useEffect(() => {
      if(data){
        navigate(0);
      }

    }, [data])
  return (
    <div id='adminHeaderMainContainer'>
        <div className="adminHeaderWrapper">
            <BiAlignLeft className='alignLeft' onClick={() => toggleSidebarHandler(true)} />
            <h1>Dashboard</h1>
            <ul>
                <li className='adminEmail'>{adminEmail} </li>
                <li onClick={() => logoutAdmin({})}><IoLogOut /></li>
            </ul>
        </div>
    </div>
  )
}

export default AdminHeader