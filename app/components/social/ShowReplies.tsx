"use client";
import { useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";
import Replies from "./Replies";

interface Props {
  commentId: string;
  repliesAmount: number;
}
export default function ShowReplies({ commentId, repliesAmount }: Props) {
  const [displayReplies, setDisplayReplies] = useState(false);
  const [ShowReplies, setShowReplies] = useState(true)

  return (
    <div>
      {repliesAmount === 0 ? (
        <></>
      ) : (
        <>
          {repliesAmount === 1 ? (
            <>
              {displayReplies ? (
               <>
               {ShowReplies ? 
                <div
                onClick={(e) => {
                  setShowReplies(!ShowReplies)
                }}
                className="w-fit rounded-md py-1 px-2 flex font-bold text-blue-500 whitespace-pre-wrap items-center cursor-pointer hover:bg-slate-800 active:bg-slate-600 "
              >
                <span>{repliesAmount} reply </span>
                <span className="transition-transform rotate-0">
                  <MdArrowDropDownCircle />
                </span>
              </div>:
               <div
               onClick={(e) => {
                setShowReplies(!ShowReplies)
               }}
               className="w-fit rounded-md py-1 px-2 flex font-bold text-blue-500 whitespace-pre-wrap items-center cursor-pointer hover:bg-slate-800 active:bg-slate-600 "
             >
               <span>{repliesAmount} reply </span>
               <span className="transition-transform rotate-90">
                 <MdArrowDropDownCircle />
               </span>
             </div>}

               </>
              ) : (
                <div
                  onClick={(e) => {
                    setDisplayReplies(!displayReplies);
                  }}
                  className="w-fit rounded-md py-1 px-2 flex font-bold text-blue-500 whitespace-pre-wrap items-center cursor-pointer hover:bg-slate-800 active:bg-slate-600 "
                >
                  <span>{repliesAmount} reply </span>
                  <span className="transition-transform rotate-0">
                    <MdArrowDropDownCircle />
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              {displayReplies ? (
               <>
               {ShowReplies ? 
                <div
                onClick={(e) => {
                  setShowReplies(!ShowReplies)
                }}
                className="w-fit rounded-md py-1 px-2 flex font-bold text-blue-500 whitespace-pre-wrap items-center cursor-pointer hover:bg-slate-800 active:bg-slate-600 "
              >
                <span>{repliesAmount} replies </span>
                <span className="transition-transform rotate-90">
                  <MdArrowDropDownCircle />
                </span>
              </div>:
               <div
               onClick={(e) => {
                setShowReplies(!ShowReplies)
               }}
               className="w-fit rounded-md py-1 px-2 flex font-bold text-blue-500 whitespace-pre-wrap items-center cursor-pointer hover:bg-slate-800 active:bg-slate-600 "
             >
               <span>{repliesAmount} replies </span>
               <span className="transition-transform rotate-90">
                 <MdArrowDropDownCircle />
               </span>
             </div>}

               </>
              ) : (
                <div
                  onClick={(e) => {
                    setDisplayReplies(!displayReplies);
                  }}
                  className="w-fit rounded-md py-1 px-2 flex font-bold text-blue-500 whitespace-pre-wrap items-center cursor-pointer hover:bg-slate-800 active:bg-slate-600 "
                >
                  <span>{repliesAmount} replies </span>
                  <span className="transition-transform rotate-0">
                    <MdArrowDropDownCircle />
                  </span>
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* <Replies commentId={commentId}/> */}
      {displayReplies ? <>{ShowReplies ? <div className="visible"><Replies commentId={commentId}/></div> : <div className="hidden h-fit"><Replies commentId={commentId}/></div> }</>: <></> }
      
    </div>

  );
}
