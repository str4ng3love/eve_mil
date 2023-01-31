"use client";

import { useState, useEffect } from "react";
import SpinnerMini from "../ui/SpinnerMini";
import { useReplies } from "../../../services/useReplies";
import Reply from "./Reply";
import ShowReplies from "./ShowReplies";

interface Props {
  commentId: string;
  
}

export default function Replies({ commentId }: Props) {
  const { replies, isLoading, isError } = useReplies(commentId);



  if (isLoading) {
    return <SpinnerMini />;
  }
  if (isError) {
    return <span>Could not fetch.</span>;
  }
  return (
    <>
      {replies?.children.map((reply) => (
        
          <div
            key={reply.id}
            className={`border-dashed border-l-2 border-slate-500 flex flex-col w-full pl-4 mb-1 font-Abel bg-slate-900`}
          >
            <div className="whitespace-pre-wrap w-full flex flex-col justify-start">
              <div className="flex justify-between">
                <span className="p-1 font-bold">{reply.author}</span>
                {!reply.updatedAt ? (
                  // change date from string to Date
                  <span className="p-1">{reply.createdAt.slice(0, 25)}</span>
                ) : (
                  <span className="p-1">
                    (edited) {reply.createdAt.slice(0, 25)}
                  </span>
                )}
              </div>
              <span className="p-1">{reply.message.replaceAll("</div>", `\n`)
    .replaceAll("<div>", "")
    .replaceAll("<br>", " ")
    .replaceAll("&nbsp;", " ")}</span>
            </div>

            <div className="flex items-start justify-between">
              <Reply commentId={reply.id} like={reply.like.length} likeNum={reply._count.like} dislike={reply.dislikes.length} dislikeNum={reply._count.dislikes} /> 
            </div>
              <ShowReplies commentId={reply.id} repliesAmount={reply._count.children}/>
          </div>
     
      ))}

   
    </>
  );
}
