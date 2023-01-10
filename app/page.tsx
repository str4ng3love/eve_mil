
import CoolerHeading from "./components/headings/CoolerHeading";
import CoolestHeading from "./components/headings/CoolestHeading"
import CoolHeading from "./components/headings/CoolHeading"

import Test from "./components/Test";


export default function Page() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-tl from-orange-300 to-red-500 ">
      <div className="flex flex-col min-h-[calc(100vh-6rem)] items-center md:w-[75%] w-[100%] bg-black/80 text-white p-[4rem] shadow-wrapperShadow">
        <CoolestHeading text="WARZONE"/>
        <CoolHeading text="Your number one place for all things" />
        <CoolerHeading text="Factional Warfare" url="#" />
        <div className="text-white">

        <div className="w-[10rem] border-2 border-white border-dashed h-[10rem] bg-cover ">xxx
    
          </div>
        </div>

        <Test />
      </div>
    </div>
  );
}
