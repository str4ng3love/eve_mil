"use client";
import { signIn } from "next-auth/react";
import Button, { BType } from "./ui/Button";

export default function LoginButton() {
  return (
   
        <Button
          text="Log In"
          type={BType.button}
          handleClick={(e) => signIn()}
        />
      

  );
}
