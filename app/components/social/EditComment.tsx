"use client";

import { signIn, useSession } from "next-auth/react";
import Button, { BType } from "../ui/Button";
import { useState } from "react";
interface Props {
  commentId: string;
}

export default function DeleteComment({ commentId }: Props) {
  const [showEdit, setShowEdit] = useState(false);
  const session = useSession();
  const EraseComment = async (ID: string) => {
    try {
      const resp = await fetch("/api/delete_comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ID),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!session.data?.user ? (
        <Button
          text="="
          type={BType.button}
          handleClick={(e) => {
            signIn();
          }}
        />
      ) : (
        <div className="relative group">
      
          <Button
            text="="
            type={BType.button}
            handleClick={(e) => {
              setShowEdit(!setShowEdit);
            }}
          />
          {
          <div className=" absolute items-center flex flex-col bg-black top-[0%] left-[50%] translate-x-[-50%] group-hover:-translate-x-[]">
            <span className="p-1">edit</span>
            <span className="p-1">delete</span>
          </div>

          }
        </div>
      )}
    </>
  );
}
