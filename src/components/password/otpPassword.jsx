import {form, InputOtp} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import {useForm, Controller} from "react-hook-form";
import {Button} from "@nextui-org/react";
import { useEffect, useState } from "react";
import OtpTimer from "otp-timer";
import { otpVerification,  } from "../apiService";
import {  LockIcon, MailIcon } from "../icons";
import { EyeFilledIcon } from "../eyeicon";
import { EyeSlashFilledIcon } from "../eyeicon";
import {Input} from '@nextui-org/input';
import { forgotPassword } from "../apiService";
import { useNavigate } from "react-router-dom";
import { LockedWithKey } from "../lock";
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import React from "react";

export const  OtpPassword=({ onPrevious, details })=> {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const[email,setEmail] = useState("")
  const [ otp,setOtp] = useState("")
  const [resendLoading, setResendLoading] = useState(false);
    const[password,setPassword]=useState('');
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);
    const [passwordError, setPasswordError] = useState("");
  const {handleSubmit,control,formState: {errors},} = useForm({
    defaultValues: {
      otp: "",
    },
  });
  const navigate = useNavigate();
   useEffect(()=>{
            const validatePassword = (password,confirmPassword) => {
              const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#()-/+|^{}_"':;.,><=!%*?&])[A-Za-z\d@$!^+[_{}/"-><:';.,()#-%*?&]{8,}$/;
              return passRegex.test(password);
            };
            if (password) {
              
              if (!/[!@#+-_=$%^&*(),.?":{}|<>]/.test(password)) {
                setPasswordError("Password must contain a special character");
              } else if (!/[A-Z]/.test(password)) {
                setPasswordError("Password must contain an uppercase letter");
              } else if (!/[a-z]/.test(password)) {
                setPasswordError("Password must contain a lowercase letter");
              } else if (!/\d/.test(password)) {
                setPasswordError("Password must contain a number");
              } else if (password.length < 8) {
                setPasswordError("Password must be at least 8 characters long");
              } else if (!validatePassword(password)) {
                setPasswordError("Invalid password format");
              } else {
                setPasswordError(""); 
              }
             } else {
                setPasswordError("");
              }
     },[password])
   useEffect(() => {
       alert(`Please enter the OTP sent to your email: ${details.email}`)
       setResendLoading(true)
       setTimeout(() => {
           setResendLoading(false); 
         }, 20000);
       ;
     }, []);
     const { data, refetch, error: otpError } = useQuery({
       queryKey: ["details", details.email],
       queryFn: () => otpVerification(details.email),
       enabled: false,
     });
  
    
const { mutate } = useMutation({
    mutationFn: forgotPassword,
     onSuccess: (res) => {
        console.log('Password reset successful:', res);
        alert('Password reset successfully!');
        navigate("/login")
      },
      onError: (error) => {
        console.error('Error:', error.message);
        alert('Failed to reset password');
      },
    });

  
  const onSubmit = (data) => {
    setEmail(details.email)
    const info = {
        email: details.email, 
        otp: data.otp, 
        password: password, 
      };
    mutate(info)
    
  };

  const handleRegister = async () => {
    setResendLoading(true)
    console.log("email",details.email)
    refetch()
    alert("OTP sent again Please check your mail.");
    
    setTimeout(() => {
      setResendLoading(false); 
    }, 20000);
  };
  return (
    <div className=" items-center justify-center h-screen bg-indigo-200">
          
    <div className="flex items-center justify-center h-screen">
      <Card  className="m-4 p-5" >
      <CardBody >
      <div className="flex justify-center items-center mb-8">
              <LockedWithKey className="text-9xl text-default-400 px-15" />
            </div>
      <h1 className = "text-xl font-bold text-center" >Reset Password</h1>
      <form  className="w-full justify-center items-center " onSubmit={handleSubmit(onSubmit)} >
        
    <div className="flex w-full justify-center items-center mt-6 md:mt-6 gap-4">
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
            onValueChange={setOtp}
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
      <div className="bg-white">
      <Button className="text-[15px] px-4 py-2 ml-6 bg-indigo-200" variant="light" radius="sm" isDisabled={resendLoading}  >
        
        <OtpTimer
        seconds={20}
        text=" "
        textColor = "#020617"
        ButtonText=" Resend OTP "
        buttonColor="#020617"
        background = "#c7d2fe"
        resend={handleRegister}
      />
      </Button>
      </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap mt-5 gap-4">
        <Input
      labelPlacement="outside"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      startContent={
        <LockIcon
         className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      label="Password"
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      
            autoComplete="off"
            name="password"
            id="password"
            isRequired
            variant="bordered"
            onChange={(e) => setPassword(e.target.value)}        
          />
         
          
          </div>
       <div className="flex  item-center mt-5">
       
      <Button radius="sm" type={onSubmit}
               className="px-2 w-full mt-2 md:mt-4 text-[15px] bg-indigo-400 text-white shadow-lg" >
          Reset Password
        </Button>
    
      </div>
      <div className="flex justify-center item-center mt-3">
      <Button  radius="full"  onPress={onPrevious} className="px-2 mt-2 md:mt-4 text-[15px] text-opacity-80 bg-white text-black" >
                  Go Back
        </Button >
        </div>
      </form>
      </CardBody>
</Card>
</div>
    </div>
   
  );
}
