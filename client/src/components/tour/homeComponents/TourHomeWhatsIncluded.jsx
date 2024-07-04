import { BiSolidDollarCircle } from 'react-icons/bi';
import '../../../styles/HomeWhatsIncluded.scss'

const TourHomeWhatsIncluded = ({inclusionAndExclusion}) => {

  return (
    <section className='whatsincludedContainer'>
         <div className="cancellationSubContainer">
            <h1>Cancellation policy</h1>
            {
                inclusionAndExclusion.cancellationPolicy.map((d,i) => {
                    return <div className="content" key={i}>
                    <BiSolidDollarCircle  />
                    <p>{d}</p>
                </div>
                })
            }
        </div>
        <div className="whatsincludedSubContainer">
            <h1>Inclusions</h1>
            {
                inclusionAndExclusion.inclusion.map((d,i) => {

                   return  <ul key={i} className="content">
                        <li>{d}</li>
                    </ul>
                })
            }
        </div>
        <div className="whatsNotincludedSubContainer">
        <h1>Exclusions</h1>
        <div className="contentContainer">
        {
                inclusionAndExclusion.exclusion.map((d,i) => {

                   return <ul key={i} className="content">
                   <li>{d}</li>
               </ul>
                })
            }
           
        </div>
        </div>
    </section>
  )
}

export default TourHomeWhatsIncluded