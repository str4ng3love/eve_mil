import React, { useState } from "react";
import Button, { BType } from "../ui/Button";
interface Props {
  cancelFn?: (e: React.PointerEvent<HTMLButtonElement>) => void;
  confirmFn?: (e: React.PointerEvent<HTMLButtonElement>) => void;
}
export default function Prompt({ cancelFn, confirmFn }: Props) {
  const [input, setInput] = useState("");

  return (
    <div
      className="font-Abel absolute top-0 left-[-50%] translate-x-[50%] w-full h-full backdrop-blur-sm"
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="p-4  bg-black/80 border-solid border-2 border-white/80 rounded-md">
          <div className="flex flex-col p-4 select-none">
            <span className="mb-4 text-lg">Please confirm by typing "DELETE".</span>
            <input
              className="text-black uppercase p-4"
              maxLength={6}
              autoFocus
              type="text"
              onInput={(e) => setInput(e.currentTarget.value.toUpperCase())}
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              {input === "DELETE" ? (
                <Button
                  type={BType.button}
                  text={"confirm"}
                  handleClick={confirmFn}
                />
              ) : (
                <Button type={BType.disabled} text={"confirm"} />
              )}
            </div>
            <Button type={BType.erase} text={"cancel"} handleClick={cancelFn} />
          </div>
        </div>
      </div>
    </div>
  );
}
