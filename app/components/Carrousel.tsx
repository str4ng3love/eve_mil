"use client";
import { useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

import Card from "./Card";
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
  if (props.input.length > 3) {
    const arrayVoodoo = (array: Array<any>, size: number) => {
      let result: number[][] = [];
      let startPos = 0;
      let tempArr: any[];

      for (let i = 0; i < array.length; i = i + size) {
 
        let arrayCopy = JSON.parse(JSON.stringify(array));

        tempArr = arrayCopy.slice(startPos, startPos + size);
        result.push(tempArr);
        startPos = startPos + size;

      }
      //continue from here /// inf loop to tackle
      setGuides(result)
    };
 
    arrayVoodoo(props.input, 3);
  }

  if (props.input.length > 3) {
    return (
      <div className="group flex hover:scale-105 transition-all ease duration-300 delay-150 border-y-black rounded-md border-solid border-y-2  bg-red-300 items-center sm:flex-row ">
        <BiLeftArrow
          className="delay-300 cursor-pointer transition-all ease duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 hover:white "
          size={"4em"}
        />
        <div className="w-[43.5rem] flex  overflow-hidden">
          {props.input.map((el) => (
            <Card
              description={el.desciption}
              heading={el.title}
              url={el.url}
              key={el.title}
            />
          ))}
        </div>
        <BiRightArrow
          className="delay-300 cursor-pointer transition-all ease duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-white "
          size={"4em"}
        />
      </div>
    );
  }
  return (
    <div className="group flex hover:scale-105 transition-all ease duration-300 delay-150 border-y-black rounded-md border-solid border-y-2 w-fit bg-red-300 flex-col items-center sm:flex-row sm:justify-center ">
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
