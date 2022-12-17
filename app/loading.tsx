import CoolestHeading from "./components/headings/CoolestHeading"
import {TAlign} from './components/headings/CoolestHeading'
export default function Loading(){
    return(
  
          <>
            <div className="outline-2 flex justify-center items-center whitespace-pre-wrap bg-black/60 outline-dotted outline-slate-600 h-[calc(100vh-6rem)] w-full " >
                <CoolestHeading align={TAlign.center} text="Loading... " />
              <div className="flex animate-rotateRight justify-center h-16 w-16 items-center  rounded-[50px] border-solid border-y-4 border-x-4 border-b-white border-black"></div>{" "}
            </div>
          </>
  
      
    )
  }