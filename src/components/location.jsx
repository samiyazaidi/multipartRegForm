import { useEffect, useState } from "react";
import PhoneDir from "./phone";
import React from 'react';
import Flag from 'react-world-flags';

import axios from 'axios'
import {Input} from '@nextui-org/input';
import { AddressIcon, LocIcon, LockIcon, MailIcon, PhoneIcon } from "./icons";
import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
export const Location = ({ onPrevious, onNext, formData,setFormData,location,setLocation }) => {

        const [countries, setCountries] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState("");
        const [states, setStates] = useState([]);
        const [selectedState, setSelectedState] = useState("");
        const [city, setCity] = useState([]);
        const [selectedCity, setSelectedCity] = useState("");
        const [phone, setPhone] = useState([]);
        const [phoneError, setPhoneError] = useState("");
        const [selectedPhone, setSelectedPhone] = useState("");
        const [flag, setFlag] = useState("");
        const [contactNo, setContactNo] = useState("");
        const [address,setAddress]= useState('');
        const [isValidated, setIsValidated] = useState(false)
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
          useEffect(()=>{
            const handleStateChange = ()=>{
              const selected = countries.find((c) => c.name === location.country);
              const stateNames = selected && selected.states 
              ? selected.states.map((state) => state.name) 
              : [];
              setStates(stateNames);
              console.log("state", selectedState, "loc",location.state)
            };
            setSelectedState(location.state)
            handleStateChange()
          },[selectedState,location.state,location.country])

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
          setLocation({ ...location, phone:  phone })
        }
      }, [phone]);
 
      useEffect(()=>{
        const handleNext=()=>{
          if(location.country && ((location.contactNo).length>3) && (!phoneError)
  
          )
          setIsValidated(true)
          else{
            setIsValidated(false)
          }
          
        }
        handleNext()
      },[contactNo, selectedCountry])
      
      const handleCountryChange = (countryName) => {
        setSelectedCountry(countryName);
        setSelectedState(""); 
        setSelectedCity("");
        setCity([])
        
        const selected = countries.find((c) => c.name === countryName);
        setLocation({ ...location, country: countryName })
        const selectedPhone = PhoneDir.find((p) => p.name === countryName);
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
    if(location.country && location.contactNo ){
    
    if (onNext) onNext();
    
    handleAddressChange()
    }
   
    };
    const handleAddressChange=()=>{
      setFormData({...formData, address: location.address + " " + location.city + " " + location.state + " " + location.country})
            }
  return (
    <div 
    className="flex flex-1 items-center justify-center h-screen bg-indigo-200"
    >
  <Card className="p-6 " >
  <CardBody >
    <div className="">
  <ul className="steps ">
        <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose location</li>
  <li className="step">Add Device</li>
  <li className="step">Verify OTP</li>
</ul>
</div>
  <h1 className = "text-xl font-bold text-center" >Choose Location</h1>
  <form  className="w-full justify-center items-center  " onSubmit={handleSubmit} >
      
  <div className="flex  w-full mb-4  mt-2 md:mt-4 gap-4">
  <label className="form-control w-full ">
      <div className= "label">
      <span className="label-text">Select Country</span>
      </div>
  <select
  className="select select-bordered w-full text-black "
  id="country"
  value={location.country}
  onChange={(e) => handleCountryChange(e.target.value)}
  required
>
  <option select disabled>
    {location.country}
  </option>
  {countries.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ))}
</select>
</label>
        </div>
        <div className="flex  w-full mb-4  mt-2 md:mt-4 gap-4">
        <label className="form-control w-full ">
      <div className= "label">
      <span className="label-text">Select State</span>
      </div>
        <select
  className="select select-bordered w-full text-black"
  id="state"
  value={location.state}
  onChange={(e) => {setSelectedState(e.target.value);
    setLocation({ ...location, state:  e.target.value })}
  }
>
  <option> {location.state}
  </option>
  {states.map((state, index) => (
    <option key={index} value={state}>
      {state}
    </option>
  ))}
</select>
</label>
        </div>
        <div className="flex  w-full mb-4  mt-2 md:mt-4 gap-4">
        <label className="form-control w-full ">
      <div className= "label">
      <span className="label-text">Select City</span>
      
      </div>
        <select
            className="select select-bordered w-full"
            id="city"
            value={location.city}
            onChange={(e) => {setSelectedCity(e.target.value);
                setLocation({ ...location, city:  e.target.value })}}
          >
            <option >{location.city}</option>
            {city.map((s, index) => (
              <option  key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
 </label>
        </div>
        <div className="flex w-full  mt-2 md:mt-4 gap-4">       
                <Input
                    label="Address"
                    labelPlacement="outside"
                    placeholder="Enter Your Address"
                    value={location.address}
                    variant="bordered"
                    startContent={
                      <AddressIcon
                       className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    type="address"
                    autoComplete="off"
                    name="address"
                    id="address"
                    onChange={(e) => {
                        setAddress(e.target.value);
                        setLocation({ ...location, address:  e.target.value })
                      }}             
                  />
                </div>
        <div className=" flex w-full mt-2  md:mt-4 gap-4">
          <Input
           label="Phone Number"
           labelPlacement="outside"
           placeholder="Enter your Phone Number"
           variant="bordered"
           value= {location.contactNo}
           minLength={4}
           validate={(value)=>{
              const phoneRegex = /^\+?[\d\s\-\(\)]+$/; 
              if (!phoneRegex.test(value)) {
                setPhoneError("Invalid Phone Number Format")
                return "Invalid Phone Number Format";
              } else {
                setPhoneError("")
                return value ==null;
              }
           }}
           startContent={
           ( location.phone && <span>{location.phone}
            </span>) 
           }
           endContent={
            flag && (
              <Flag code={flag} 
              svg
              style={{
              width: "2em",
              height: "2em",
              marginRight: "0.5em",
              }}
          />
              )
           }
           autoComplete="off"
            name="contactNo"
            id="contactNo"
            onChange={(e) => {setContactNo(e.target.value);
              setFormData({ ...formData, contactNo: phone + e.target.value });
              setLocation({ ...location, contactNo: e.target.value })
            }
             }
            required
          />
         
        </div>
          <div className="flex justify-end item-center">
        <Button radius="full"  onPress = {onPrevious} className="px-2 ml-11 mr-2 mt-2 md:mt-4 text-[15px] text-opacity-80 bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white" >
          Previous
        </Button >
        <Button radius="full" type="submit" isDisabled= {!isValidated} className="px-2  mt-2 md:mt-4 text-[15px] bg-indigo-500 text-white shadow-lg" >
          Next
        </Button>
        </div>
        <div className="text-center">
          <span className="text-sm ">
       </span>
        
        </div>
      </form>
      
      </CardBody>
</Card>
    </div>
  );
};
