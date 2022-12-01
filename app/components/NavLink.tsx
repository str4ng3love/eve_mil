import Link from "next/link"

export default function NavLink(props:{description: string, destination: string}) {
  return (
    <>
      <li className="m-[0.2rem] p-[0.3rem] border-black border-solid border-[0.1rem]">
        <Link href={props.destination}>{props.description}</Link>
      </li>
    </>
  );
}
