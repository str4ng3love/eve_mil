"use client";
import { useEffect, useState } from "react";
import CoolerHeading from "../headings/CoolerHeading";
import { TAlign } from "../headings/CoolestHeading";
import Button, { BType } from "../ui/Button";
interface Props {
  message: string;
  id: string;
  index: number;
  cancelFn: (e: React.PointerEvent<HTMLElement>) => void;
  editFn: {edit:(id:string, message:string, index: number) => void;
           setShow: (bool:boolean) => void;     
    }
}

export default function EditComment({editFn, cancelFn, message, id, index }: Props) {
  let messageCopy = message;
  const [editedComment, setEditedComment] = useState("");
 
  const handleEdit=()=>{

    editFn.edit(id, editedComment, index)
    editFn.setShow(false)
  }

// really confused about matching top position of absolute element with window's position|used window.scrollTo() instead
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
            className="whitespace-pre-wrap  w-[75%] min-w-[500px] p-1 h-[60%] bg-stone-400  text-white  border-b-2 border-white overflow-y-scroll
                "
          >
            {messageCopy?.replaceAll("</div>", `\n`)
              .replaceAll("<div>", "")
              .replaceAll("<br>", " ")
              .replaceAll("&nbsp;", " ")}
          </div>
          <div>
         {/* TODO edit comment fn */}
            <Button text="submit" type={BType.button} handleClick={handleEdit}/>
            <Button text="cancel" type={BType.erase} handleClick={cancelFn} />
          </div>
        </div>
      </div>
    </>
  );
}
