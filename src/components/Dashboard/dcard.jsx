import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  ButtonGroup,
  Divider
} from "@nextui-org/react";
import { FaCirclePlay, FaCircleStop } from "react-icons/fa6";
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos  } from "react-icons/md";
import { LuRefreshCw, LuRefreshCwOff } from "react-icons/lu";
// import Gauge from "../dash/gauge";
export function PreviousIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.51 3.87L15.73 2.1L5.84 12l9.9 9.9l1.77-1.77L9.38 12z"
      ></path>
    </svg>
  );
}

export function NextIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76"
      ></path>
    </svg>
  );
}

export default function DCard({ device }) {
  const [liked, setLiked] = React.useState(false);
  const devices = [
    {
      id: 1,
      name: "COD",
      value: 135,
      unit: "mg/L",
      minimum: 4,
      maximum: 200,
    },
    {
      id: 2,
      name: "PH",
      value: 40,
      unit: "mg/L",
      minimum: 0,
      maximum: 100,
    },
    {
      id: 3,
      name: "JH",
      value: 205,
      unit: "mg/L",
      minimum: 20,
      maximum: "",
    },
    {
      id: 4,
      name: "mb",
      value: 7.3,
      unit: "mg/L",
      minimum: "",
      maximum: 14,
    },
  ];
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % devices.length);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % devices.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? devices.length - 1 : prevIndex - 1
    );
  };
  const handleSlideshow = () => {
    setIsPlaying(!isPlaying);
  };
  const currentDevice = devices[currentIndex];

  return (
    <div className="w-full h-auto ">
      <Card
        isBlurred
        className=" bg-transparent "
        shadow="none"
        border="none"
        radius="sm"
      >
        <CardBody>
          <div className="flex flex-col gap-5 h-full w-full overflow-hidden items-center p-2 text-neutral/80">
            <p className="text-3xl bg-white/40 text-center rounded-lg w-full font-extrabold">
              {currentDevice?.name}
            </p>
            <div className="flex items-baseline">
              <h1 className="text-9xl md:text-8xl font-extralight text-neutral">{currentDevice?.value}</h1>
              <p className="text-lg">{currentDevice?.unit}</p>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
              
              <div className="flex justify-between w-full text-xs">
                <p>Min: {currentDevice?.minimum}</p>
                <p>Max: {currentDevice?.maximum}</p>
              </div>
              <Divider />
              <div className="flex gap-2">
              <Button
                  isIconOnly
                  radius="full"
                  onPress={handlePrev}
                  variant="light"
                >
                 <MdOutlineArrowBackIos/>
                </Button> 
                <Button
                  isIconOnly
                  radius="full"
                  onPress={handleSlideshow}
                  variant="light"
                  className="tooltip"
                  data-tip={isPlaying ? "Auto Rotate Off":"Auto Rotate On"}
                >
                  {isPlaying ? (
                    <LuRefreshCwOff className="text-xl" />
                  ) : (
                    <LuRefreshCw className="text-xl" />
                  )}
                </Button>
                <Button
                  isIconOnly
                  radius="full"
                  onPress={handleNext}
                  variant="light"
                >
                 <MdOutlineArrowForwardIos/>
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="  h-full min-h-[160px]  ">
            <div className="flex flex-col  ">
              <div className="flex justify-center  ">
                <div className="grid ">
                  <div className="flex flex-1 top-3  xl:top-2 left-12 fixed ">
                    <h1 className="text-3xl font-bold  ">
                      {currentDevice.name}
                    </h1>
                    <div className=" fixed hover:bg-[rgb(207,221,176)]  rounded-full bg-[rgb(174,212,184) xl:top-0  top-1 right-3 text-[rgb(71,93,61)]">
                      <Button
                        className="hover:bg-[rgb(221,237,184)]  "
                        radius="full"
                        isIconOnly
                        variant=""
                        onPress={handlePrev}
                      >
                        {" "}
                        <PreviousIcon className="text-xl text-[rgb(71,93,61)]" />
                      </Button>
                      <Button
                        className="hover:bg-[rgb(221,237,184)] "
                        radius="full"
                        isIconOnly
                        variant=""
                        onPress={handleNext}
                      >
                        {" "}
                        <NextIcon className="text-xl text-[rgb(71,93,61)]" />
                      </Button>
                    </div>
                  </div>
                  <div className="xl:grid grid-cols-2 mt-8  font-medium text-lg flex">
                    <h1 className="text-6xl  justify-center ">
                      {currentDevice.value}{" "}
                    </h1>
                    <h1 className="text-xl   mt-6 font-bold ">
                      {currentDevice.unit}
                    </h1>
                  </div>
                  <div className="grid grid-cols-2  justify-between gap-6 ">
                    <h1 className="text-lg fixed top-32 mt-1 left-16 font-sans font-medium   ">
                      Min: {currentDevice.minimum}{" "}
                    </h1>
                    <h1 className="text-lg fixed top-32 mt-1 right-16 font-sans ml-6 font-medium  ">
                      Max: {currentDevice.maximum}{" "}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex h-10   justify-center mt-16 ">
                <Button
                  className=" hover:bg-[rgb(179,214,162)] w-28 h-12 hover:text-white text-[rgb(71,93,61)] text-[18px] font-bold  bg-green-100"
                  radius="full"
                  variant=""
                  // color="success"
                  onPress={handleSlideshow}
                >
                  {isPlaying ? "PAUSE" : "PLAY"}
                </Button>
              </div>
            </div>
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
}
