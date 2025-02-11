import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import {Input} from '@nextui-org/input';
import {  Key, LockIcon, MailIcon,  } from "../icons";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { duplicateEmailCheck } from "../apiService";

// import Keys from '../../assets/keys.png'
import { otpVerification, signin } from "../apiService";
export const ForgotPassword = ({onNext,details,setDetails}) => {

  const [email,setEmail]= useState('');
  const[password,setPassword]=useState('');
  const [emailError, setEmailError] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible, setIsVisible] = React.useState(false);
  const [passwordError, setPasswordError] = useState("");
 

 const { data, refetch } = useQuery({
      queryKey: ['login', email,password], 
      queryFn: () => otpVerification(email), 
      enabled: false,
      onSuccess: (response)=>{
        
      }
      
    });
    const { data:emaildata, refetch:emailrefetch,error } = useQuery({
        queryKey: ["demail", email],
        queryFn: () => duplicateEmailCheck(email),
        enabled: false,
        onSuccess:(response)=>{
         alert(`${email} doesn't exist in our record`)
        }
        ,
        onError:(error)=>{
          refetch()
          if (onNext) onNext();
          }
        
      });
  const handleSubmit = (event) => {
    event.preventDefault();
    emailrefetch()
  }
  return (
    <div 
    className="flex flex-1 items-center justify-center  h-screen bg-indigo-200 "
    >
  <Card className="p-5 m-5 w-96" >
  <CardBody className="">
  <div className="flex justify-center items-center mb-8">
        <Key className="text-8xl text-default-400 px-15" />
      </div>
  <h1 className = "text-3xl font-bold  mb-4 text-center" >Forgot Password?</h1>
  
  <form  className="w-full justify-center items-center  " onSubmit={handleSubmit} >
      
        <div className="flex w-full flex-wrap md:flex-nowrap mt-6 mb-6 gap-4">
               
               <Input
                   label="Email"
                   labelPlacement="outside"
                   variant="bordered"
                   placeholder="you@example.com"
                   startContent={
                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                   }
                   type="text"
                   autoComplete="off"
                   name="email"
                   value= {details.email}
                   id="email"
                   isRequired
                   onChange={(e) => {setEmail(e.target.value);
                    setDetails({ ...details, email:  e.target.value })}}
                    validate={(value) => {
            
                      const validateEmail = (value) => {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        return emailRegex.test(value);
                      };
                      if (value) {
                        if (!value.includes('@')) {
                          setEmailError("Email must contain '@'")
                          return "Email must contain '@'";
                        } else if (!value.includes('.')) {
                          setEmailError("Email must contain '.'")
                          return "Email must contain '.'";
                          
                        }else if (value.includes('@.')) {
                          setEmailError("'.' is used at wrong place")
                          return "'.' is used at wrong place";
                          
                        } else if (!validateEmail(value)) {
                          setEmailError("Invalid email format")
                          return  "Invalid email format";
                        } 
                        else{
                          setEmailError("")
                        }
                      } 
                      else{
                        setEmailError("")
                      }
                  } }
                 />
                
               </div>
               <p className="flex">We’ll send a verification code to this email if it matches an existing account.</p>
                <Button radius="full"  type="submit" className="w-full  mt-5 md:mt-5 text-[18px] bg-indigo-300 text-white shadow-lg" >
                         Send OTP
                       </Button>
                       <div className="text-center mt-2">
                         <span className="text-sm ">
                            <Link to="/login">
                            Back To Login</Link>
                           
                         </span>
                        
                       </div>
      </form>
      
      </CardBody>
</Card>
    </div>
  );
};
