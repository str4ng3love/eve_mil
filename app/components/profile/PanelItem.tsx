"use client";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import Link from "next/link";
import { DeleteGuide } from "../../../hooks/ProfileHooks";
import { useState } from "react";
import Prompt from "./Prompt";
interface Props {
  id: string;
  title: string;
  likesAmount: number;
  dislikesAmount: number;
  commentsAmount: number;
}

export default function PanelItem({
  id,
  title,
  likesAmount,
  dislikesAmount,
  commentsAmount,
}: Props) {
  const [prompt, setPrompt] = useState(false);
 
  return (
    <div key={id} className="flex w-full justify-between bg-black/80 p-4">
      <div className="flex justify-between items-center w-full">
        <Link
          className=" active:bg-slate-300 rounded-md text-ellipsis p-4 w-full mx-4 hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105 "
          href={`/guides/community/${title}`}
        >
          {title}
        </Link>
        <div className="flex ">
          <div
            className="flex justify-evenly items-center gap-1
        "
          >
            <span className="cursor-pointer active:bg-slate-300  p-4 rounded-md text-center hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105">
              edit
            </span>
            <span
              onPointerDown={(e) => {
                setPrompt(true);
          
              }}
              className="cursor-pointer active:bg-slate-300 p-4 rounded-md text-center hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105"
            >
              Delete
            </span>
          </div>
          <div className="flex items-center">
            <div className="rounded-md p-2 md:p-4 flex whitespace-pre-wrap  items-center">
              <span>{likesAmount} </span>
              <AiOutlineLike />
            </div>
            <div className="rounded-md p-2 md:p-4  flex whitespace-pre-wrap  items-center">
              <span>{dislikesAmount} </span>
              <AiOutlineDislike />
            </div>
            <div className="rounded-md p-2 md:p-4  flex whitespace-pre-wrap  items-center">
              <span>{commentsAmount} </span>
              <AiOutlineComment />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {prompt ? (
        <Prompt
          cancelFn={(e) => setPrompt(false)}
          confirmFn={(e) => DeleteGuide(id)}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
