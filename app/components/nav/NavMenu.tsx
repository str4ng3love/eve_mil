import { ReactNode } from "react";

type MenuProps = {
  description: string;
  destination?: string;
  ico?: React.ReactElement;
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> void;
  children?: ReactNode;
};

export default function NavMenu(props: MenuProps) {
  return (
    <>
      <div onClick={props.handleClick} className="group cursor-pointer whitespace-pre-wrap items-center flex font-Abel p-[0.75rem] uppercase bg-black text-white rounded-md hover:text-black hover:bg-white font-bold text-[1.5rem] hover:animate-pulseShadow">
        {props.description}{props.ico}

        <div className="hidden absolute translate-y-[9.5rem] -translate-x-[3rem] bg-white rounded-md p-[0.01rem] group-hover:flex flex-col">
          {props.children}
        </div>
      </div>
    </>
  );
}
