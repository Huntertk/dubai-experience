import { Link, useNavigate, useParams } from 'react-router-dom'
import '../..//styles/manageDatesContainer.scss'
import { useEffect } from 'react';
import LoadingSpinner from '../../components/Loader';
import { useGetServiceTicketQuery } from '../../redux/api/ticketApi';

const ServiceProductList = () => {
  const {service} = useParams();
  const navigate = useNavigate()

    const {data, isLoading, error} = useGetServiceTicketQuery({service});
    
  
  useEffect(() => {
    if(error){
      console.log(error);
      navigate("/admin/all-booking")
    }

  },[error])

  if(isLoading){
    return <LoadingSpinner />
  }

  return (
    <section className='manageDates'>
      <h1>{service && service.toUpperCase()}</h1>
      <div className="btnContainer">
        {
          data?.map((plan) => (
            <Link key={plan._id} to={`${plan._id}`}>{plan.title}</Link>
          ))
        }
      </div>
    </section>
  )
}

export default ServiceProductList