import {  selectingPreference } from '../../redux/feature/bookingSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { TypePreferenceOption } from '../../redux/type';
import '../../styles/preferenceTour.scss'
import {  TypeTicketPricing } from '../../utils/type';


type TypeTourPreference = {
    pricing:TypeTicketPricing[];
    selectedDate:Date;
    preferenceOption:TypePreferenceOption[]
}
type TypeTourPreferenceCardData = {
    selectedDate:Date;
    cardData:TypePreferenceOption;
    pricing:TypeTicketPricing[];
    index:number;
}


const CardData = ({cardData, pricing, index, selectedDate}:TypeTourPreferenceCardData) => {
    const dispatch = useAppDispatch();
   const {preference} = useAppSelector((state) => state.booking)
    
   const day = selectedDate.toString().split(' ')[0]

    let price:number;
    if(day === 'Fri' || day === 'Sat' || day === 'Sun'){
        price = pricing[index].weekEnds.adult;
    } else {
        price = pricing[index].weekDays.adult
    }

    return (
        <div className="prefrenceTabCard">
        <h1>{cardData.title}</h1>
        <div className="content">
             <p>AED {price}</p>
            
            <button onClick={() => {
                dispatch(
                    selectingPreference(
                        {
                            preference:cardData.title,
                            preferenceIndex:index
                        }
                    )
                )
            }}>{preference === cardData.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                cardData.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}


const PreferenceTour = ({pricing, preferenceOption, selectedDate}:TypeTourPreference) => {
    
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer"
        style={{
            gridTemplateColumns:`repeat(${preferenceOption.length}, 300px)`
        }}
        >
            {
                preferenceOption.map((d, index) => (
                    <CardData 
                    key={index} 
                    cardData={d} 
                    pricing={pricing} 
                    selectedDate={selectedDate} 
                    index={index}
                    />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour