import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-orange-300 to-red-500 ">
      <div className="flex flex-col min-h-[calc(100vh-6rem)] items-center h-[500px] md:w-[75%] w-[100%] bg-black/80 text-white pt-[1rem] font-mono shadow-wrapperShadow">
        {children}
      </div>
    </div>
  );
}
