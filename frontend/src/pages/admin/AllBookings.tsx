import { useState } from 'react'
import '../../styles/allBookings.scss'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../../components/Loader';
import { useGetAllBookingQuery } from '../../redux/api/bookingApi';
import { TypeAdminAllBookingsQueryArgs } from '../../redux/type';
import BookingCard from '../../components/admin/BookingCard';
import CustomPagination from '../../components/admin/CustomPagination';


const AllBookings = () => {
  const [tabSection, setTabSection] = useState<string>("confirmed");
  const [option, setOption] = useState<string>("")
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || 1; 
  const service = option;
  const params:TypeAdminAllBookingsQueryArgs = {
    page,
    service,
    bookingStatus: tabSection
  }
  const {data, isLoading} = useGetAllBookingQuery(params);



  if(isLoading) {
    return <LoadingSpinner />
  }


  return (
    <>
      <div className='allBookingsMainContainer'>
        <h1>Available Services</h1>
          <p>Result : {data?.bookings.length}</p>

          <select className='serviceSelect' name="service" id="" onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setOption(e.target.value)}>
                <option value="">All Products</option>
                <option value={"aya-universe"}>Aya Universe</option>
                <option value={"dubai-frame"}>Dubai Frame</option>
                <option value={"lost-chambers"}>Lost Chambers</option>
                <option value={"burj-khalifa"}>Burj Khalifa</option>
                <option value={"green-planet"}>Green Planet</option>
                <option value={"madame-tussauds"}>Madame Tussauds</option>
                <option value={"atlantis-aquaventure"}>Atlantis Aquaventure</option>
                <option value={"dubai-sky-view"}>Dubai Sky View</option>
                <option value={"dubai-ice-rink"}>Dubai Ice Rink</option>
                <option value={"dubai-aquarium-and-underwater-zoo"}>The Dubai Aquarium and Underwater Zoo</option>
          </select>
          <div className="bookingFilterTabContainer">
            <button 
            onClick={() => setTabSection("confirmed")}
            className={tabSection === 'confirmed' ? 'activeTab' : ''}>Confirmed</button>
            <button 
            onClick={() => setTabSection("payment not verified")}
            className={tabSection === 'payment not verified' ? 'activeTab' : ''}>Payment Not Verified</button>
            <button 
            onClick={() => setTabSection("cancelled")}
            className={tabSection === 'cancelled' ? 'activeTab' : ''}>Cancelled</button>
            <button 
            onClick={() => setTabSection("completed")}
            className={tabSection === 'completed' ? 'activeTab' : ''}>Completed</button>
            <button 
            onClick={() => setTabSection("pending")}
            className={tabSection === 'pending' ? 'activeTab' : ''}>Pending</button>
          </div>
        </div>
        {
          data && data.bookings.length >= 1 ? (
            <div className="allBookingsContainer">
            {
              data.bookings.map((booking,index) => {
                return <BookingCard key={booking._id} booking={booking} index={index} />
              })
            }
            </div>
          ) : (
            <h1>No Booking Found</h1>
          )
        }
        
        <div className="paginationMainContainer">
          {
            data && 
            <CustomPagination page={page} totalPage={data.totalPage} />
          }
          </div>
        </>
  )
}

export default AllBookings