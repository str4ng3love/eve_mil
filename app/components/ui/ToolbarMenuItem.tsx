interface Props {
  text: string;
  fn?: (e: React.PointerEvent<HTMLDivElement>) => void;
}

export default function ToolbarMenuItem(props: Props) {
  return (
    <>
      <div onClick={props.fn} className="h-[5rem] p-1 w-[5rem]">
        <div className="flex cursor-pointer text-center justify-center items-center w-full h-full hover:shadow-linkB  hover:bg-white hover:text-black ">{props.text}</div>
      </div>
    </>
  );
}
