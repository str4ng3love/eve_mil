import { ReactNode } from "react";
import Link from "next/link";
type MenuProps = {
  description: string;
  destination?: string;
  ico?: React.ReactElement;
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: ReactNode;
};

export default function NavMenu(props: MenuProps) {
  if (props.destination) {
    return (
      <div className="group relative flex flex-col ">
        <Link className="z-20" href={props.destination}>
          <div className="border-b-2 border-black border-solid cursor-pointer whitespace-pre-wrap items-center flex font-Abel p-[0.75rem] uppercase bg-black text-white rounded-md hover:text-black hover:bg-white  hover:animate-pulseShadow group-hover:text-black group-hover:bg-white  group-hover:animate-pulseShadow  font-bold text-[1.5rem]">
            {props.description}
          </div>
        </Link>
        <div className="shadow-backShadow absolute invisible translate-y-[3.75rem] left-[50%] translate-x-[-50%]  bg-white rounded-md p-[0.01rem] group-hover:visible flex flex-col">
        {props.children}
      </div>
      </div>
    );
  }
  return (
    <div className="group relative flex flex-col">
      <div
        onClick={props.handleClick}
        className="z-20 border-b-2 border-black border-solid cursor-pointer whitespace-pre-wrap items-center flex font-Abel p-[0.75rem] uppercase bg-black text-white rounded-md hover:text-black hover:bg-white  hover:animate-pulseShadow group-hover:text-black group-hover:bg-white  group-hover:animate-pulseShadow  font-bold text-[1.5rem]"
      >
        {props.description}
      </div>
      <div className="shadow-backShadow absolute invisible translate-y-[3.75rem] left-[50%] translate-x-[-50%]  bg-white rounded-md p-[0.01rem] group-hover:visible flex flex-col">
        {props.children}
      </div>
    </div>
  );
}
