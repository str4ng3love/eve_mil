"use client";

import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Button, { BType } from "../ui/Button";

interface Props {
  guideId?:string;
  commentId?:string;
  butText?: string;
  submitText?:string;
}
export default function AddComment({guideId, commentId, butText, submitText}: Props) {
  const [showForm, setShowForm] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const session = useSession();

  const handleAddComment = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const comment = {
      content: commentContent,
      guideId: guideId,
      commentId: commentId
    };
      
      try {
      const resp = await fetch("/api/comments/add_comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      //debug
      const data = await resp.json()
      console.log(data)
    } catch (error) {
      console.log(error);
    }
    
 
  };
  return (
    <div className="w-full flex justify-center p-8">
      <div className="w-[80%] text-white">
        {!showForm ? (
          <Button
            handleClick={() => {
              if (session.data?.user) {
                setShowForm(true);
              } else {
                signIn();
              }
            }}
            text={butText as string}
            type={BType.button}
          />
        ) : (
          <>
            <div className="flex justify-between items-center">
              
                <div
                  onInput={(e) => setCommentContent(e.currentTarget.innerHTML)}
              

                  contentEditable="true"
                  placeholder="Add a comment..."
                  className="w-full  p-1 h-40 bg-stone-400  text-white resize-none border-b-2 border-white overflow-y-scroll"
                />
              
            </div>
            <div className="flex p-2 border-white justify-evenly items-center font-bold font-Abel ">
           
                <Button
                  handleClick={(e) => {
                    if (commentContent.length >= 1) {
                      handleAddComment(e);
                      setCommentContent('')
                      setShowForm(false)
                    }
                  }}
                  text={submitText as string}
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
