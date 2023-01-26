"use client";
import Like from "./Like";
import Button, { BType } from "../ui/Button";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
interface Props {
  commentId: string;
  like: number | boolean | null;
  dislike: number | boolean | null;
  likeNum: number | null;
  dislikeNum: number | null;
}
export default function Reply({
  commentId,
  dislike,
  dislikeNum,
  like,
  likeNum,
}: Props) {
  const [reply, setReply] = useState(false);
  const session = useSession();
  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-start items-center">
        <Like
          commentId={commentId}
          like={like}
          likesAmount={likeNum as number}
          dislike={dislike}
          dislikesAmount={dislikeNum as number}

        />
        {session.data?.user ? (
          <span
            onClick={() => setReply(true)}
            className=" cursor-pointer hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md px-4 py-1 font-bold"
          >
            reply
          </span>
        ) : (
          <span
            onClick={() => signIn()}
            className=" cursor-pointer hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md px-4 py-1  font-bold"
          >
            reply
          </span>
        )}
      </div>
      {reply ? (
        <div className="flex flex-col items-end w-full">
          <div
            contentEditable="true"
            className="w-full min-h-[2rem] p-4 text-white resize-none border-b-2 border-white"
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
