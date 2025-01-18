import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneDir from "./phone";
import React from 'react';
import { ReactCountryFlag } from '@fadi-ui/react-country-flag';

import axios from 'axios'
import {Input} from '@nextui-org/input';
import { AddressIcon, LocIcon, LockIcon, MailIcon, PhoneIcon } from "./mailicon";
import { EyeFilledIcon } from "./eyeicon";
import { EyeSlashFilledIcon } from "./eyeicon";
import { PerIcon } from "./mailicon";
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";


export const Register = ({  onNext,formData, setFormData }) => {
 
  const [firmname,setFirmName]= useState('');
  const [email,setEmail]= useState('');
  const [address,setAddress]= useState('');
  const[password,setPassword]=useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isValidated, setIsValidated] = useState(false);


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

useEffect(()=>{
  if(!!formData.email && formData.firmname && formData.password && !passwordError && !emailError){
  setIsValidated(true)
  }
  else{
    setIsValidated(false)
  }
  
},[firmname,email,password,passwordError,emailError])

  const handleSubmit = (event) => {
    
    event.preventDefault();
    if (!passwordError ) {
    if (onNext) onNext();
   
   
        console.log("Submitted")
    //   axios.post('/',{
    //     firmName:firmname,
    //     email:email,
    //     country:countries,
    //     state: states,
    //     city:city,
    //     address:address,
    //     password:password,
    //   })
    //   .then((res)=>{
    //     console.log(res)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    }
    };
    
 

  return (
    

        <div 
        className="flex items-center justify-center h-screen bg-indigo-200 "
        >
         
      <Card  className="m-4 p-5">
      <CardBody >
      <div className="mb-6">
        <ul className="steps ">
             <li className="step step-primary">Register</li>
            <li className="step ">Choose location</li>
            <li className="step">Add Device</li>
            <li className="step">Verify OTP</li>
          </ul>
        </div>
      <h1 className = "text-xl font-bold text-center" >Register</h1>
      <form  className="w-full justify-center items-center " onSubmit={handleSubmit} >
        
      <div className="flex mb-2 md:mb-4 gap-4">
      

          <Input
           label="Firm Name"
           labelPlacement="outside"
           placeholder="Enter Your Firm Name"
           variant="bordered"
           startContent={
             <PerIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
           }
          value={formData.firmname}
           type="text"
           autoComplete="off"
           minlength="3"
           name="firmname"
           id="firmname"
           isRequired
           onChange={(e) => {
            setFirmName(e.target.value);
            setFormData({ ...formData, firmname: e.target.value });
          }}
          
          
          /> 
        </div>
        <div className="flex w-full mt-2 md:mt-4 gap-4">
        
        <Input
            label="Email"
            labelPlacement="outside"
            variant="bordered"
            placeholder="you@example.com"
            value={formData.email}
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
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="text"
            autoComplete="off"
            name="email"
            id="email"
            isRequired
            onChange={(e) => {
                setEmail(e.target.value);
                setFormData({ ...formData, email: e.target.value });
              }}
              
          />
         
        </div>
    
       

        <div className="flex w-full  mt-2 md:mt-4 gap-4">
        <Input
      labelPlacement="outside"
      value={formData.password}
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
            onChange={(e) => {
                setPassword(e.target.value);
                setFormData({ ...formData, password: e.target.value });
              }}
                   
          />
          
          </div> 
          {passwordError && (<span style={{ color: 'red', fontSize: '13px'}}>{passwordError}</span>)}
                <div className="flex justify-end item-center">
                  
                  <Button radius="full"  type="submit" isDisabled={!isValidated} className="px-2  mt-5 md:mt-4 text-[15px] bg-indigo-500 text-white shadow-lg" >
                    Next
                  </Button>
                  </div>
                  </form>
      
      </CardBody>
</Card>
    </div>


  );
};

