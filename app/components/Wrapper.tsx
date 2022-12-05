import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-orange-300 to-red-500 ">
      <div className="flex items-center  flex-col md:w-[75%] w-[100%]">
        {children}
      </div>
    </div>
  );
}
