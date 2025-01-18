import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Location } from "./loc"
import { Register } from "./register"
import Device from "./device"; 
import OTP from "./ot";

const Page=()=>{
    const [page,setPage] =useState(0);
    const [formData,setFormData] = useState({
        firmname: "",
        email: "",
        address: "",
        password: "",
        phoneNumber: "",
        deviceId: "",
        serialNumber: "",
    })
    const[location,setLocation] =useState({
        country: "Select Your Country",
        state: "Select Your State",
        city: "Select Your City",
        address: "",
        phone:"",
        phoneNumber: 0
    })
    const goToPreviousPage =()=>{
        setPage((current)=> current - 1)
    }
    const goToNextPage =() =>{
        setPage((current)=> current + 1)
    }
    const PageDisplay =()=>{
        if (page === 0){
            return <Register
            onNext={goToNextPage}
            formData = {formData}
            setFormData={setFormData}/>;
        }
        else if (page === 1){
            return <Location
            onPrevious={goToPreviousPage}
            onNext={goToNextPage}
            formData = {formData}
            setFormData={setFormData}
            location={location}
            setLocation={setLocation}/>;
        }
        else if (page === 2){
            return <Device onPrevious={goToPreviousPage}
            onNext={goToNextPage}
            formData = {formData}
            setFormData={setFormData}/>
        }
        else {
            return <OTP
            onPrevious={goToPreviousPage}
            formData = {formData}
            />;
        }
    }
return(
    <div>
        {PageDisplay()}
       
       
  </div>
)


}
export default Page;