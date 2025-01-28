import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Location } from "./location"
import { Register } from "./register"
import Device from "./device"; 
import OTP from "./otp";

export const Page=()=>{
    const [page,setPage] =useState(0);
    const [formData,setFormData] = useState({
        firmName: "",
        email: "",
        address: "",
        password: "",
        contactNo: "",
        productsList: [],
        otp:""
    })
    const[location,setLocation] =useState({
        country: "",
        state: "",
        city: "",
        address: "",
        phone:"",
        deviceId: "",
        serialNo: "",
        contactNo: ""
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
            setFormData={setFormData}
            location={location}
            setLocation={setLocation}/>
        }
        else {
            return <OTP
            onPrevious={goToPreviousPage}
            setFormData={setFormData}
            location={location}
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