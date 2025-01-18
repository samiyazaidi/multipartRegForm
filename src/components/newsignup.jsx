import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneDir from "./phone";
import React from 'react';
import { ReactCountryFlag } from '@fadi-ui/react-country-flag';

import axios from 'axios'
import {Input} from '@nextui-org/input';
import { AddressIcon, LocIcon, LockIcon, MailIcon, } from "./mailicon";
import { EyeFilledIcon } from "./eyeicon";
import { EyeSlashFilledIcon } from "./eyeicon";
import { PerIcon } from "./mailicon";
import {Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";


export const NSignup = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [phone, setPhone] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState("");
  const [flag, setFlag] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firmname,setFirmName]= useState('');
  const [email,setEmail]= useState('');
  const [address,setAddress]= useState('');
  const[password,setPassword]=useState('');
  const [phoneError, setPhoneError] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confPasswordError, setConfPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/states"
        );
       
        const result = await response.json();
        if (!result.error) {
          const sortedCountries = result.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCountries(sortedCountries);
          
        } else {
          console.error("Error fetching countries:", result.msg);
        }
        
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };
    
    fetchCountries();
    
  }, [selectedCountry]);
 
  const instance = axios.create({
    adapter: axios.defaults.adapter, 
  });
  useEffect(()=>{
    const validatePassword = (password,confirmPassword) => {
      const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
        setPasswordError(""); // No error
      }
     } else {
        setPasswordError("");
      }
      if(confirmPassword){
        if(confirmPassword !== password){
          setConfPasswordError("Password doesn't match")
        }
        else{
          setConfPasswordError("");
        }
      }
      else{
        setConfPasswordError("");
      }
  }, 
   [password, confirmPassword]);
  useEffect(() => {
    
    const fetchCities = async () => {
      try{
        const { data } = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/state/cities",
        {
          country :selectedCountry,
          state : selectedState,
        },{
          headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      console.log("h",data)
      setCity(data.data || []);
      
     }catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  };
    
  if (selectedCountry && selectedState) {
    fetchCities();
  }
}, [selectedCountry, selectedState]);


 

 useEffect(() => {
    if (phone.length > 0) {
      setSelectedPhone(phone); 
    }
  }, [phone]);
  
  
  

const handleCountryChange = (countryName) => {
    
    setSelectedState(""); 
    setSelectedCity("");
    setCity([])
    console.log("cname",countryName)
   
    const selected = countries.find((c) => c.iso2 === countryName);
   const selectedCountryName = selected?.name
   setSelectedCountry(selectedCountryName);
    const selectedPhone = PhoneDir.find((p) => p.name === selectedCountryName);
    const iso2 = selectedPhone.code
    setFlag(iso2)
    setPhone(selectedPhone ? [ selectedPhone.dial_code ] : []);
    const stateNames = selected && selected.states 
    ? selected.states.map((state) => state.name) 
    : [];
    setStates(stateNames);
     
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError || passwordError  || confPasswordError|| phoneError) {
      alert('Form submission prevented due to validation errors.');
      return;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
  
    
      console.log({ firmname, email, password,selectedCountry });
    // }
      // axios.post('/',{
      //   firmName:firmname,
      //   email:email,
      //   country:countries,
      //   state: states,
      //   city:city,
      //   address:address,
      //   password:password,
      // })
      // .then((res)=>{
      //   console.log(res)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
    };
    
    

  return (
    

        <div 
        className="flex items-center justify-center h-screen bg-indigo-200 "
        >
         
      <Card  className="m-4 p-5">
      <CardBody >
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
          
           type="text"
           autoComplete="off"
           minlength="3"
           name="firmname"
           id="firmname"
           isRequired
            onChange={(e) => setFirmName(e.target.value)}
          
          /> 
        </div>
        <div className="flex w-full mt-2 md:mt-4 gap-4">
        
        <Input
            label="Email"
            labelPlacement="outside"
            variant="bordered"
            placeholder="you@example.com"
            validate={(value) => {
            
              const validateEmail = (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
              };
              if (value) {
                if (!value.includes('@')) {
                  return "Email must contain '@'";
                } else if (!value.includes('.')) {
                  return "Email must contain '.'";
                  
                }else if (value.includes('@.')) {
                  return "'.' is used at wrong place";
                  
                } else if (!validateEmail(value)) {
                  return  "Invalid email format";
                } 
              } else {
                
             return value == null}
          } }
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
       
        <div className="flex  w-full mb-4  mt-2 md:mt-4 gap-4">
        <div className="w-full sm:w-1/2">
      
          <Select
             label="Country"
             labelPlacement="outside"
             variant="bordered"
             placeholder="Select Your Country" 
             id="country"
             value={selectedCountry}
             onChange={(e)=>{handleCountryChange(e.target.value)}} 
            startContent={
              <LocIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            isRequired
            
          >
            
            {countries.map((c) => (
              <SelectItem  key={c.iso2} value={c.name}>
               {c.name}
              </SelectItem>
            ))}
          </Select>
        
          
        </div>
        <div className="w-full sm:w-1/2">
 
          <Select
          
            label="State"
            labelPlacement="outside"
            variant="bordered"
            placeholder="Select Your State"
            startContent={
              <LocIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            id="states"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={!states.length}
            // isRequired
          >
            {states.map((state) => (
              <SelectItem  key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </Select>
         
         
        </div>
        <div className=" w-full ">
        
          <Select
            label="City"
            labelPlacement="outside"
            placeholder="Select Your City"
            variant="bordered"
            startContent={
              <LocIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            } 
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!city.length}
            // isRequired
          >
            {city.map((s, index) => (
              <SelectItem  key={index} value={s}>
                {s}
              </SelectItem>
            ))}
          </Select>
 
        </div>
        </div>
        <div className=" flex w-full mt-2 md:mt-4 gap-4">
          
      
            <div className="w-full ">
 
          <Input
           label="Phone Number"
           labelPlacement="outside"
           placeholder="Enter your Phone Number"
           variant="bordered"
           validate={(value)=>{
              const phoneRegex = /^\+?[\d\s\-\(\)]+$/; 
              if (!phoneRegex.test(value)) {
                return"Invalid Phone Number Format";
              } else {
                return value ==null;
              }
           }}
           startContent={
            selectedPhone && <span>{selectedPhone}
             {/* <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" /> */}
            </span>
           }
           endContent={
            flag && (
              <ReactCountryFlag
              countryCode={flag}
              svg
              style={{
              width: "0.5em",
              height: "1em",
              marginRight: "0.5em",
              }}
          />
              )
           }autoComplete="off"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            isRequired
          />
          
          </div>
        </div>
    
        <div className="flex w-full  mt-2 md:mt-4 gap-4">
        
        <Input
            label="Address"
            labelPlacement="outside"
            placeholder="Enter Your Address"
            variant="bordered"
            startContent={
              <AddressIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="address"
            autoComplete="off"
            name="address"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          
          
        </div>
        <div className="flex w-full  mt-2 md:mt-4 gap-4">
        <Input
        
        label="Password"
        placeholder="Enter your password"
        type = "password"
      labelPlacement="outside"
      startContent={
        <LockIcon
         className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
            autoComplete="off"
            name="password"
            id="password"
            isRequired
            variant="bordered"
            onChange={(e) => setPassword(e.target.value)}        
          />
          </div>
          <span style={{ color: 'red', fontSize: '13px' }}>{passwordError}</span> 
          <div className="flex w-full  mt-2 md:mt-4 gap-4">
          <Input
           label = "Connfirm Password"
           labelPlacement="outside"
            type="password"
            autoComplete="off"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re enter Your Password"
            variant="bordered"
            startContent={
                <LockIcon
                 className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            isRequired
            onChange={(e) => {setConfirmPassword(e.target.value);}}
          />
        </div>
        <span style={{ color: 'red', fontSize: '13px' }}>{confPasswordError}</span>
        <Button radius="sm"  type="submit" className="w-full  mt-2 md:mt-4 text-[18px] bg-gradient-to-tr from-purple-400 to-indigo-300 text-white shadow-lg" >
          Register
        </Button>
        <div className="text-center">
          <span className="text-sm ">
            Already have an account? <Link to="/login">Login</Link>
            
          </span>
         
        </div>
      </form>
      
      </CardBody>
</Card>
    </div>


  );
};

