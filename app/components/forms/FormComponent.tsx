
import Button from "../ui/Button";
import { BType } from "../ui/Button";
export enum EType {
  subtitle,
  paragraph,
  img,
  video,
}
interface Props {
  type: EType;
  id: string;
  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleErase?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

}

export default function FormComponent(props: Props) {
  return (
    <>
      {props.type === 0 ? (
        <div id={props.id} className="flex w-[100%] justify-center items-center p-2 mx-2 ">
          <label className="font-bold p-2 w-[14ch]">Subtitle</label>
          <input onChange={props.handleChange} className="w-[70%] p-2 text-black resize-none  rounded-md" />
          <Button text="X" handleClick={props.handleErase} type={BType.erase} />
        </div>
      ) : (
        <></>
      )}
      {props.type === 1 ? (
        <div id={props.id} className="flex w-[100%] justify-center items-center p-2 mx-2 ">
          <label className="font-bold p-2 w-[14ch]">Paragraph</label>
          <textarea onChange={props.handleChange} className="w-[70%] p-2 text-black min-h-[5rem] max-h-[20rem]  rounded-md" />
          <Button text="X" handleClick={props.handleErase} type={BType.erase} />
        </div>
      ) : (
        <></>
      )}
      {props.type === 2 ? (
        <div id={props.id} className="flex w-[100%] justify-center items-center p-2 mx-2 ">
          <label className="font-bold p-2 w-[14ch]">Image</label>
          <input onChange={props.handleChange} className="w-[70%] p-2 text-black resize-none rounded-md " />
          <Button text=" X " handleClick={props.handleErase} type={BType.erase} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
