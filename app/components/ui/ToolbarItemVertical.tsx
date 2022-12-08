import React from "react";

interface Props {
  text: string;
  dir?: string;
  elementsArray?: string[];
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default function ToolbarItem(props: Props) {
  return (
    <>
      {props.dir === "y" ? (
        <div 
          className={`absolute  flex justify-center opacity-0 delay-300 rounded-md  bg-black/80 group-hover:opacity-100 group-hover:translate-y-[65%] ease-out transition-all duration-500 `}
        >
          <div
            className={`uppercase flex flex-col items-center justify-center transition-all duration-300 ease-out hover:shadow-linkB hover:text-black p-3 rounded-md hover:bg-white font-bold font-Abel `}
          >
            {props.text}
            <div
              className={`flex transition-all duration-500 ease-out p-[05.rem] mx-1 justify-center items-start flex-col`}
            >
              {props.elementsArray?.map((el, index) => (
                <div
                  key={index}
                  className="hover:bg-black select-none hover:text-white rounded-md  w-full p-4 m-1"
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`absolute flex justify-center opacity-0 delay-300 rounded-md  bg-black/80 group-hover:opacity-100 group-hover:-translate-y-[100%] ease-out transition-all duration-500 p-1 `}
        >
          <div onClick={props.handleClick}
            className={`uppercase select-none cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ease-out hover:shadow-linkB hover:text-black p-6 rounded-md hover:bg-white font-bold font-Abel `}
          >
            {props.text}
          </div>
        </div>
      )}
    </>
  );
}
