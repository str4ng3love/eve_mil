"use client";

import {useState} from 'react'
import CoolerHeading, { TAlign } from "../headings/CoolerHeading";
import Button, { BType } from '../ui/Button';
import GuidePanel from "./GuidePanel";

export default function MyGuides() {
const [showGuides,setShowGuides] = useState(false)

  return (
    <div className="p-4 w-full h-fit">
      <div className=" text-white p-4 flex flex-col ">
        <div>
        <CoolerHeading text={"My guides"} align={TAlign.start} />
        <span>number guides</span>
        </div>
        {/* pojedynczy obj */}
        {!showGuides ?  
    <Button type={BType.button} text={'show all'} handleClick={(e)=>{setShowGuides(true)}} />:
    <>
    <Button type={BType.button} text={'hide all'} handleClick={(e)=>{setShowGuides(false)}} />
    <GuidePanel />
    </>
}
    {/* conditionally rendering fetched guides */}
    </div>
    </div>
  );
}
