import Link from "next/link";

export default function NavMenuItem(props: {
  description: string;
  destination: string;
}) {
  return (
    <>
      <Link href={props.destination}>
        <div className="m-[0.2rem] align-middle p-[1rem] capitalize bg-white text-black rounded-md hover:text-white hover:bg-black font-bold text-[1rem] hover:animate-pulseShadow">
          {props.description}
        </div>
      </Link>
    </>
  );
}
