"use client";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { LikeState } from "@prisma/client";
import {
  reqSetLike,
  reqSetDislike,
  reqRemoveLike,
} from "../../../services/setLikes";

interface Props {
id?: string | undefined;
state?: LikeState;
guideId?: string;
commentId?: string;
 
}

export default function Like({id, state, guideId, commentId}: Props) {
  const [like, setLike] = useState(state);

  const session = useSession();

  return (
    <>
      {session.data?.user ? (
      
        <div className="flex w-fit gap-4 p-4 h-fit">
          <div
            title="Like"
            onClick={() => {
            if(like === LikeState.LIKE){
              setLike(undefined)
              reqRemoveLike(guideId, commentId)
             } else {
              setLike(LikeState.LIKE)
              reqSetLike(guideId, commentId)
             }
            }}
            className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
          >
           
            {like ===LikeState.LIKE ? (
              <AiFillLike size={"1.3em"} />
            ) : (
              <AiOutlineLike size={"1.3em"} />
            )}
          </div>
          <div
            title="Dislike"
            onClick={() => {
              if(like === LikeState.DISLIKE){
                setLike(undefined)
                reqRemoveLike(guideId, commentId)
               } else {
                setLike(LikeState.DISLIKE)
                reqSetDislike(guideId, commentId)
               }
            }}
            className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
          >
            {like === LikeState.DISLIKE ? (
              <AiFillDislike size={"1.3em"} />
            ) : (
              <AiOutlineDislike size={"1.3em"} />
            )}
  
          </div>
        </div>
      ) : (
        <div className="flex justify-between w-fit items-center gap-4 p-4">
          <div
            title="Like"
            onClick={() => {
              signIn();
            }}
            className="hover:bg-white hover:text-black rounded-md p-1  cursor-pointer"
          >
           <AiOutlineLike />
          </div>
          <div
            title="Dislike"
            onClick={() => {
              signIn();
            }}
            className="hover:bg-white hover:text-black rounded-md p-1  cursor-pointer"
          >
          <AiOutlineDislike />
          </div>
        </div>
      )}
    </>
  );
}
