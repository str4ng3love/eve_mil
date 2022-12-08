interface Props {
    text: string;

    elementsArray?: string[];

}

export default function ToolbarItem(props:Props) {

  return (
    <div className={`absolute  flex justify-center opacity-0 delay-300 rounded-md  bg-black/80 group-hover:opacity-100 group-hover:translate-x-[62%] ease-out transition-all duration-500 `}>
      <div className={`uppercase flex items-center justify-center transition-all duration-300 ease-out hover:shadow-linkB hover:text-black p-3 rounded-md hover:bg-white font-bold font-Abel select-none `}>{props.text}
      <div className={`flex transition-all duration-500  ease-out p-[05.rem] mx-1 justify-center items-start`}>{props.elementsArray?.map((el, index)=>(
        <div key={index} className="hover:bg-black select-none hover:text-white rounded-md p-4 m-1">{el}</div>
      ))}</div></div>
    </div>
  );
}
