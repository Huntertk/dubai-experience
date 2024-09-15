import { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../styles/qrTicketView.scss';
import { useGetQrDataQuery } from '../../redux/api/qrApi';
import LoadingSpinner from '../../components/Loader';

const QrTicketView = () => {
    const {id} = useParams();
    const [isUsedQr, setIsQrUsed] = useState(false)
    const {data, isLoading} = useGetQrDataQuery({id,isUsedQr});

    if(isLoading){
        return <LoadingSpinner />
    }
  return (
    <div className='qr-code-view-main-container'>
        <h1>All QR Codes</h1>
        
        <p>Total Result : {data?.length}</p>
        <p>Total Adult : {data?.filter((val) => val.Type === 'Adult').length}</p>
        <p>Total Child : {data?.filter((val) => val.Type === 'Child').length}</p>

        <div className="qr-code-view-btn-container">
            <button className={isUsedQr === false ? "activeTab" : ""} onClick={() => setIsQrUsed(false)}>Available QR Codes</button>
            <button className={isUsedQr === true ? "activeTab" : ""} onClick={() => setIsQrUsed(true)}>Used QR Codes</button>
        </div>
        <div className="qr-code-view-container">
            <h2>{isUsedQr ? "Used" : "Available"} Qr Codes</h2>
            <div className="qr-code-view-card-container">
                {
                    data && data.length > 0 ? data.map((qr) => {
                        
                            return (
                                <div key={qr._id} className='qr-code-view-card'>
                                <p>Code : {qr.QrCode}</p>
                                <p>Type : {qr.Type}</p>
                                {/* {
                                    qr.isUsed && (
                                        <>
                                            <p>Booking ID : #{qr.usedBy.bookingId}</p>
                                            <p>Order ID : #{qr.usedBy._id}</p>
                                            <p>Date For Booking : {qr.usedBy.bookingDateString}</p>
                                            <p>Tour ID : {qr.usedBy.bookingPlanId}</p>
                                            <p>Tour Name : {qr.usedBy.bookingTitle}</p>
                                            <p>Guest Name : {qr.usedBy.name}</p>
                                            <p>Guest Email : {qr.usedBy.email}</p>
                                            <p>QR Generated : {qr.usedBy.isQrGenerated ? "Yes" : "No"}</p>
                                        </>
                                    )
                                } */}
                            </div>
                            )
                           
                        
                    } 
                        
                        
                    ) : <h3>Qr Code Not Available </h3>
                }
            </div>
        </div>
    </div>
  )
}

export default QrTicketView