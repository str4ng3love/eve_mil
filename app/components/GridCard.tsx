import Link from "next/link";

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
    //TODO somehow delay displaying of data so its in sync with the animation
   
    <Link href={props.url}>
      <div title={props.description} style={{animationFillMode: 'none'}} className={`${props.displayAnim && props.animation} rounded-md p-4 h-32 bg-black/80 flex flex-col justify-between shadow-backShadow transition ease duration-500 hover:scale-105 hover:text-black hover:bg-white hover:shadow-link`}>
        <h3 className="text-[1.25rem] font-bold font-Abel">{props.heading}</h3>
        <div className="flex justify-between">
        <p>{props.category}</p>
        <p className="overflow-hidden font-bold font-Abel max-h-[150px]">
         by {props.authorName}
        </p>
        </div>
        <p>{props.createdAt}</p>
      </div>
    </Link>
    
  );
}
