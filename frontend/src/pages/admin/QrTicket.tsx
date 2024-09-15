import { Link, useNavigate } from "react-router-dom"
import '../../styles/qrTicket.scss';
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAddTicketQrMutation } from "../../redux/api/qrApi";

const QrTicket = () => {
  const navigate = useNavigate();
  const [addTicketQr, {isLoading, data}] = useAddTicketQrMutation()
  const [qrFile, setQrFile] = useState<File | null>(null);

  const handleFileInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
        setQrFile(event.target.files[0])
    }
  }


  const uploadQr = async() => {
    if(qrFile){
      const formData:FormData = new FormData();
      
      formData.append('qrFile', qrFile);
      addTicketQr(formData)
    }
  }
  useEffect(() => {
    if(data){
        toast.success(data.message);
        navigate(0)
    }

  },[data])
  return (
    <div className="qr-booking-plan-main-container">
        <h1>Add New QR Codes</h1>
        <div className="btnContainer">
            <input 
            className="" 
            type="file" 
            name="qrFile" 
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  
            onChange={handleFileInputChange}
            />
            <button onClick={uploadQr} disabled={isLoading}>{isLoading ? "Uploading...." : "Upload QR"}</button>
        </div>
        <h1>View QR Codes</h1>
        <h3>Select Product</h3>
        <div className="btnContainer">
        <Link to="/admin/qr-code/view/dubai-frame">Dubai Frame</Link>
        <Link to="/admin/qr-code/view/lost-chambers">Lost Chambers</Link>
        <Link to="/admin/qr-code/view/aya-universe">Aya Universe</Link>
        <Link to="/admin/qr-code/view/green-planet">Green Planet</Link>
      </div>
    </div>
  )
}

export default QrTicket