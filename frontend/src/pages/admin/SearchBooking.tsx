import React, { useState } from 'react';
import { useLazySearchBookingQuery } from '../../redux/api/bookingApi';
import '../../styles/searchBooking.scss';
import BookingCard from '../../components/admin/BookingCard';
import toast from 'react-hot-toast';

const SearchBooking = () => {
  const [search, setSearch] = useState<string>("");

  const [searchBooking, {data, isLoading}] = useLazySearchBookingQuery();

  const handleSubmit = async (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!search){
      toast.error("Please enter email to find bookings")
      return
    }
    searchBooking({search})
    setSearch("")
  }

  return (
    <section className="searchBooking">
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Email...'  
        value={search}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value) }
        />
        <button type="submit" disabled={isLoading}>{isLoading ? "Searching..." : "Search"}</button>
      </form>
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
    </section>
  )
}

export default SearchBooking