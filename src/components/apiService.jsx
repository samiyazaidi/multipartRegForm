import { API_BASE_URL } from "./utils/constants";
import axios from "axios"


export const verifyDevice = async (details) => {
    return await axios.post(
      `${API_BASE_URL}/validateDevice`,
        details,
      { headers: { "Content-Type": "application/json" } }
    );
}
export const otpVerification = async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/sendOtp?email=${email}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to send OTP: " + (error.response?.data?.message || error.message));
    }
  };
  export const signUp = async (details) => {
    return await axios.post(
      `${API_BASE_URL}/register`,
        details,
      { headers: { "Content-Type": "application/json" } }
    );
}

  export const duplicateEmailCheck = async(email)=>{
    try{
      const res =   await axios.get(`${API_BASE_URL}/userExists?email=${email}`)
      if(res.data.success == true){
        return res.data
      }
      else{
        console.log("email already exists")
      }
    }catch (error){
      throw new Error("Filed to verify email")
    }
  }
  export const signin= async(details)=>{
    try{
      return await axios.post(`${API_BASE_URL}/login`, details,
        { headers: { "Content-Type": "application/json" } }
      )
     
    }
    catch(error){
      throw new Error(error)
    }
  }

  export const forgotPassword = async (info)=>{
    const url = `${API_BASE_URL}/forgetPassword?email=${info.email}`;
  
    try {
      const response = await axios.patch(
        url,
        { otp: info.otp, password: info.password }, 
        { headers: { "Content-Type": "application/json" } } 
      );
      return response.data;
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || 'Failed to reset password');
    }
  }