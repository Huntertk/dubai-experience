import { Link, useNavigate } from "react-router-dom"
import '../../styles/qrBookingPlan.scss';
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const QrBookingPlan = () => {
  const navigate = useNavigate()
  const [qrFile, setQrFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const uploadQr =  async() => {

    if(qrFile){
      setIsLoading(true)
      const formData = new FormData();
      formData.append('qrFile', qrFile);
      try {
        const response = await axios.patch('/api/v1/bookingplan/add-qr',formData);
  
        toast.success(response?.data?.message);
        setIsLoading(false)
        navigate(0)
      } catch (error) {
        setIsLoading(false)
        console.error(error);
      }
    }
  }
  return (
    <div className="qr-booking-plan-main-container">
        <h1>Add New QR Codes</h1>
        <div className="btnContainer">
            <input 
            className="" 
            type="file" 
            name="qrFile" 
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"  
            onChange={(e) => setQrFile(e.target.files[0])}
            />
            <button onClick={uploadQr} disabled={isLoading}>{isLoading ? "Uploading...." : "Upload QR"}</button>
        </div>
        <h1>View QR Codes</h1>
        <h3>Select Product</h3>
        <div className="btnContainer">
        <Link to="/admin/qr-code/view/dubai-frame">Dubai Frame</Link>
      </div>
    </div>
  )
}

export default QrBookingPlan