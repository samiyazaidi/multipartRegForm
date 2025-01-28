import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  useMutation,
  useQuery,
  
} from '@tanstack/react-query'
import axios from "axios";
import {Input} from '@nextui-org/input';
import { AddressIcon, LocIcon, LockIcon, MailIcon, PhoneIcon } from "./icons";
import { EyeFilledIcon } from "./eyeicon";
import { EyeSlashFilledIcon } from "./eyeicon";
import { PerIcon } from "./icons";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import { duplicateEmailCheck } from "./apiService";


export const Register = ({  onNext,formData, setFormData }) => {
 
  const [firmName,setFirmName]= useState('');
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
  if(!!formData.email && formData.firmName && formData.password && !passwordError && !emailError){
  setIsValidated(true)
  }
  else{
    setIsValidated(false)
  }
  
},[firmName,email,password,passwordError,emailError])

 const { data, refetch,error } = useQuery({
    queryKey: ["checkEmail", formData.email],
    queryFn: () => duplicateEmailCheck(formData.email),
    enabled: false,
    onSuccess:(response)=>{
      if (!passwordError ) {
        if (onNext) onNext();
            console.log("Submitted")
            console.log("d",data)
      }
    }
    ,
    onError:(error)=>{
      alert("Email already exist")
    }
  });
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login"); 
  };
  const handleSubmit = (event) => {
    
    event.preventDefault();
    refetch()

    };
  return (
        <div className="flex items-center justify-center h-screen bg-indigo-200">
         
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
      <h1 className = "text-2xl font-bold text-center mb-3" >Create Account</h1>
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
          value={formData.firmName}
           type="text"
           autoComplete="off"
           minlength="3"
           name="firmName"
           id="firmName"
           isRequired
           onChange={(e) => {
            setFirmName(e.target.value);
            setFormData({ ...formData, firmName: e.target.value });
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
                <div className="flex ">
                       <Button radius="full" onPress={handleSignInClick} className="px-2 ml-0 mr-20 mt-5 md:mt-4 text-[14px] text-opacity-160 bg-white text-blue-500 hover:text-black" >
                         Already Have An Account? Login 
                       </Button >
                  <Button radius="full"  type="submit" isDisabled={!isValidated} className="px-2  ml-16 mt-5 md:mt-4 text-[15px] bg-indigo-500 text-white shadow-lg" >
                    Next
                  </Button>
                  </div>
                  </form>
      
      </CardBody>
</Card>
    </div>


  );
};

