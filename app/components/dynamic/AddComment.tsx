"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button, { BType } from "../ui/Button";

export default function AddComment() {
  const [showForm, setShowForm] = useState(false);
  const [commentContent, setCommentContent] =useState('')
  const session = useSession()
  useEffect(()=>{
console.log(commentContent)
  }, [commentContent])
  return (
    <div className="w-full flex justify-center p-8">
      <div className="w-[80%] text-white">
        
        {!showForm  ?   (
          
          <Button
            handleClick={() => {
              if(session.data?.user){
                setShowForm(true);

              } else {
                signIn()
              }
            }}
            text={"Add a comment"}
            type={BType.button}
          />
        ) : (
          <>
            
            <div className="flex justify-between items-center">
              <div onInput={(e)=>setCommentContent(e.currentTarget.innerHTML)}

              //TODO edit text before saving ↑ 

                contentEditable="true"
                placeholder="Add a comment..."
                className="w-full  p-1 h-40 bg-stone-400  text-white resize-none border-b-2 border-white overflow-y-scroll"
              />
            </div>
            <div className="flex p-2 items-center justify-around">
              <Button
                handleClick={() => {}}
                text={"Comment"}
                type={BType.button}
              />
              <Button
                text="X"
                type={BType.erase}
                handleClick={() => {
                  setShowForm(false);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
