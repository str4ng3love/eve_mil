import Link from "next/link";
type Props = {
  text: string;
  url?: string;
  align?: string;
};

export default function CoolerHeading(props: Props) {
  if (props.url) {
    return (
      <>
        <Link href={props.url}>
          <h2
            className={`text-[1.5rem]  ${
              props.align ? `text-${props.align}` : ""
            }  transition-all duration-300 ease  underline underline-offset-8 decoration-dotted decoration-slate-400 p-2 capitalize hover:no-underline rounded-md hover:-translate-y-1 hover:text-black hover:bg-white hover:shadow-link hover:scale-105 font-extrabold tracking-wider font-Abel my-6`}
          >
            {props.text}
          </h2>
        </Link>
      </>
    );
  }
  return (
    <h2
      className={`text-[1.5rem] ${
        props.align ? `text-${props.align}` : ""
      }  capitalize font-extrabold tracking-wider font-Abel my-6`}
    >
      {props.text}
    </h2>
  );
}
