type Props = {
    text:string;
}

export default function CoolestHeading(props:Props) {
    return(<h1 className="text-[2rem]  font-extrabold tracking-wider font-Abel m-8 ">{props.text}</h1>)
}