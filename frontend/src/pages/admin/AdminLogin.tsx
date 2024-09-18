import React, { useEffect, useState } from 'react'
import '../../styles/adminLogin.scss'
import bgImg from '../../assets/images/adminLogin.jpg';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../redux/api/authApi';

const AdminLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const [login, {data, error, isLoading}] = useLoginMutation()

      const handleAdminLogin = async (e:React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       login({email, password})
    }

    useEffect(() => {
      if(data){
        navigate("/admin/all-booking")
      }
      if(error){
        if ('data' in error) {
            toast.error(JSON.stringify(error.data));
        }
      }
      
    }, [data, error])

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