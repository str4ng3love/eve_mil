import Link from "next/link";

export default function NavMenuItem(props: {
  description: string;
  destination?: string;
  ico?: object;
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  return (
    <>
      {props.destination ? (
        <Link href={props.destination}>
          <div
          
            className="m-[0.2rem] flex justify-center align-middle p-[1rem] capitalize bg-white text-black rounded-md hover:text-white hover:bg-black font-bold text-[1rem] hover:animate-pulseShadow"
          >
            <div className="flex justify-between w-full items-center ">
              <>
                {props.description}
                {props.ico}
              </>
            </div>
          </div>
        </Link>
      ) : (
        
          <div
            onClick={props.handleClick}
            className="m-[0.2rem] cursor-pointer flex justify-center align-middle p-[1rem] capitalize bg-white text-black rounded-md hover:text-white hover:bg-black font-bold text-[1rem] hover:animate-pulseShadow"
          >
            <div className="flex  justify-between w-full items-center">
              <>
                {props.description}
                {props.ico}
              </>
            </div>
          </div>
      
      )}
    </>
  );
}
