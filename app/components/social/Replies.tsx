"use client";

import SpinnerMini from "../ui/SpinnerMini";
import { useReplies } from "../../../services/useReplies";
import Reply from "./Reply";
import ShowReplies from "./ShowReplies";
import TimeDifference from "../../../hooks/TimeDifference";

interface Props {
  commentId: string;
  
}
//TODO: learn about mutation, implement swr revalidation
export default function Replies({ commentId }: Props) {
  const { replies, isLoading, isError } = useReplies(commentId);

  const compareFN = (a:any,b:any)=>{
    let sorterA = a.createdAt;
    let sorterB = b.createdAt;
    if (sorterA > sorterB) {
     return -1;
   }
   if (sorterA < sorterB) {
     return +1;
   }

   return 0;
}

  if (isLoading) {
    return <SpinnerMini />;
  }
  if (isError) {
    return <span>Could not fetch.</span>;
  }
  return (
    <>
      {replies?.children.sort(compareFN).map((reply) => (
        
          <div
            key={reply.id}
            className={`border-dashed border-l-2 border-slate-500 flex flex-col w-full pl-4 mb-1 font-Abel bg-slate-900`}
          >
            <div className="whitespace-pre-wrap w-full flex flex-col justify-start">
              <div className="flex justify-between">
                <span className="p-1 font-bold">{reply.author}</span>
                {!reply.updatedAt ? (
                  // change date from string to Date
                  <span className="p-1">{TimeDifference(Date.now(), parseInt(reply.createdAt))}</span>
                ) : (
                  <span className="p-1">
                    (edited) {TimeDifference(Date.now(), parseInt(reply.createdAt))}
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
