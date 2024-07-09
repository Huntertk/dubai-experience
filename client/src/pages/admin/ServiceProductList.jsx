import { Link, useNavigate, useParams } from 'react-router-dom'
import '../..//styles/manageDatesContainer.scss'
import { useGetBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import { useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

const ServiceProductList = () => {
  const {serviceName} = useParams();
  const navigate = useNavigate()


  const {data, isLoading, error, isSuccess} = useGetBookingPlanDataQuery({service:serviceName});
  useEffect(() => {
    if(error){
      console.log(error);
      navigate("/admin/manage-dates")
    }

  },[error])

  if(isLoading){
    return <LoadingSpinner />
  }

  return (
    <section className='manageDates'>
      <h1>{serviceName.toUpperCase()}</h1>
      <div className="btnContainer">
        {
          data?.bookingPlan.map((plan) => (
            <Link key={plan.uid} to={`/admin/manage-dates/${serviceName}/${plan._id}`}>{plan.title}</Link>
          ))
        }
      </div>
    </section>
  )
}

export default ServiceProductList