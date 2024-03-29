import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  url: string;
  displayAnim?: boolean;
  animation?: string;
  img?: string;
};
export default function Card(props: Props) {
  return (
    //TODO somehow delay displaying of data so its in sync with the animation

    <Link href={props.url}>
      <div className={`${props.img} bg-no-repeat bg-cover  bg-center `}>
        <div
          style={{ animationFillMode: "none" }}
          className={`${
            props.displayAnim && props.animation
          } rounded-md p-4 min-w-[12rem] max-w-[18.75rem] h-[12.5rem] sm:w-[12.5rem] sm:h-[18.75rem] bg-black/80 flex flex-col justify-between shadow-backShadow transition ease duration-500 hover:scale-110 hover:text-black hover:bg-white hover:shadow-link`}
        >
          <h3 className="text-[1.25rem] font-bold font-Abel">
            {props.heading}
          </h3>
          <p className="overflow-hidden font-bold font-Abel max-h-[150px]">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
