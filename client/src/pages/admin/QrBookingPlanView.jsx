import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetQrDataQuery, useGetSingleBookingPlanDataQuery } from '../../redux/api/bookingPlanApi';
import LoadingSpinner from '../../components/LoadingSpinner';
import '../../styles/qrBookingPlanView.scss';

const QrBookingPlanView = () => {
    const {serviceName, id} = useParams();
    const navigate = useNavigate();
    const {data:qrData, isLoading:qrLoading, error:qrError} = useGetQrDataQuery({id})
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
        <div className="qr-code-view-container">
            <h2>Available Qr Codes</h2>
            <div className="qr-code-view-card-container">
                {
                    qrData?.qrCodes?.length > 0 ? qrData?.qrCodes?.map((qr) => {
                        
                           if(!qr.isUsed){
                            return (
                                <div key={qr._id} className='qr-code-view-card'>
                                <p>Code : {qr.QrCode}</p>
                                <p>Type : {qr.Type}</p>
                                {/* <div>
                                    <QRCode
                                        size={256}
                                        style={{ height: "100px", maxWidth: "100px", width: "100%" }}
                                        value={`${qr.QrCode}`}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div> */}
                            </div>
                            )
                           } 
                        
                    } 
                        
                        
                    ) : <h3>Qr Code Not Available </h3>
                }
            </div>
        </div>

        <div className="qr-code-view-container">
            <h2>Used Qr Codes</h2>
            <div className="qr-code-view-card-container">
                {
                     qrData?.qrCodes?.length > 0 ? qrData?.qrCodes?.map((qr) => {
                        
                           if(qr.isUsed){
                            return (
                                <div key={qr._id} className='qr-code-view-card'>
                                <p>Code : {qr.QrCode}</p>
                                <p>Type : {qr.Type}</p>
                                <p>Booking ID : #{qr.usedBy.bookingId}</p>
                                <p>Order ID : #{qr.usedBy._id}</p>
                                <p>Date For Booking : {qr.usedBy.bookingDateString}</p>
                                <p>Tour ID : {qr.usedBy.bookingPlanId}</p>
                                <p>Tour Name : {qr.usedBy.bookingTitle}</p>
                                <p>Guest Name : {qr.usedBy.name}</p>
                                <p>Guest Email : {qr.usedBy.email}</p>
                                <p>QR Generated : {qr.usedBy.isQrGenerated ? "Yes" : "No"}</p>
                            
                                {/* <div>
                                    <QRCode
                                        size={256}
                                        style={{ height: "100px", maxWidth: "100px", width: "100%" }}
                                        value={`${qr.QrCode}`}
                                        viewBox={`0 0 256 256`}
                                    />
                                </div> */}
                            </div>
                            )
                           } 
                        
                    } 
                        
                        
                    ) : <h3>Qr Code Not Available </h3>
                }
            </div>
        </div>
    </div>
  )
}

export default QrBookingPlanView