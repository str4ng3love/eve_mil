"use client";
import { useEffect, useState } from "react";
import CoolerHeading from "../headings/CoolerHeading";
import { TAlign } from "../headings/CoolestHeading";
import Button, { BType } from "../ui/Button";
interface Props {
  message: string;
  cancelFn: (e: React.PointerEvent<HTMLElement>) => void;
}

export default function EditComment({ cancelFn, message }: Props) {
  let messageCopy = message;
  const [editedComment, setEditedComment] = useState("");
  const [topValue, setTopValue] =useState<string>()
// really confused about matching top position of absolute element with window's position|user window.scrollTo() instead
  useEffect(() => {
 
    window.scrollTo(0,0)
    document.body.classList.add('overflow-hidden')
 
  }, []);
  return (
    <>
      <div className={`absolute top-[0] left-[-50%] translate-x-[50%] w-full h-[100%] backdrop-blur-sm `}>
        <div className="flex sticky flex-col justify-center items-center w-full h-full bg-black/80 min-w-[560px]">
        <CoolerHeading align={TAlign.center} text="edit comment"/>
          <div
            onInput={(e) => setEditedComment(e.currentTarget.innerHTML)}
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="w-[75%] min-w-[500px] p-1 h-40 bg-stone-400  text-white resize-none border-b-2 border-white overflow-y-scroll
                "
          >
            {messageCopy}
          </div>
          <div>
            <Button text="submit" type={BType.button} handleClick={(e)=>{}}/>
            <Button text="cancel" type={BType.erase} handleClick={cancelFn} />
          </div>
        </div>
      </div>
    </>
  );
}
