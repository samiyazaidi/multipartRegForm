import {DatePicker} from "@nextui-org/react";
import {CalendarDate, parseDate} from "@internationalized/date";


export const DateIn=() =>{
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-2 font-medium">
      
    <DatePicker showMonthAndYearPickers className="" labelPlacement="inside-left" variant="underlined" selectorButtonPlacement="start" />
    {/* <DatePicker  label="TO" variant="underlined" selectorButtonPlacement="start" /> */}
  </div>
  );
}
