import {Navigate, Outlet} from 'react-router-dom'
import { useGetAdminDataQuery } from '../../redux/api/authApi'
import LoadingSpinner from '../Loader'

const AdminProtectedRoute = () => {
  const {data, isLoading} = useGetAdminDataQuery({})

  if(isLoading){
    return <LoadingSpinner />
  }

  return data ? <Outlet /> : <Navigate to="/" />
}

export default AdminProtectedRoute