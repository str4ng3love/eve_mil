import Link from "next/link";
import FormatDate from "../../../lib/FormatDate";

type Props = {
  heading: string;
  description: string;
  url: string;
  displayAnim?: boolean;
  animation?: string;
  category: string;
  createdAt?: string;
  authorName?: string;
};
export default function GridCard(props: Props) {


  return (
    <Link href={props.url}>
      <div
        style={{ animationFillMode: "none" }}
        className={`${
          props.displayAnim && props.animation
        }  group font-Abel  rounded-md p-4 h-32 bg-black/80 flex flex-col justify-between shadow-backShadow transition ease duration-500 hover:scale-105 hover:text-black hover:bg-white hover:shadow-link`}
      >
        <h3 className="first-letter:capitalize text-[1.25rem] leading-6 overflow-hidden font-bold font-Abel">
          {props.heading}
        </h3>
        <div className="flex justify-between">
          <p className=" mx-1 ">{props.category}</p>
          <p className="overflow-hidden font-bold font-Abel max-h-[150px]">
            by {props.authorName}
          </p>
        </div>
        <p className="font-Abel ">{FormatDate(props.createdAt as string)}</p>

        <div className=" invisible absolute z-50 left-[50%] translate-x-[-50%] translate-y-[75%] shadow-wrapperShadow group-hover:visible flex flex-col items-center justify-center p-2 rounded-md bg-white w-max md:max-w-md max-w-[16rem]">
          <span className="font-bold font-Abel first-letter:capitalize ">{props.heading}</span>
          <span className="first-letter:capitalize ">{props.description}</span>
        </div>
      </div>
    </Link>
  );
}
