import Link from "next/link";
type Props = {
  text: string;
  url?: string;
  align?: string;
};

export default function CoolHeading(props: Props) {
  if (props.url) {
    return (
      <>
        <Link href={props.url}>
          <h1
            className={`text-[2rem]  ${
              props.align ? `text-${props.align}` : ""
            } text-center underline underline-offset-8 decoration-dotted decoration-slate-400 hover:no-underline  capitalize p-2 hover:rounded-md hover:-translate-y-1 hover:text-black hover:bg-white hover:shadow-link text-d hover:scale-105 transition-all duration-300 ease font-extrabold tracking-wider font-Abel my-8`}
          >
            {props.text}
          </h1>
        </Link>
      </>
    );
  }
  return (
    <h1
      className={`text-[2rem]  ${
        props.align ? `text-${props.align}` : ""
      } text-center  capitalize font-extrabold tracking-wider font-Abel my-8`}
    >
      {props.text}
    </h1>
  );
}
