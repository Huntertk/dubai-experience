import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/qrTicketView.scss';
import { useDeleteTicketQrMutation, useGetQrDataQuery } from '../../redux/api/qrApi';
import LoadingSpinner from '../../components/Loader';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import toast from 'react-hot-toast';

const QrTicketView = () => {
    const {id, service} = useParams();
    const [isUsedQr, setIsQrUsed] = useState<boolean>(false)
    const {data, isLoading} = useGetQrDataQuery({id,isUsedQr});
    const [deleteTicketQr, {data:deleteQrData, isLoading:deleteQrLoading, error:deleteQrError}] = useDeleteTicketQrMutation()
    const navigate = useNavigate();
    
    const handleDeleteFunction = (id:string) => {
        const isDelete = confirm("Are you sure to delete");
        if(isDelete){
            deleteTicketQr({id})
        }
    }
    

    useEffect(() => {
        if(deleteQrData){
            navigate(0);
        }
        if(deleteQrError){
            if ('data' in deleteQrError) {
              toast.error(`${deleteQrError.data}`);
            }
          }
    },[deleteQrData, deleteQrError])


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
                                {
                                    qr.isUsed === false && (
                                        <div className='qr-action-btn-container'>
                                            <FaEdit onClick={() => navigate(`/admin/qr-code/edit/${service}/${qr._id}`) } />
                                                {
                                                    deleteQrLoading ? <p>Loading...</p> :
                                                        <FaTrash  onClick={() => {
                                                            handleDeleteFunction(qr._id)
                                                            
                                                        }} />
                                                }
                                        </div>
                                    )
                                }
                                {
                                    qr.isUsed && (
                                        <>
                                            <p>Booking ID : #{qr.usedBy.bookingId}</p>
                                            <p>Order ID : #{qr.usedBy._id}</p>
                                            <p>Date For Booking : {qr.usedBy.bookingDateString}</p>
                                            <p>Ticket ID : {qr.usedBy.ticketId}</p>
                                            <p>Ticket Name : {qr.usedBy.ticketTitle}</p>
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

export default QrTicketView