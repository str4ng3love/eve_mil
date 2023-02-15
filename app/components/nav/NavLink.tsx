import Link from "next/link";

export default function NavLink(props: {
  description: string;
  destination: string;
}) {
  return (
    <>
      <li>
        <Link href={props.destination}>
          <div className="border-b-2 border-black border-solid  p-[0.75rem]  font-Abel capitalize bg-black text-white rounded-md hover:text-black hover:bg-white font-bold text-[1.5rem] hover:animate-pulseShadow">
            {props.description}
          </div>
        </Link>
      </li>
    </>
  );
}
