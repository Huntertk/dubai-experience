import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-day-picker/dist/style.css';
import { format,differenceInCalendarDays } from 'date-fns';
import { DayPicker, Row } from 'react-day-picker';
import toast from 'react-hot-toast'
import '../../styles/manageDate.scss'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useGetSingleBookingPlanDataQuery } from '../..//redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';

const ServiceProductTimeslotModification = () => {
  const {serviceName, id} = useParams();
  const navigate = useNavigate();

  
  const {data, isLoading:loading, error, isSuccess} = useGetSingleBookingPlanDataQuery(
    {service: serviceName, id}
  );
  const [isLoading, setIsLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState("")
    const [isFetch, setIsFetch] = useState(false)
    const [timeSlot, setTimeSlot] = useState("")
    const [blockedTimeSlots, setBlockedTimeSlot] = useState([])
    
    
      const dateToString = selectedDate && new Date(selectedDate).toISOString().split('T')[0];
      
      
      function isPastDate(date) {
        return differenceInCalendarDays(date, new Date()) < 0;
      }

    
      
      const addBlockeTimeSlot = async (ts) => {
            try {
            setTimeSlot(ts)
            
            setIsLoading(true)
            const response = await axios.post('/api/v1/dates-manage/block-dates/block-time-slot', {
                date: dateToString,
                timeSlot:ts,
                service:data.bookingPlan.service,
                bookingPlanId: data.bookingPlan._id
            })
            toast.success("Date Blocked Successfully")
            setIsFetch(prev => !prev)
            setSelectedDate("")
            setIsLoading(false)
          } catch (error) {
            console.log(error);
          }
        }
        
        const getBlockDates = async () => {
          try {
            const {data} = await axios.get(`/api/v1/dates-manage/block-dates/get-blocked-date-time-slot?date=${dateToString}&bookingPlanId=${id}`)
            setBlockedTimeSlot(data)
          } catch (error) {
            console.log(error);
          }
        }
        
        const removeBlockedDate = async (timeslot) => {
          try {
            setIsLoading(true)
            const res = await axios.post(`/api/v1/dates-manage/block-dates/delete-blocked-date-time-slot`, {
                date:dateToString,
                bookingPlanId:id,
                timeSlot:timeslot

            })
            setIsFetch(prev => !prev)
            setIsLoading(false)
          } catch (error) {
            console.log(error);
          }
        }
        useEffect(() => {
          if(error){
            console.log(error);
            navigate("/")
          }
          if(selectedDate){
              getBlockDates()
          }
      },[selectedDate, isFetch, error])
    
      if(loading){
        return <LoadingSpinner />
      }
        
      if(!serviceName || !id){
        return <Navigate to="/" /> 
      } 
    

  return (
    <div className='mainDateManageContainer'>
        <h1>{data.bookingPlan.title}<br /> Manage Timeslot</h1>
        <DayPicker
                defaultMonth={new Date(Date.now())}
                mode="single"
                selected={selectedDate} 
                fromDate={new Date()}
                hidden={isPastDate}
                onSelect={setSelectedDate}
            />

        {selectedDate && <p>You selected { selectedDate && format(selectedDate, 'PPP')} </p>}    

    <div className="blockedDateContainer">
        <h1>
          Blocked Timeslots
        </h1>
        <div className="">
        {selectedDate && blockedTimeSlots.map((d, i) => {
          return <button key={i}
          onClick={() => removeBlockedDate(d)}
          disabled={isLoading}
          >{d}:00 hrs</button>
        })}
        </div>
       </div>

       <div className="blockedDateContainer">
        <h1>
          All Timeslots
        </h1>
        <div className="">
        {selectedDate && [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map((d, i) => {
          return <button key={i}
          onClick={() => addBlockeTimeSlot(i+1)}
          disabled={isLoading || blockedTimeSlots.includes(`${i+1}`)}
          >{i+1}:00 hrs</button>
        })}
        </div>
       </div>

       
    </div>
  )
}


export default ServiceProductTimeslotModification