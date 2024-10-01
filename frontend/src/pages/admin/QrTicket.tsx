import { Link, useNavigate } from "react-router-dom"
import '../../styles/qrTicket.scss';
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAddTicketQrMutation, useCreateTicketQrMutation } from "../../redux/api/qrApi";
import { useGetTicketTitleAndServiceQuery } from "../../redux/api/ticketApi";
import LoadingSpinner from "../../components/Loader";

const QrTicket = () => {
  const [toggleUploadTab, setToggleUploadTab] = useState<boolean>(true);
  const [QrCode, setQrCode] = useState<string>("")
  const [Type, setType] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const navigate = useNavigate();
  const [addTicketQr, {isLoading, data}] = useAddTicketQrMutation()
  const [qrFile, setQrFile] = useState<File | null>(null);
  const {data:titleAndServiceData, isLoading:titleAndServiceLoading} = useGetTicketTitleAndServiceQuery({});
  const [createTicketQr, {isLoading:createQrLoading, data:createQrData}] = useCreateTicketQrMutation()
  

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

  const handleQRFormSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!QrCode || !title || !Type){
      return alert("Please Enter All Values")
    }
    createTicketQr({QrCode,title,Type})
    
  }

  useEffect(() => {
    if(data){
        toast.success(data.message);
        navigate(0)
      }
      if(createQrData){
        toast.success(createQrData.message);
        navigate(0)
    }

  },[data, createQrData])

  if(titleAndServiceLoading){
    return <LoadingSpinner />
  }
  return (
    <div className="qr-booking-plan-main-container">
        <h1>{toggleUploadTab ? "Add New QR Code" : "Upload Qr With Excel"}</h1>
        <div className="toggle-button-container">
          <button className={`${toggleUploadTab ? "activeTab" : ""}`}
          onClick={() => setToggleUploadTab(true)}
          >Upload Direct</button>
          <button className={`${toggleUploadTab ? "" : "activeTab"}`}
          onClick={() => setToggleUploadTab(false)}
          >Upload With Excel</button>
        </div>
        {
          toggleUploadTab ? (
            <form className="upload-qr-direct-main-container" onSubmit={handleQRFormSubmit}>
              <h2>Enter Qr Details</h2>
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
              <button type="submit" disabled={createQrLoading}>{createQrLoading ? "Processing..." :"Submit"}</button>
            </form>
          ) : (
            
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
          )
        }
        <div className="btnContainer">
        <h2>View QR Codes</h2>
        <h3>Select Product</h3>
        <Link to="/admin/qr-code/view/dubai-frame">Dubai Frame</Link>
        <Link to="/admin/qr-code/view/lost-chambers">Lost Chambers</Link>
        <Link to="/admin/qr-code/view/aya-universe">Aya Universe</Link>
        <Link to="/admin/qr-code/view/green-planet">Green Planet</Link>
        <Link to="/admin/qr-code/view/madame-tussauds">Madame Tussauds</Link>
        <Link to="/admin/qr-code/view/atlantis-aquaventure">Atlantis Aquaventure</Link>
        <Link to="/admin/qr-code/view/dubai-aquarium-and-underwater-zoo">The Dubai Aquarium and Underwater Zoo</Link>
      </div>
    </div>
  )
}

export default QrTicket