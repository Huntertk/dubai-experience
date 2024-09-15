import { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { format,differenceInCalendarDays } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import '../../components/booking/day-picker.css';
import '../../styles/manageDate.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useAddBlockDateMutation, useDeleteBlockDateMutation, useGetBlockedDateQuery } from '../../redux/api/dateManageApi';
import LoadingSpinner from '../../components/Loader';
import { useGetTicketQuery } from '../../redux/api/ticketApi';

type TypeDisabledDates = {
    blockedDate:string;
    _id:string
}

const ServiceProductDateModification = () => {
    const {service, id} = useParams();
    const [selectedDate, setSelectedDate] = useState<Date>()
    const [disabledDatesArr, setDisabledDatesArr] = useState<Date[]>([])
    const [disabledDates, setDisabledDates] = useState<TypeDisabledDates[]>([])
    const navigate = useNavigate();
    const {data:ticketData} = useGetTicketQuery({id, service});
    const {data, isLoading} = useGetBlockedDateQuery({service, ticketId:id});
  
    const [addBlockDate, {isLoading:addBlockDateLoading, data:addBlockDateData}] = useAddBlockDateMutation()
    const [deleteBlockDate, {isLoading:deleteBlockDateLoading, data:deleteBlockDateData}] = useDeleteBlockDateMutation();
    
    const handleDeleteBlockDate = async (id:string) => {
      deleteBlockDate({
        id
      })
    }

    const handleAddBlockDate = async () => {
      if(selectedDate){
        addBlockDate({
          blockedDate:selectedDate.toLocaleDateString(),
          service,
          ticketId:id
        })
      }
    }


    const formatDate = () => {
        if(data){
            const disabledDates = data.map((date) => new Date(date.blockedDate))
            const disabledDatesWithFormat:TypeDisabledDates[] = data.map((date) => ({
              _id:date._id,
              blockedDate:date.blockedDate
            }))
            setDisabledDatesArr(disabledDates)
            setDisabledDates(disabledDatesWithFormat)
        }
    }

    //Hiding Past Dates from Calender
    function isPastDate(date:Date) {
        return differenceInCalendarDays(date, new Date()) < 0;
    }
    
       const defaultMonth = new Date(Date.now());

       useEffect(() => {
        if(data){
            formatDate()
        }
        if(addBlockDateData){
          navigate(0);
        }
        if(deleteBlockDateData){
          navigate(0);
        }
    },[ data, addBlockDateData, deleteBlockDateData]) 

    if(isLoading){
      return <LoadingSpinner />
    }
  return (
    <div className='mainDateManageContainer'>
        <h1>{ticketData && ticketData.title}<br /> Date Manage</h1>
        <DayPicker
            defaultMonth={defaultMonth}
            mode="single"
            selected={selectedDate} 
            fromDate={new Date()}
            hidden={isPastDate}
            disabled={disabledDatesArr}
            onSelect={setSelectedDate}
        />

        {selectedDate && <p>You selected { selectedDate && format(selectedDate, 'PPP')} </p>}    

       {selectedDate && <button className='btn' 
       onClick={handleAddBlockDate}
       disabled={addBlockDateLoading}
       >Block Dates</button>}

       <div className="blockedDateContainer">
        <h1>
          Blocked Dates
        </h1>
        <div className="">
        {disabledDates.map((d, i) => {
          return <button key={i}
          disabled={deleteBlockDateLoading}
          onClick={() => handleDeleteBlockDate(d._id)}
          >{format(d.blockedDate, 'PP')} Remove</button>
        })}
        </div>
       </div>
    </div>
  )
}

export default ServiceProductDateModification