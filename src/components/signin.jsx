import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import {Input} from '@nextui-org/input';
import {  LockIcon, MailIcon } from "./mailicon";
import { EyeFilledIcon } from "./eyeicon";
import { EyeSlashFilledIcon } from "./eyeicon";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";

export const SignIn = () => {

  const [email,setEmail]= useState('');
  const[password,setPassword]=useState('');
  const [emailError, setEmailError] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible, setIsVisible] = React.useState(false);
  useEffect(()=>{
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (email) {
      if (!email.includes('@')) {
        setEmailError("Email must contain '@'");
      } else if (!email.includes('.')) {
        setEmailError("Email must contain '.'");
        
      }else if (email.includes('@.')) {
        setEmailError("'.' is used at wrong place");
        
      } else if (!validateEmail(email)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("");
    }
  }, [email]);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    //   console.log({ username, email, password });
    //   axios.post('',{
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
    };

  return (
    <div 
    className="flex flex-1 items-center justify-center h-screen bg-indigo-200"
    >
  <Card  >
  <CardBody >
  <h1 className = "text-xl font-bold text-center" >Login</h1>
  <form  className="w-full justify-center items-center  " onSubmit={handleSubmit} >
      
        <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
               
               <Input
                   label="Email"
                   labelPlacement="outside"
                   variant="bordered"
                   placeholder="you@example.com"
                   startContent={
                     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                   }
                   type="email"
                   autoComplete="off"
                   name="email"
                   id="email"
                   isRequired
                   onChange={(e) => setEmail(e.target.value)}
                   
                 />
                 <span style={{ color: 'red' }}>{emailError}</span>
               </div>
        
               <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
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
          
        <Button radius="sm"  type="submit" className="w-full  text-[18px] bg-gradient-to-tr from-purple-400 to-indigo-300 text-white shadow-lg" >
          Login
        </Button>
        <div className="text-center">
          <span className="text-sm ">
            New Here? <Link to="/">Register</Link>
          </span>
        
        </div>
      </form>
      
      </CardBody>
</Card>
    </div>
  );
};
