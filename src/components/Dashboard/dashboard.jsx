import { Analytics02, AnalyticsOutlineBadged, BaselineLogout, DeviceHubRounded, DeviceSignal, HomeSmile2Fill, InterfaceDashboard, MailIcon, Profile02, Report, ReportAnalytics, UserProfile } from "../icons"
import "/src/index.css" 
import "/src/output.css"
import React, { useState } from "react";
import Table from "./table";
import { MyMap } from "./map";
import {Card,User, CardBody, CardHeader, CardFooter, Button,Select, SelectItem, Chip, Avatar} from "@nextui-org/react";
import { BaselineArrowDownward, LibraryBuilding, MapPinOutline, OutlineDownloading } from "../icons";
import MyChart from "./chart";
import Date from "./date";
import DCard from "./dCard";
import { DateIn } from "./dateInput";
import { DateRange } from "./dateRange";


export function Dashboard(){
    const [device,setDevice]=useState({
            deviceName:""
            })
    return(
        <div className="  xl:fixed h-screen xl:w-screen">
      <div className="drawer lg:drawer-open  ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col xl:h-screen  ">
        <div className="navbar bg-white   ">
          <div className="flex-none lg:hidden  ">
            <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            {/* <div className="flex-grow flex items-center ">
              <h1 className="text-center font-serif text-2xl"> Daily Checker</h1>
            </div> */}
          </div>
          
           <div className="mx-2 flex flex-col items-start md:px-2 w-full">
            <div className="flex sm:mb-4 xl:mb-0 lg:mb-0 md:mb-0 mb-0 justify-between  w-full">
              <h1 className="font-bold text-3xl flex-1 text-black">ENE</h1>
              <Select
                className="w-36 text-white   font-medium"
                radius="full"
                color="warning"
                placeholder="Select Device"
              />
            </div>
            <p className="text-sm  text-black w-full">Center Point Aligarh Uttar Pradesh India</p>
          </div>
          
        </div>
        <div className=" xl:h-screen xl:mr-2"  >
     
       
        <div className=" grid grid-cols-4 lg:grid-rows-7 md:grid-rows-8 sm:grid-rows-23 gap-5 p-4 sm:flex lg:flex bg-white h-[93%] xl:overflow-auto ">
         {/* DeviceCard */}
          <Card radius= "lg" shadow="sm"  className=" bg-gradient-to-tr from-[rgb(167,201,176)] to-[rgb(216,228,188)] min-h-[160px] py-2 sm:row-start-3 sm:col-start-1  xl:col-span-1 xl:row-span-3 lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-4 row-span-4  col-span-4 bg-white xl:ml-2 justify-center items-center ">
            <DCard device ={device}/>
            </Card>
    
    {/* Table */}
          <Card radius="md" shadow="sm"  className=" overflow-y-auto xl:col-span-2 xl:row-span-3 lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 col-span-4 row-span-4 sm:col-span-4  sm:row-span-4 min-h-[170px] bg-white p-1 gap-4  ">
           <Table device ={device} setDevice ={setDevice}/>
            </Card>
    {/* last updated */}
          <Card radius="md" shadow="sm" className="min-h-[50px] p-2 sm:row-start-1 row-start-1  text-black xl:col-span-1 xl:row-span-1 row-span-2 lg:row-span-1 lg-col-span-2  md:col-span-2 md:row-span-1 sm:col-span-4 sm:row-span-2  col-span-4  xl:p-2  ">
         <Date/>
            </Card>
          {/* report */}
          <Card radius="md" shadow="sm" className="min-h-[110px] sm:row-start-3 sm:col-start-3 xl:col-span-1 xl:row-span-2 lg:row-span-2 lg:col-span-2 md:col-span-2 md:row-span-1 sm:col-span-4 sm:row-span-3 col-span-4  row-span-4 bg-white lg:p-3 p-2 justify-between  ">
            <h1 className="mb-2 mr-32 font-medium">Download Report</h1><div className="justify-center"><DateRange/></div>
          <Button radius="md"  color=""   className="mt-3 min-h-[24px]   bg-[rgb(203,215,176)]  text-black font-medium"><BaselineArrowDownward className="text-xl "/>Download </Button>
          </Card>
          {/* map */}
          <Card radius="md" shadow="sm" className="min-h-[300px]    z-0 xl:col-span-1 xl:row-span-4 lg:col-span-2 lg:row-span-4 md:col-span-2 md:row-span-3 sm:row-span-2 sm:col-span-2 row-span-2 col-span-4 bg-white xl:ml-2 justify-center xl:mb-4 ">
          <CardHeader><h1 className="font-bold  text-black text-md ">Device Location: </h1></CardHeader><CardBody className="h-full"><MyMap/></CardBody >
            </Card>
          {/* chart */}
          <Card
            radius="md"
            shadow="sm"
            className="overflow-x-auto display:inline-block flex  w-full min-h-[300px] xl:col-span-3 xl:row-span-4 lg:row-span-3 lg:col-span-2 
            md:col-span-2 md:row-span-3 sm:col-span-4 sm:row-span-3 col-span-4 row-span-3 
            bg-white xl:p-2 lg:p-2 xl:mb-4 font-bold justify-center   "
            >
           <CardHeader className="xl:mt-8" >
             <h5 className="font-medium text-gray-400 ml-4 mr-4  md:text-[16px]  underline underline-offset-[16px]">
              TO:
            </h5>
             <DateIn />
                 <h5 className="font-medium text-gray-400 ml-4 mr-4  md:text-[16px]  underline underline-offset-[16px]">
                 FROM:
                </h5>
             <DateIn />
             </CardHeader>
             <CardBody className="h-full w-full min-h-[300px] p-7 mb-2">
             <MyChart />
            </CardBody>
            </Card>


        </div>
        
        </div>
      </div>
    
      <div className="drawer-side black  lg:block p-1 h-screen  rounded fixed">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-gray-50 text-base-content min-h-full w-56 p-2 flex flex-col justify-between rounded relative z-10">
          <div> <li className="py-2  mt-16 md:text-base text-start  text-blue-500"><a href="/" className="bg-gray-200 border-1"><InterfaceDashboard className="text-lg" />Dashboard</a> </li>
          <li  className="py-2  md:text-base text-start hover:text-blue-500"><a href="" ><Analytics02 className="text-xl" />Analytics</a> </li>
          <li className="py-2  md:text-base text-start hover:text-blue-500"><a href=""> <DeviceSignal className="text-xl"/>Device</a></li>
          <li className="py-2  md:text-base text-start hover:text-blue-500"><a href=""> <ReportAnalytics className="text-xl"/>Report</a></li>
          <li className="py-2  md:text-base text-start hover:text-blue-500"><a href=""> <Profile02 className="text-xl"/>Profile</a> </li>
          </div>
          <div className="py-2 px-2 mb-2 flex flex-row bg-gray-100">
          
          <div className="flex">
       <User
            as="button"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            className="transition-transform"
            description="xyz@gmail.com"
            name="Zoe Lang"
          />
     
        <Button className="ml-6 hover:text-blue-500" isIconOnly variant="light"> <BaselineLogout className="text-xl"/></Button>
        
      </div>
        </div>
          
        </ul>
      </div>
    </div>
    </div>
      
    )
}