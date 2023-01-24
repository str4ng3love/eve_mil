"use client";
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from "react-icons/ai";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import {
  reqSetLike,
  reqSetDislike,
  reqRemoveLike,
} from "../../../services/setLikes";

interface Props {
id?: string | undefined;
like?: boolean | null;
dislike?: boolean | null;
guideId?: string;
commentId?: string;
likesAmount?: number;
 
}

export default function Like({id, like , dislike, guideId, commentId, likesAmount}: Props) {
  const [likeState, setLikeState ] = useState(like)
  const [dislikeState, setDislikeState ] = useState(dislike)

  const session = useSession();

  return (
    <>
      {session.data?.user ? (
      
        <div className="flex w-fit gap-4 p-4 h-fit">
          <div
            title="Like"
            onClick={() => {
            if(likeState === true){
              setLikeState(false)
              reqRemoveLike(guideId, commentId)
             } else {
              setLikeState(true)
              reqSetLike(guideId, commentId)
             }
            }}
            className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
          >
           
            {likeState  ? (
              <AiFillLike size={"1.3em"} />
            ) : (
              <AiOutlineLike size={"1.3em"} />
            )}
          </div>
          <div
            title="Dislike"
            onClick={() => {
              if(dislikeState === true ){
                setDislikeState(false)
                reqRemoveLike(guideId, commentId)
               } else {
                setDislikeState(true)
                reqSetDislike(guideId, commentId)
               }
            }}
            className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
          >
            {like === dislikeState ? (
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
