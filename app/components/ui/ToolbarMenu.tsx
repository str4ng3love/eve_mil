import ToolbarMenuItem from "./ToolbarMenuItem";
export enum EDir {
  xPositive = `translate-x`,
  xNegative = `-translate-x`,
  yPositive = `translate-y`,
  yNegative = `-translate-y`,
}
export enum ECur {
  pointer = "cursor-pointer",
  none = "cursor-none",
}
interface Props {
  components: {
    text: string;
    fn?: (e: React.PointerEvent<HTMLDivElement>) => void;
  }[];
  vertical?: boolean;
  cursor?: ECur;
  text: string;
  dir: EDir;
  xOffSet: string;
  handleClick?: (event: React.PointerEvent<HTMLDivElement>) => void;
}

export default function ToolbarMenu(props: Props) {
  let cLength = props.components.length * 5;
  let height = cLength.toString();
  let heightVar = height.concat(`rem`);

  return (
    <>
      <div
        className={`group-hover:${props.dir}-[5rem] group-hover:translate-x-[${props.xOffSet}]  absolute -translate-z-1 flex justify-center rounded-md group-hover:rounded-none h-[5rem] w-[5rem]
           bg-black/80 delay-150 ease-out transition-all duration-500`}
      >
        <div className={`group flex  flex-col w-[5rem] h-[5rem]`}>
          {props.cursor === ECur.pointer ? (
            <div
              onClick={props.handleClick}
              className={`${props.cursor} uppercase select-none flex flex-col items-center justify-center transition-all duration-1delay-150 ease-out hover:shadow-linkB hover:text-black w-full h-full  hover:bg-white font-bold font-Abel  `}
            >
              {props.text}
            </div>
          ) : (
            <div
              onClick={props.handleClick}
              className={`${props.cursor} uppercase select-none flex flex-col items-center justify-center transition-all duration-1delay-150 ease-out  w-full h-full  font-bold font-Abel  `}
            >
              {props.text}
            </div>
          )}

          {props.dir === EDir.yPositive ? (
          
              
              <div
                className={`absolute transition-height delay-300  h-0 group-hover:h-[${heightVar}] duration-100 ease-out overflow-hidden  bg-black/80 text-white font-Abel uppercase font-bold ${props.dir}-[5rem] `}
              >
                {props.components?.map((comp, index) => (
                  <ToolbarMenuItem text={comp.text} key={index} fn={comp.fn} />
                ))}
              </div>
           
          ) : (
            <></>
          )}
          {props.dir === EDir.yNegative ? (
            <div
              className={`absolute transition-height delay-300  h-0 group-hover:h-[${heightVar}] duration-100 ease-out overflow-hidden  bg-black/80 text-white font-Abel uppercase font-bold ${props.dir}-[5rem]`}
            >
              {props.components?.map((comp, index) => (
                <ToolbarMenuItem text={comp.text} key={index} fn={comp.fn} />
              ))}
            </div>
          ) : (
            <></>
          )}
          {props.dir === EDir.xPositive ? (
            <div
              className={`absolute transition-width delay-300 flex flex-row w-0 group-hover:w-[${heightVar}] duration-100 ease-out overflow-hidden bg-black/80 text-white font-Abel uppercase font-bold ${props.dir}-[5rem]`}
            >
              {props.components?.map((comp, index) => (
                <ToolbarMenuItem text={comp.text} key={index} fn={comp.fn} />
              ))}
            </div>
          ) : (
            <></>
          )}
          {props.dir === EDir.xNegative ? (
            <div
              className={`absolute transition-width delay-300 flex flex-row w-0 group-hover:w-[${heightVar}] duration-100 ease-out overflow-hidden bg-black/80 text-white font-Abel uppercase font-bold ${props.dir}-[5rem]`}
            >
              {props.components?.map((comp, index) => (
                <ToolbarMenuItem text={comp.text} key={index} fn={comp.fn} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
