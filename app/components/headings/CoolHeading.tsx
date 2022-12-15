import Link from "next/link";
export enum TAlign {
  start= 'start',
  center= 'center',
  end = 'end'
}
type Props = {
  text: string;
  url?: string;
  align?: TAlign;
};

export default function CoolHeading(props: Props) {
  if (props.url) {
    return (
      <>
        <Link href={props.url}>
          <h2
            className={`text-[1.25rem] ${
              props.align ? `text-${props.align}` : ""
            }  underline underline-offset-8 decoration-dotted decoration-slate-400 hover:no-underline  capitalize p-2 hover:rounded-md hover:-translate-y-1 hover:text-black hover:bg-white hover:shadow-link text-d hover:scale-105 transition-all duration-300 ease font-extrabold tracking-wider font-Abel my-4`}
          >
            {props.text}
          </h2>
        </Link>
      </>
    );
  }
  return (
    <h2
      className={`text-[1.25rem] ${
        props.align ? `text-${props.align}` : ""
      }  capitalize font-extrabold tracking-wider font-Abel my-4`}
    >
      {props.text}
    </h2>
  );
}
