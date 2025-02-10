import {DateRangePicker} from "@nextui-org/react";
import {Chip} from "@nextui-org/react"
import {parseZonedDateTime, parseAbsoluteToLocal} from "@internationalized/date";
export const DateRange=()=> {
    return (
        <div className=" flex sm:flex-1 justify-between  ">
        <DateRangePicker showMonthAndYearPickers label="Select Date Range " selectorButtonPlacement="start" />
        </div>
      );
}