import { useEffect, useRef } from "react";

type TypeDateBtnContainerProps = {
    handleSelectDate:(date:Date) => void
    handleCalenderOpen:() => void
    selectedDate?:Date
    calenderOpen:boolean
    disabledDates:Date[]
}


const DateBtnContainer = ({
        handleSelectDate,
        handleCalenderOpen,
        selectedDate,
        calenderOpen, 
        disabledDates
    }:TypeDateBtnContainerProps
) => {
    const btnRef = useRef<HTMLButtonElement | null>(null)

    const disabledBtnToDate = (btnDate:number) => {
        const settingHourToZero = disabledDates.map(d => d.setHours(0,0,0,0))
        const findingDate = settingHourToZero.find(d => d === new Date(Date.now() + btnDate).setHours(0,0,0,0))

        if(findingDate){
            return true
        } else {
            return false
        }
    }

    function getDayName(date:Date):string {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
    }

    const focusBtn = () => {
        if(btnRef.current){
            btnRef.current.focus()
        }
    }
    useEffect(() => {
        focusBtn()
    },[])
    return (
        <div className="dateBtnContainer">
            <button className={selectedDate?.toString().slice(0,15) == new Date(Date.now() + 1000 *60 *60 *24).toString().slice(0,15)  ? "active" : ""}
            onClick={() => handleSelectDate(new Date(Date.now() + 1000 *60 *60 *24 ))}
            disabled={disabledBtnToDate(1000 *60 *60 *24)}
            >
             <span>
                 {new Date(Date.now() + 1000 *60 *60 *24).getDate()}
             </span>
             <span>
                 {getDayName(new Date(Date.now() + 1000 *60 *60 *24))}
             </span>
            </button>
        
           <button 
           className={selectedDate?.toString().toString().slice(0,15) == new Date(Date.now() + 1000*60*60*24*2).toString().slice(0,15)  ? "active" : ""}
           onClick={() => handleSelectDate(new Date(Date.now() + 1000*60*60*24*2))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*2)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *2 ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 *24 * 2))}
            </span>
            </button>
           <button  
            className={selectedDate?.toString().toString().slice(0,15) == new Date(Date.now() + 1000*60*60*24 * 3).toString().slice(0,15)  ? "active" : ""}
           onClick={() => handleSelectDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*3)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *3  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 3))}
            </span>
            </button>
           <button 
            className={selectedDate?.toString().toString().slice(0,15) == new Date(Date.now() + 1000*60*60*24 *4).toString().slice(0,15)  ? "active" : ""}
           onClick={() => handleSelectDate(new Date(Date.now() + 1000*60*60*24 * 4))}
           disabled={disabledBtnToDate(1000 *60 *60 *24*4)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *4  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 4))}
            </span>
            </button> 
           <button 
           ref={btnRef} 
           className={calenderOpen ? "moreDates active" : "moreDates"} 
           onClick={handleCalenderOpen}
           >More Dates</button>
        </div>
    )
}

export default DateBtnContainer