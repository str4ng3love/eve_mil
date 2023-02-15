"use client";
import CoolerHeading, { TAlign } from "../headings/CoolerHeading";

export default function EditGuide() {
  return (
    <>
      <div
        className={`absolute top-[0] left-[-50%] translate-x-[50%] w-full h-[100%] backdrop-blur-sm `}
      >
        <div className="flex sticky flex-col w-full h-full bg-black/80 min-w-[560px]">
          <CoolerHeading align={TAlign.center} text="edit Guide" />
          
        </div>
      </div>
    </>
  );
}
