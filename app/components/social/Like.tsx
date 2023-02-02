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
import SpinnerMini from "../ui/SpinnerMini";

interface Props {

  like?: number | boolean | null;
  dislike?: number | boolean | null;
  guideId?: string;
  commentId?: string;
  likesAmount?: number;
  dislikesAmount?: number;
}
// implement spinner
export default function Like({
 
  like,
  dislike,
  guideId,
  commentId,
  likesAmount,
  dislikesAmount,
}: Props) {
  const [likeState, setLikeState] = useState(like);
  const [dislikeState, setDislikeState] = useState(dislike);
  const [likesNum, setLikesNum] = useState(likesAmount || 0);
  const [dislikesNum, setDislikesNum] = useState(dislikesAmount || 0);

  const session = useSession();

  return (
    <>
    
      {session.status === 'authenticated' ? (
        <div className="flex justify-between w-fit items-center gap-4 p-4">
          <div
            title="Like"
            onClick={() => {
              if (likeState) {
                setLikeState(false);
                setLikesNum((prevState)=>(prevState - 1))
                return reqRemoveLike(guideId, commentId);
              }
              if (dislikeState) {
                setDislikeState(false);
                setDislikesNum((prevState)=> prevState - 1)
              }
              setLikeState(true);
              setLikesNum((prevState)=>(prevState + 1))
              reqSetLike(guideId, commentId);
            }}
            className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
          >
            {likeState == true ? (
              <div className="flex">
                <span className="mx-4 rounded-md">{likesNum}</span>
                <AiFillLike size={"1.3em"} />
              </div>
            ) : (
              <div className="flex">
                <span className="mx-4">{likesNum}</span>
                <AiOutlineLike size={"1.3em"} />
              </div>
            )}
          </div>
          <div
            title="Dislike"
            onClick={() => {
              if (dislikeState) {
                setDislikeState(false);
                setDislikesNum((prevState)=> prevState -1)
                return reqRemoveLike(guideId, commentId);
              }
              if (likeState) {
                setLikeState(false);
                setLikesNum((prevState)=> prevState - 1)
              }
              setDislikesNum((prevState)=> prevState +1)
              setDislikeState(true);
              reqSetDislike(guideId, commentId);
            }}
            className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
          >
            {dislikeState == true ? (
              <div className="flex">
              <AiFillDislike size={"1.3em"} />
                <span className="mx-4 rounded-md">{dislikesNum}</span>
              </div>
            ) : (
              <div className="flex">
              <AiOutlineDislike size={"1.3em"} />
                <span className="mx-4">{dislikesNum}</span>
              </div>
            )}
          </div>
        </div>
      ) : (<></>
      )}
    {session.status === 'unauthenticated' ? 
    
    <div className="flex justify-between w-fit items-center gap-4 p-4">
    <div 
      title="Like"
      onClick={() => {
        signIn();
      }}
      className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
    >
          {likeState == true ? (
              <div className="flex">
                <span className="mx-4 rounded-md">{likesNum}</span>
                <AiFillLike size={"1.3em"} />
              </div>
            ) : (
              <div className="flex">
                <span className="mx-4">{likesNum}</span>
                <AiOutlineLike size={"1.3em"} />
              </div>
            )}
    </div>
    <div
      title="Dislike"
      onClick={() => {
        signIn();
      }}
      className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
    >
        {dislikeState == true ? (
              <div className="flex">
              <AiFillDislike size={"1.3em"} />
                <span className="mx-4 rounded-md">{dislikesNum}</span>
              </div>
            ) : (
              <div className="flex">
              <AiOutlineDislike size={"1.3em"} />
                <span className="mx-4">{dislikesNum}</span>
              </div>
            )}
    </div>
  </div>: <></>}
  {session.status === 'loading' ? <><SpinnerMini /></>: <></>}
    </>
  );
}
