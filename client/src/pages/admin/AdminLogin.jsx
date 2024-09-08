import React, { useEffect, useState } from 'react'
import '../../styles/adminLogin.scss'
import bgImg from '../../assets/images/adminLogin.jpg';
import {useSelector, useDispatch} from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import {useAdminLoginMutation} from '../../redux/api/adminAuthApi'

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {adminEmail} = useSelector(state => state.admin);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [adminLogin, {isLoading, error}] = useAdminLoginMutation();
      const handleAdminLogin = async (e) => {
       e.preventDefault()
        adminLogin({email, password})
    }

    useEffect(() => {
      if(adminEmail){
        navigate("/admin/all-booking")
      }
      if(error){
        toast.error(error?.data?.msg);
      }
    }, [adminEmail, error])

  return (
    <main className='mainContainer' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="loginFormWrapper">
            <form onSubmit={handleAdminLogin}>
                <h1>Admin Login</h1>
                <input 
                type="email" 
                placeholder='Email' 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='Password' 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' disabled={isLoading}>{isLoading ? "Loading...." : "login"}</button>
            </form>
        </div>
    </main>
  )
}

export default AdminLogin