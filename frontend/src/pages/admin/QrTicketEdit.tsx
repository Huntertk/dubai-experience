import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleQrQuery, useUpdateTicketQrMutation } from "../../redux/api/qrApi"
import LoadingSpinner from "../../components/Loader";
import React, { useEffect, useState } from "react";
import { useGetTicketTitleAndServiceQuery } from "../../redux/api/ticketApi";
import '../../styles/qrEditTicket.scss';
import toast from "react-hot-toast";

const QrTicketEdit = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [QrCode, setQrCode] = useState<string>("");
    const [Type, setType] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const {data:titleAndServiceData, isLoading:titleAndServiceLoading} = useGetTicketTitleAndServiceQuery({});
    const {data:singleQrData, isLoading:singleQrLoading} = useGetSingleQrQuery({id})
    const [updateTicketQr, {data:updateQrData, isLoading:updateQrLoading, error:updateQrError}] = useUpdateTicketQrMutation()

    const handleQrEdit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!QrCode || !title || !Type){
            return toast.error("Please enter all values")
        }
        updateTicketQr({QrCode, title, Type, id})
    }

    const updatingQrState = ({qrCode, type, title}:{qrCode:string; type:string; title:string;}) => {
        setQrCode(qrCode);
        setType(type);
        setTitle(title);
    }

    useEffect(() => {
        if(singleQrData){
            updatingQrState({qrCode: singleQrData.QrCode, title: singleQrData.title, type: singleQrData.Type});
        }
        if(updateQrData){
            navigate(0)
        }
        if(updateQrError){
            if ('data' in updateQrError) {
                toast.error(`${updateQrError.data}`);
            }
              
        }

    },[singleQrData, updateQrData, updateQrError])

    if(singleQrLoading || titleAndServiceLoading){
        return <LoadingSpinner />
    }
    
  return (
    <form className="upload-qr-direct-main-container" onSubmit={handleQrEdit}>
        <h2>Update Qr Details</h2>
        <input 
        type="text"
        placeholder="Enter QR Code"
        value={QrCode}
        required
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setQrCode(e.target.value)} 
        
        />
        <select
        name="title"
        value={title}
        required
        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setTitle(e.target.value)}
        >
        <option value={""}>Select Ticket Name</option>
        {
            titleAndServiceData && titleAndServiceData[0].ticketTitle.map((title) => (
            <option key={title} value={`${title}`}>{title}</option>
            ))

        }
        </select>
        <select
        name="Type"
        value={Type}
        required
        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}
        >
        <option value="">Select Type</option>
        <option value="Adult">Adult</option>
        <option value="Child">Child</option>
        </select>
        <button type="submit" disabled={updateQrLoading}>{updateQrLoading ? "Processing..." :"Update"}</button>
    </form>
  )
}

export default QrTicketEdit