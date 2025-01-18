import { Input, Button } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const Device = ({ onPrevious, onNext, formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

  const { data, refetch, error: otpError } = useQuery({
    queryKey: ["sendOtp", formData.email],
    queryFn: () => otpVerification(formData.email),
    enabled: false,
  });
const instance = axios.create({
      adapter: axios.defaults.adapter, 
    });
  const { mutate, isError, error } = useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        "https://staging.enggenv.com/api/v1/user/validateDevice",
        {
          deviceId: formData.deviceId,
          serialNumber: formData.serialNumber,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data.success === true) {
        return response.json();
      }
      throw new Error("Invalid Device ID or Serial Number");
    },
    onSuccess: () => {
      refetch();
      if (onNext) onNext();
    },
    onError: (err) => {
      console.error("Error:", err);
      alert(err.message || "Failed to verify the device.");
    },
  });

  const otpVerification = async (email) => {
    const response = await fetch(
      `https://staging.enggenv.com/api/v1/user/sendOtp?email=${email}`
    );
    if (!response.ok) {
      throw new Error("Failed to send OTP");
    }
    return response.json();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    mutate();
    // setLoading(false);
  };

  return (
    <div className="flex flex-1 items-center justify-center h-screen bg-indigo-200">
      <Card className="p-6 m-4">
        <CardBody>
          <div className="mb-6">
            <ul className="steps">
              <li className="step step-primary">Register</li>
              <li className="step step-primary">Choose location</li>
              <li className="step step-primary">Add Device</li>
              <li className="step">Verify OTP</li>
            </ul>
          </div>
          <h1 className="text-xl font-bold text-center">Add Device</h1>
          <form className="w-full justify-center items-center" onSubmit={handleSubmit}>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
              <Input
                label="Device Id"
                labelPlacement="outside"
                variant="bordered"
                value={formData.deviceId}
                maxLength={8}
                type="text"
                name="deviceId"
                id="deviceId"
                isRequired
                onChange={(e) =>
                  setFormData({ ...formData, deviceId: e.target.value })
                }
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-4 gap-4">
              <Input
                label="Serial Number"
                labelPlacement="outside"
                variant="bordered"
                value={formData.serialNumber}
                maxLength={13}
                type="number"
                name="serialNumber"
                id="serialNumber"
                isRequired
                onChange={(e) =>
                  setFormData({ ...formData, serialNumber: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end items-center">
              <Button
                radius="full"
                onPress={onPrevious}
                className="px-2 ml-11 mr-2 mt-2 md:mt-4 text-[15px] text-opacity-80 bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white"
              >
                Previous
              </Button>
              <Button
                type="submit"
                radius="full"
                className="px-2 mt-2 md:mt-4 text-[15px] bg-indigo-500 text-white shadow-lg"
              >
                Next
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Device;
