import { Input,Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import {
  useMutation,
  useQuery,
  
} from '@tanstack/react-query'
import { otpVerification, verifyDevice } from "./apiService";


const Device = ({ onPrevious, onNext,formData, setFormData,location,setLocation })=>{
   
    const [deviceId,setDeviceId]= useState('');
    const[serialNo,setSerialNo]=useState('');

    const instance = axios.create({
      adapter: axios.defaults.adapter, 
    });
    const { data, refetch } = useQuery({
      queryKey: ['sendOtp', formData.email], 
      queryFn: () => otpVerification(formData.email), 
      enabled: false,
    });
    
const {mutate} = useMutation({
  mutationFn:verifyDevice,
  onSuccess: (response)=>{

    console.log('Device verified successfully:', response.data);
    refetch()
      if (onNext) onNext();
  },
  onError:(error)=>{
    const errorMessage =
      error.response?.data?.message || "Incorrect Device Id or Serial Number";
    alert(errorMessage);
  }

})
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const details = {deviceId: location.deviceId, serialNo: location.serialNo }
    mutate(details);
  };
  
    return(
        <div 
        className="flex flex-1 items-center justify-center h-screen bg-indigo-200"
        >
      <Card  className="p-6 m-4">
      <CardBody >
        <div className="mb-6">
        <ul className="steps ">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose location</li>
            <li className="step step-primary">Add Device</li>
            <li className="step">Verify OTP</li>
          </ul>
        </div>
      <h1 className = "text-xl font-bold text-center" >Add Device</h1>
      <form  className="w-full justify-center items-center  " onSubmit={handleSubmit}>
          
            <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
                   
                   <Input
                       label="Device Id"
                       labelPlacement="outside"
                       variant="bordered" 
                       value ={location.deviceId}                      
                       placeholder=""
                       maxLength={8}
                       type="text"
                       autoComplete="off"
                       name="deviceId"
                       id="deviceId"
                       isRequired
                       onChange={(e) => {setDeviceId(e.target.value);
                        setLocation({ ...location, deviceId: e.target.value })
                      }
                       }
                       
                     />
                   </div>
                   <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
                   
                   <Input
                       label="Serial Number"
                       labelPlacement="outside"
                       variant="bordered"
                       value={location.serialNo}
                       placeholder=""
                       maxLength={13}
                       type="number"
                       autoComplete="off"
                       name="serialNo"
                       id="serialNo"
                       isRequired
                       onChange={(e) => {setSerialNo(e.target.value);
                        setLocation({ ...location, serialNo: e.target.value })}
                       }
                       
                     />
                   </div>
            <div className="flex justify-end item-center">
                   <Button radius="full"  onPress = {onPrevious} className="px-2 ml-11 mr-2 mt-2 md:mt-4 text-[15px] text-opacity-80 bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white" >
                    Previous
                  </Button >
                  <Button  type= "submit" radius="full"  className="px-2 mt-2 md:mt-4 text-[15px] bg-indigo-500 text-white shadow-lg" >
                    Next
                  </Button>
                  </div>
                  
      </form>
      
      </CardBody>
</Card>
    </div>
    )
}
export default Device;