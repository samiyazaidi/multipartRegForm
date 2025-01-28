import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import {Input} from '@nextui-org/input';
import {  LockIcon, MailIcon } from "./icons";
import { EyeFilledIcon } from "./eyeicon";
import { EyeSlashFilledIcon } from "./eyeicon";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { signin } from "./apiService";
import {Image} from "@heroui/image";

export const SignIn = () => {

  const [email,setEmail]= useState('');
  const[password,setPassword]=useState('');
  const [emailError, setEmailError] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible, setIsVisible] = React.useState(false);
  const [passwordError, setPasswordError] = useState("");
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

 const {mutate} = useMutation({
   mutationFn:signin,
   onSuccess: (response)=>{
     alert("User exist" );
     console.log('Login:', response.data)
   },
   onError:(error)=>{
     alert("User does not exist" );
   }
 
 })
  const handleSubmit = (event) => {
    event.preventDefault();
    const  details = { email,password} 
    mutate(details)
  
    };

  return (
    <div className="w-full h-screen flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-1/2 h-1/3 sm:h-full">
    <img src="https://c2hr.org/wp-content/uploads/2020/02/iStock-962005986.jpg" 
    className="w-full h-full object-cover  "/>
    </div>
      <div className="  sm:w-1/2 h-full flex flex-col p-10 xl:px-20 lg:px-20 justify-center ">
  <h1 className = "text-4xl font-bold xl:mt-6 mb-8 xl:mb-2 md:text-start text-center xl:px-20 " >Login</h1>
  <p className="xl:px-20 mb-10 xl:mt-4 md:text-start text-center">Welcome Back! Please Login to your account.</p>
  <form  className="xl:px-20" onSubmit={handleSubmit} >
      
        <div 
        className="flex w-full flex-wrap md:flex-nowrap sm:flex-nowrap mb-8 md:mb-6 gap-4"
        >
               
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
                   id="email"
                   isRequired
                   onChange={(e) => setEmail(e.target.value)}
                   
                 />
                
               </div>
               <span style={{ color: 'red',fontSize: '13px'  }}>{emailError}</span>
               <div className="flex w-full flex-wrap md:flex-nowrap mt-8  gap-4">
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
          <span className="text-sm  text-blue-600 hover:text-black">
             <Link to="/forgotpassword">Forgot password?</Link>
          </span>
        <Button radius="sm"  type="submit" className="w-full mt-8  mb-4 text-[18px] bg-gradient-to-tr from-blue-600 to-indigo-300 text-white shadow-lg" >
          Login
        </Button>
      </form>
      <div className="text-center ">
          <span className="text-sm text-blue-600 hover:text-black">
            Don't have an account yet? <Link to="/form">Register</Link>
          </span>
        
        </div>
      
    </div>
    
    </div>
  );
};
