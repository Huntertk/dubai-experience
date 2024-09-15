import { useEffect, useState } from 'react'
import 'react-day-picker/dist/style.css';
import { format,differenceInCalendarDays } from 'date-fns';
import { DayPicker} from 'react-day-picker';
import '../../styles/manageDate.scss'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAddBlockedTimeSlotMutation, useDeleteBlockedTimeSlotMutation, useLazyGetBlockedTimeSlotQuery } from '../../redux/api/dateManageApi';
import { useGetTicketQuery } from '../../redux/api/ticketApi';
import '../../components/booking/day-picker.css'
import LoadingSpinner from '../../components/Loader';


const ServiceProductTimeslotModification = () => {
    const {service, id} = useParams();
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState<Date>();
    const {data:ticketData} = useGetTicketQuery({id, service});

    const [getBlockedTimeSlot, {data:blockedTimeSlotData, isLoading:blockedTimeSlotLoading}] = useLazyGetBlockedTimeSlotQuery();

    const [addBlockedTimeSlot, {data:addBlockTimeslotData, isLoading:addBlockTimeslotLoading}] = useAddBlockedTimeSlotMutation();

    const [deleteBlockedTimeSlot, {data:deleteBlockTimeslotData, isLoading:deleteBlockTimeslotLoading}] = useDeleteBlockedTimeSlotMutation();
    
    
      
      
      function isPastDate(date:Date) {
        return differenceInCalendarDays(date, new Date()) < 0;
      }

    
    useEffect(() => {
        if(selectedDate){
            getBlockedTimeSlot({
                date:selectedDate.toLocaleDateString(),
                ticketId:id
            })
        }

    },[selectedDate])

    useEffect(() => {
        if(addBlockTimeslotData){
            navigate(0)
        }
        if(deleteBlockTimeslotData){
            navigate(0)
        }

    }, [addBlockTimeslotData,deleteBlockTimeslotData])
        
    if(!service || !id){
    return <Navigate to="/" /> 
    }

    if(blockedTimeSlotLoading || addBlockTimeslotLoading){
    return <LoadingSpinner /> 
    } 

    

  return (
    <div className='mainDateManageContainer'>
        <h1>{ticketData && ticketData.title}<br /> Manage Timeslot</h1>
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
        {selectedDate && blockedTimeSlotData && blockedTimeSlotData.map((d, i) => {
          return <button key={i}
          onClick={() => deleteBlockedTimeSlot({
            date:selectedDate.toLocaleDateString(),
            service,
            ticketId:id,
            timeSlot:d
          })}
          disabled={deleteBlockTimeslotLoading}
          >{d} hrs</button>
        })}
        </div>
       </div>

       <div className="blockedDateContainer">
        <h1>
          All Timeslots
        </h1>
        <div className="">
        {selectedDate && [
          "8:00","8:30","9:00","9:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00", "13:30","14:00", "14:30","15:00","15:30","16:00","16:30", "17:00","17:30","18:00","18:30","19:00","19:30","20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
        ].map((d, i) => {
          return <button key={i}
          onClick={() => addBlockedTimeSlot({
            date:selectedDate.toLocaleDateString(),
            service,
            ticketId:id,
            timeSlot:d
          })}
          disabled={blockedTimeSlotData && blockedTimeSlotData.includes(`${d}`)}
          >{d} hrs</button>
        })}
        </div>
       </div>

       
    </div>
  )
}


export default ServiceProductTimeslotModification