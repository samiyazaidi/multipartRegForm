import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneDir from "./phone";
import React from "react";
import { ReactCountryFlag } from "@fadi-ui/react-country-flag";

import axios from "axios";
import { Input } from "@nextui-org/input";
import {
  AddressIcon,
  LocIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
} from "./mailicon";
import { EyeFilledIcon } from "./eyeicon";
import { EyeSlashFilledIcon } from "./eyeicon";
import { PerIcon } from "./mailicon";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";

export const Signup = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(new Set([]));
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [phone, setPhone] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState("");
  const [flag, setFlag] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firmname, setFirmName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confPasswordError, setConfPasswordError] = useState("");
  const [isVisible, setIsVisible] = React.useState(false);

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

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const { data } = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/state/cities",
          {
            country: selectedCountry,
            state: selectedState,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
        setCity(data.data || []);
      } catch (error) {
        console.error("Failed to fetch cities:", error);
      }
    };

    if (selectedCountry && selectedState) {
      fetchCities();
    }
  }, [selectedCountry, selectedState]);
  useEffect(() => {
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (email) {
      if (!email.includes("@")) {
        setEmailError("Email must contain '@'");
      } else if (!email.includes(".")) {
        setEmailError("Email must contain '.'");
      } else if (email.includes("@.")) {
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
  useEffect(() => {
    const validatePassword = (password, confirmPassword) => {
      const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
  }, [password]);

  useEffect(() => {
    if (phone.length > 0) {
      setSelectedPhone(phone);
    }
  }, [phone]);

  useEffect(() => {
    if (phoneNumber) {
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(phoneNumber)) {
        setPhoneError("Invalid Phone Number Format");
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("");
    }
  }, [phoneNumber]);

  const handleCountryChange = (countryName) => {
    console.log({ countries });

    console.log(JSON.stringify(countryName));
    console.dir(countryName, { depth: null });
    // const countryName = e.target.value
    setSelectedCountry(countryName[0]?.currentKey);
    setSelectedState("");
    setSelectedCity("");
    setCity([]);
    console.log("cname", countryName);

    const selected = countries.find((c) => c.iso3 === countryName);

    const selectedPhone = PhoneDir.find((p) => p.name === countryName);
    // const iso2 = selectedPhone.code
    // setFlag(countryName)
    setPhone(selectedPhone ? [selectedPhone.dial_code] : []);
    const stateNames =
      selected && selected.states
        ? selected.states.map((state) => state.name)
        : [];
    setStates(stateNames);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailError || passwordError || phoneError) {
      alert("Form submission prevented due to validation errors.");
      return;
    }

    console.log({ firmname, email, password, selectedCountry });
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
    <div className="flex flex-1 items-center justify-center h-screen bg-indigo-200">
      <Card>
        <CardBody className="p-10 md:w-[40rem]">
          <h1 className="text-xl font-bold text-center">Register</h1>
          <form
            className="w-full justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4 ">
              <Input
                label="Firm Name"
                labelPlacement="outside"
                placeholder="Enter Your Firm Name"
                variant="bordered"
                startContent={
                  <PerIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                className="hover:border-orange-500 focus:border-orange-500 focus:ring focus:ring-orange-200 w-full"
                type="text"
                autoComplete="off"
                minlength="3"
                name="firmname"
                id="firmname"
                isRequired
                onChange={(e) => setFirmName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap mb-2 md:mb-4 gap-4">
              <Input
                label="Email"
                labelPlacement="outside"
                variant="bordered"
                placeholder="you@example.com"
                startContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none max-w-full" />
                }
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                isRequired
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            </div>
            <div className="flex w-full md:flex-nowrap mb-2 md:mb-4 gap-4">
              <div className=" w-1/3">
                <Select
                  label="Country"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Select Your Country"
                  id="country"
                  //  selectedKeys={selectedCountry}
                  value={selectedCountry}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  startContent={
                    <LocIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  isRequired
                >
                  {countries.map((c) => (
                    <SelectItem key={c.iso3} value={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </Select>

                {/* <select name="" id="" onChange={e=>handleCountryChange(e.target.value)}>
          {countries.map((c) => (
              <option  key={c.iso3} >
               {c.name}
              </option>
            ))}
          </select> */}
              </div>
              <div className="w-1/3">
                <Select
                  label="State"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Select Your State"
                  startContent={
                    <LocIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  id="states"
                  value={selectedState}
                  onValueChange={(value) => setSelectedState(value)}
                  disabled={!states.length}
                  // isRequired
                >
                  {states.map((s, index) => (
                    <SelectItem key={index} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className=" w-1/3 ">
                <Select
                  label="City"
                  labelPlacement="outside"
                  placeholder="Select Your City"
                  variant="bordered"
                  startContent={
                    <LocIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  id="city"
                  value={selectedCity}
                  onChange={(value) => setSelectedCity(value)}
                  disabled={!city.length}
                  // isRequired
                >
                  {city.map((s, index) => (
                    <SelectItem key={index} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className=" flex w-full md:flex-nowrap mb-2 md:mb-4 gap-4">
              <div className="w-1/3 ">
                <Select
                  label="Ph-code"
                  labelPlacement="outside"
                  placeholder="Select Your Phone Code"
                  variant="bordered"
                  id="phone"
                  value={selectedPhone}
                  onChange={(value) => setSelectedPhone(value)}
                  disabled={!phone.length}
                  // isRequired
                ></Select>

                <div className="flex items-center mt-2  ">
                  {flag && (
                    <ReactCountryFlag
                      countryCode={flag}
                      svg
                      style={{
                        width: "0.5em",
                        height: "1em",
                        marginRight: "0.5em",
                      }}
                    />
                  )}
                  {selectedPhone && <span>{selectedPhone}</span>}
                </div>
              </div>
              <div className="w-full ">
                <Input
                  label="Phone Number"
                  labelPlacement="outside"
                  placeholder="Enter your Phone Number"
                  variant="bordered"
                  startContent={
                    <PhoneIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  autoComplete="off"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  isRequired
                />
                <span
                  style={{
                    color: "red",
                    fontSize: "0.875rem",
                    display: "block",
                  }}
                >
                  {phoneError}
                </span>
              </div>
            </div>

            <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
              <Input
                label="Address"
                labelPlacement="outside"
                placeholder="Enter Your Address"
                variant="bordered"
                startContent={
                  <AddressIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="address"
                autoComplete="off"
                name="address"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap  mb-2 md:mb-4 gap-4">
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
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
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
            {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
            </div>

            <Button
              radius="sm"
              type="submit"
              className="w-full  text-[18px] bg-gradient-to-tr from-purple-400 to-indigo-300 text-white shadow-lg"
            >
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
