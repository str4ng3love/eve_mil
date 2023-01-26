"use client";

import { signIn, useSession } from "next-auth/react";
import Button, { BType } from "../ui/Button";

interface Props {
  commentId: string;
}

export default function DeleteComment({ commentId }: Props) {
  const session = useSession();

  const EraseComment = async (ID: string) => {
    try {
        const resp = await fetch('/api/delete_comment', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        ,
        body: JSON.stringify(ID)
        })

    } catch (error) {
        console.log(error)
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
        <Button
          text="="
          type={BType.button}
          handleClick={(e) => {
            EraseComment(commentId);
          }}
        />
      )}
    </>
  );
}
