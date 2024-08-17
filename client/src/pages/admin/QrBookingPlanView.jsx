import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetQrDataQuery, useGetSingleBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import '../../styles/qrBookingPlanView.scss';

const QrBookingPlanView = () => {
    const {serviceName, id} = useParams();
    const [isUsedQr, setIsQrUsed] = useState(false)
    const navigate = useNavigate();
    const {data:qrData, isLoading:qrLoading, error:qrError} = useGetQrDataQuery({id, isUsedQr})
    const {data, isLoading, error} = useGetSingleBookingPlanDataQuery(
        {service: serviceName, id}
    );
    
    useEffect(() => {
        if(error){
            navigate("/admin/qr-code")
        }

    },[error])


    if(isLoading && qrLoading){
        return <LoadingSpinner />
    }
  return (
    <div className='qr-code-view-main-container'>
        <h1>All QR Codes</h1>
        <p>Result : {qrData?.qrCodes?.length}</p>
        <div className="qr-code-view-btn-container">
            <button className={isUsedQr === false ? "activeTab" : ""} onClick={() => setIsQrUsed(false)}>Available QR Codes</button>
            <button className={isUsedQr === true ? "activeTab" : ""} onClick={() => setIsQrUsed(true)}>Used QR Codes</button>
        </div>
        <div className="qr-code-view-container">
            <h2>{isUsedQr ? "Used" : "Available"} Qr Codes</h2>
            <div className="qr-code-view-card-container">
                {
                    qrData?.qrCodes?.length > 0 ? qrData?.qrCodes?.map((qr) => {
                        
                            return (
                                <div key={qr._id} className='qr-code-view-card'>
                                <p>Code : {qr.QrCode}</p>
                                <p>Type : {qr.Type}</p>
                                {
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
                                }
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

export default QrBookingPlanView