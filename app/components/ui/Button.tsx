"use client";
import Link from "next/link";

type Props = {
  type: string;
  text: string;
  url?: string;
 handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  
};

export default function Button({ type, text, url, handleClick }: Props) {
  return (
    <>
      {type === "submit" ? (
        <button
          className="h-fit p-4 m-4 uppercase font-bold font-Abel transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-link w-fit rounded-md bg-black/80 text-white "
          onClick={(e) => e.preventDefault()}
          type={type}
        >
          {text}
        </button>
      ) : (<>
        
        <button onClick={handleClick}
          className="h-fit p-4 m-4 uppercase font-bold font-Abel transition-all ease duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-link w-fit rounded-md bg-black/80 text-white "
          type="button"
        >
          {text}
        </button>
     </> )}
    </>
  );
}
