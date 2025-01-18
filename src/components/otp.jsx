import {InputOtp} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import {useForm, Controller} from "react-hook-form";
import {Button} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  useQuery,
  
} from '@tanstack/react-query'
import React from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
const  OTP=({onPrevious,formData})=> {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(20);
  const {handleSubmit,control,formState: {errors},} = useForm({
    defaultValues: {
      otp: "",
    },
  });
  useEffect(() => {
    alert(`Please enter the OTP sent to your email: ${formData.email}`);
  }, []);
  

  const onSubmit = (data) => {
    
    if (data.otp === "1111") { 
      setIsOtpVerified(true); 
      alert("OTP Verified Successfully!");
      
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };
  const instance = axios.create({
    adapter: axios.defaults.adapter, 
  });
  const { data, refetch } = useQuery({
        queryKey: ['formData', formData.email], 
        queryFn: () => otpVerification(formData.email), 
        enabled:false
      });
  const otpVerification = async (email) => {
    const response = await fetch(`https://staging.enggenv.com/api/v1/user/sendOtp?email=${email}`);
    if (!response.ok) {
      throw new Error('Failed to verify OTP');
    }
    return response.json();
  };
  const handleRegister = async () => {
    setResendLoading(true)
    refetch()
    alert("OTP sent again Please check your mail.");
    
    setTimeout(() => {
      setResendLoading(false); 
    }, 20000);
  };
  return (
    
   
    <div 
        className=" items-center justify-center h-screen bg-indigo-200"
        >
          
    <div className="flex items-center justify-center h-screen">
      <Card  className="m-4 p-5" >
      <CardBody >
        <div className="mb-6">
        <ul className="steps ">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose location</li>
            <li className="step step-primary">Add Device</li>
            <li className="step step-primary">Verify OTP</li>
          </ul>
        </div>
      <h1 className = "text-xl font-bold text-center" >OTP Verification</h1>
      <form  className="w-full justify-center items-center " onSubmit={handleSubmit(onSubmit)} >
        
    <div className="flex w-full justify-center items-center mt-2 md:mt-4 gap-4">
      <Controller
        control={control}
        name="otp"
        render={({field}) => (
          <InputOtp
          color="primary"
            {...field}
            errorMessage={errors.otp && errors.otp.message}
            isInvalid={!!errors.otp}
            length={4}
          />
        )}
        rules={{
          required: "OTP is required",
          minLength: {
            value: 4,
            message: "Please enter a valid OTP",
          },
        }}
      />
      <Button className="text-[15px] px-4 py-2 ml-6 bg-indigo-200"  onPress={handleRegister} variant="light" radius="sm" isDisabled={resendLoading} >
        Resend OTP
      </Button>
      
      </div>
       <div className="flex justify-end item-center mt-5">
       <Button  radius="full" onPress = {onPrevious}  className="px-2 ml-11 mr-2 mt-2 md:mt-4 text-[15px] text-opacity-80 bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white" >
                    Previous
                  </Button >
      <Button radius="full" type={onSubmit}
      // isDisabled={!isOtpVerified}
               className="px-2  mt-2 md:mt-4 text-[15px] bg-indigo-500 text-white shadow-lg" >
          Register
        </Button>
      </div>
        
      </form>
      
      </CardBody>
</Card>
</div>
    </div>
   
  );
}
export default OTP;
