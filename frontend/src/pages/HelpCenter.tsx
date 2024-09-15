import TourHomeFaq from "../components/TourHomeComponents/TourHomeFaq"
import { helpCenterBookingFAQ, helpCenterCancellationFAQ } from "../data"
import '../styles/helpCenter.scss';

const HelpCenter = () => {
  return (
    <section className='homeFAQMainContainer'>
        <h1>Frequently Asked Questions</h1>
        <div className="questionMainContainer">
            <TourHomeFaq quesData={helpCenterBookingFAQ} title="Bookings" />
        </div>

        <div className="questionMainContainer">
          <TourHomeFaq quesData={helpCenterCancellationFAQ} title="Cancellation/Refund" />
        </div>
    </section>
  )
}

export default HelpCenter