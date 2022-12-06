"use client";

import { useEffect, useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { arrayVoodoo } from "../../lib/ArrayVoodoo";
import Card from "../components/Card";
type Props = {
  input: Array<{
    title: string;
    desciption: string;
    url: string;
  }>;
};

export default function Carrousel(props: Props) {
  const [guides, setGuides] = useState<any[][]>([]);
  const [displayedGuides, setDisplayed] = useState<any>(0);

  useEffect(() => {
    if (props.input.length > 3) {
      setGuides(arrayVoodoo(props.input, 3));
    }
  }, []);
  if (props.input.length > 3) {
    return (
      <div className="flex flex-col  ">
        <div className="flex justify-center">
          <div className="flex justify-evenly p-4 w-[80%]">
            {guides.map((el, index) => displayedGuides === index ? <div key={index} className="bg-stone-200 h-4 w-4 rounded-md cursor-pointer  hover:bg-white transition-all duration-300 ease-linear"onClick={(e)=>setDisplayed(index)}></div>:<div key={index} className="bg-stone-700 h-4 w-4 rounded-md cursor-pointer  hover:bg-white transition-all duration-300 ease-linear"onClick={(e)=>setDisplayed(index)}></div>)}
          </div>
        </div>
        <div className="group flex  transition-all ease duration-300 delay-150 border-y-black rounded-md  items-center sm:flex-row ">
          <BiLeftArrow
            onClick={(e) => {
              if (displayedGuides === 0) {
                setDisplayed(guides.length - 1);
              } else {
                setDisplayed(displayedGuides - 1);
              }
            }}
            className="delay-300 cursor-pointer transition-all ease duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 hover:white "
            size={"4em"}
          />
          <div className={` w-[49.5rem] flex overflow-hidden`}>
            {guides[displayedGuides]?.map((el) => (
              <Card
                description={el.desciption}
                heading={el.title}
                url={el.url}
                key={el.title}
                displayAnim={false}
                animation={`animate-fade`}
              />
            ))}
          </div>
          <BiRightArrow
            onClick={(e) => {
              if (displayedGuides === guides.length - 1) {
                setDisplayed(0);
              } else {
                setDisplayed(displayedGuides + 1);
              }
            }}
            className={`delay-300 cursor-pointer transition-all ease duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-white `}
            size={"4em"}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="group flex hover:scale-105 transition-all ease duration-300 delay-150 border-y-black rounded-md border-solid border-y-2 w-fit  flex-col items-center sm:flex-row sm:justify-center ">
      {props.input.map((el) => (
        <Card
          description={el.desciption}
          heading={el.title}
          url={el.url}
          key={el.title}
        />
      ))}
    </div>
  );
}
