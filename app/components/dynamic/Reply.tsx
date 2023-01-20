"use client";
import Like from "./Like";
import Button, { BType } from "../ui/Button";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
interface Props {
  commentId: string;
}
export default function Reply({commentId}: Props) {
  const [reply, setReply] = useState(false);
  const session = useSession();
  return (
    <div className="w-full ">
      <div className="w-full p-1 flex justify-start items-center">
      <Like commentId={commentId}/>
        {session.data?.user ? (
          <span
            onClick={() => setReply(true)}
            className="cursor-pointer hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1 font-bold"
          >
            reply
          </span>
        ) : (
          <span
            onClick={() => signIn()}
            className="cursor-pointer hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1 font-bold"
          >
            reply
          </span>
        )}
        {reply ? (
          <Button
            type={BType.erase}
            text={"x"}
            handleClick={() => setReply(false)}
          />
        ) : (
          <></>
        )}
      </div>
      {reply ? (
        <div className="flex flex-col items-end w-full">
          <div
            contentEditable="true"
            className="w-full p-1 min-h-[2rem] text-white resize-none border-b-2 border-white"
          />
          <div>
            <Button type={BType.button} text={"reply"} />
            <Button
            type={BType.erase}
            text={"x"}
            handleClick={() => setReply(false)}
          />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
