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
import {
  useQuery,
  
} from '@tanstack/react-query'
export const Location = ({ onPrevious, onNext, formData,setFormData,location,setLocation }) => {

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
        const [address,setAddress]= useState('');
        const [isValidated, setIsValidated] = useState(false);
        const [phoneError, setPhoneError] = useState("");

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
          if(location.country && ((location.phoneNumber).length>3)
  
          )
          setIsValidated(true)
          else{
            setIsValidated(false)
          }
          
        }
        handleNext()
      },[phoneNumber, selectedCountry])
      
    const handleCountryChange = (countryName) => {
        
        setSelectedState(""); 
        setSelectedCity("");
        setCity([])
        console.log("cname",countryName)
        
        const selected = countries.find((c) => c.iso2 === countryName);
       const selectedCountryName = selected?.name
       setSelectedCountry(selectedCountryName);
       setLocation({ ...location, country: selectedCountryName })
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
    
    if (onNext) onNext();
    
    handleAddressChange()
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
    const handleAddressChange=()=>{
      setFormData({...formData, address: address + " " + selectedCity + " " + selectedState + " " + selectedCountry})
            }
  return (
    <div 
    className="flex flex-1 items-center justify-center h-screen bg-indigo-200"
    >
  <Card className="p-8 " >
  <CardBody >
    <div className="mb-6">
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
      
          <Select
             label="Country"
             labelPlacement="outside"
             variant="bordered"
             placeholder={location.country}
             value= {location.country}
             renderValue= {location.country}
             id="country"
            //  value={selectedCountry}
             onChange={(e) => {
              handleCountryChange(e.target.value);
              
            }}
            
            startContent={
              <LocIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            // isRequired
            
          >
            
            {countries.map((c) => (
              <SelectItem  key={c.iso2} value={c.name}>
               {c.name}
              </SelectItem>
            ))}
          </Select>
        
          
        </div>
        <div className="flex  w-full mb-4  mt-2 md:mt-4 gap-4">
 
          <Select
          
            label="State"
            labelPlacement="outside"
            variant="bordered"
            value={location.state}
            placeholder={location.state}
            startContent={
              <LocIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            id="states"
            // value={selectedState}
            onChange={(e) => {setSelectedState(e.target.value);
              setLocation({ ...location, state:  e.target.value })
              }
             }
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
        <div className="flex  w-full mb-4  mt-2 md:mt-4 gap-4">
        
          <Select
            label="City"
            labelPlacement="outside"
            placeholder={location.city}
            value={location.city}
            variant="bordered"
            startContent={
              <LocIcon
               className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            } 
            id="city"
            // value={selectedCity}
            onChange={(e) => {setSelectedCity(e.target.value);
              setLocation({ ...location, city:  e.target.value })
            }
             }
            disabled={!city.length}
            // isRequired
          >
            {city.map((city ) => (
              <SelectItem  key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </Select>
 
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
        <div className=" flex w-full mt-2 mb-4 md:mt-4 gap-4">
          
      
 
          <Input
           label="Phone Number"
           labelPlacement="outside"
           placeholder="Enter your Phone Number"
           variant="bordered"
           type="number"
           value= {location.phoneNumber}
           minLength={4}
          //  validate={(value)=>{
              // const phoneRegex = /^\+?[\d\s\-\(\)]+$/; 
              // if (!phoneRegex.test(value)) {
              //   return"Invalid Phone Number Format";
              // } else {
              //   return value ==null;
              // }
              // if (value.length<=3) {
              //     return "Number is too short";
              //   } else {
              //     return value == null;
              //   }
          //  }}
           startContent={
           ( location.phone && <span>{location.phone}
             {/* <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" /> */}
            </span>) 
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
            // value={phoneNumber}
            onChange={(e) => {setPhoneNumber(e.target.value);
              setFormData({ ...formData, phoneNumber: phone + e.target.value });
              setLocation({ ...location, phoneNumber: e.target.value })
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
