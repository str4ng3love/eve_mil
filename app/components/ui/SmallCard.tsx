import Link from "next/link";
type Props = {
  heading: string;
  url: string;
  displayAnim?: boolean;
  animation?: string;
};
export default function SmallCard(props:Props) {
  return (
    //TODO somehow delay displaying of data so its in sync with the animation
    <div className="flex justify-center">
    <Link href={props.url}>
      <div
        style={{ animationFillMode: "none" }}
        className={`${
          props.displayAnim && props.animation
        } active:bg-slate-300 rounded-md p-1  w-[10rem] h-[4rem] bg-black/80 flex flex-col justify-between shadow-backShadow transition ease duration-500 hover:scale-110 hover:text-black hover:bg-white hover:shadow-link`}
      >
        <h3 className="text-[1.25rem] font-bold font-Abel">{props.heading}</h3>
    
      </div>
    </Link>
    </div>
  );
}
