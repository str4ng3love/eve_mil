
import Button from "../ui/Button";
import { BType } from "../ui/Button";
export enum EType {
  Subtitle = "Subtitle",
  Paragraph = "Paragraph",
  Img = "Image",
  Video ="Video",
}
interface Props {
  type: EType;
  id: string;
  text?:string;
  handleClick?: (event: React.PointerEvent<HTMLDivElement>) => void;
  handleErase?: (
    event: React.PointerEvent<HTMLButtonElement>
  ) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

}

export default function FormComponent(props: Props) {
  return (
    <>
      {props.type === "Subtitle" ? (
        <div id={props.id} className="flex w-[100%] justify-center items-center p-2 mx-2 ">
          <label className="font-bold p-2 w-[14ch]">Subtitle</label>
          <input value={props.text} onChange={props.handleChange} className="w-[70%] p-2 text-black resize-none  rounded-md" />
          <Button text="X" handleClick={props.handleErase} type={BType.erase} />
        </div>
      ) : (
        <></>
      )}
      {props.type ===  "Paragraph" ? (
        <div id={props.id} className="flex w-[100%] justify-center items-center p-2 mx-2 ">
          <label className="font-bold p-2 w-[14ch]">Paragraph</label>
          <textarea value={props.text} onChange={props.handleChange} className="w-[70%] p-2 text-black min-h-[5rem] max-h-[20rem]  rounded-md" />
          <Button text="X" handleClick={props.handleErase} type={BType.erase} />
        </div>
      ) : (
        <></>
      )}
      {props.type === "Image" ? (
        <div id={props.id} className="flex w-[100%] justify-center items-center p-2 mx-2 ">
          <label className="font-bold p-2 w-[14ch]">Image</label>
          <input value={props.text} onChange={props.handleChange} className="w-[70%] p-2 text-black resize-none rounded-md " />
          <Button text=" X " handleClick={props.handleErase} type={BType.erase} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
