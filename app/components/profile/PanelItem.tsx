"use client";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import Prompt from "./Prompt";
import FormatDate from "../../../hooks/FormatDate";
import EditComment from "./EditComment";
interface Props {

  handleDelete?: (id:string) => void;
  id: string;
  title?: string;
  message?: string;
  likesAmount: number;
  dislikesAmount: number;
  commentsAmount?: number;
  repliesAmount?: number;
  createdAt: number;
}

export default function PanelItem({
  handleDelete,
  id,
  title,
  likesAmount,
  dislikesAmount,
  commentsAmount,
  repliesAmount,
  message,
  createdAt,
}: Props) {
  const [prompt, setPrompt] = useState(false);
  const [showCommentEdit, setShowCommentEdit]= useState(false)
  let date = FormatDate(createdAt.toString());
  return (
    <div key={id} className="flex w-full justify-between bg-black/80 p-4">
      <div className="flex  justify-between items-center h-min w-full ">
        {title ? (
          <Link
            title={date.toString()}
            className="active:bg-slate-300 rounded-md p-4 w-full mx-4 hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105 hover:shadow-link overflow-hidden whitespace-nowrap"
            href={`/guides/community/${title}`}
          >
            {title}
          </Link>
        ) : (
          <Link
            title={date.toString()}
            className="active:bg-slate-300 rounded-md p-4 w-full mx-4 hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105 hover:shadow-link overflow-hidden whitespace-nowrap"
            href={`#`}
          >
            {message
              ?.replaceAll("</div>", `\n`)
              .replaceAll("<div>", "")
              .replaceAll("<br>", " ")
              .replaceAll("&nbsp;", " ")}
          </Link>
        )}
        <div className="flex ">
          <div
            className="flex justify-evenly items-center gap-1
        "
        >{ message ?    <span onPointerDown={(e)=>{setShowCommentEdit(true)}}
        className="cursor-pointer active:bg-slate-300  p-4 rounded-md text-center hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105 hover:shadow-link">
          edit
        </span> : <></>
          }
          { title ? <span onPointerDown={(e)=>{}}
        className="cursor-pointer active:bg-slate-300  p-4 rounded-md text-center hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105 hover:shadow-link">
          edit
        </span>: <></> }

         
            <span
            onPointerDown={(e) => {
              setPrompt(true);
            }}
            className="cursor-pointer active:bg-slate-300 p-4 rounded-md text-center hover:bg-white hover:text-black transition-all duration-200 ease-linear hover:scale-105 hover:shadow-link"
            >
              Delete
            </span>
          </div>
          <div className="flex items-center">
            <div title="Likes" className="rounded-md p-2 md:p-4 flex whitespace-pre-wrap  items-center">
              <span>{likesAmount} </span>
              <AiOutlineLike />
            </div>
            <div title="Dislikes" className="rounded-md p-2 md:p-4  flex whitespace-pre-wrap  items-center">
              <span>{dislikesAmount} </span>
              <AiOutlineDislike />
            </div>
            {repliesAmount === undefined ? (
              <div title="Comments" className="rounded-md p-2 md:p-4  flex whitespace-pre-wrap  items-center">
                <span >{commentsAmount} </span>
                <AiOutlineComment />
              </div>
            ) : (
              <div title="Replies" className="rounded-md p-2 md:p-4  flex whitespace-pre-wrap  items-center">
                <span >{repliesAmount} </span>
                <AiOutlineComment />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {prompt ? (
        <Prompt
          cancelFn={(e) => {   document.body.classList.remove('overflow-hidden');setPrompt(false)}}
          confirmFn={(e) => {
            document.body.classList.remove('overflow-hidden');
            
            if (title) {
              setPrompt(false);
              if(handleDelete)
              handleDelete(id) 
          
            
            } else if (message) {
              setPrompt(false);
              if(handleDelete)
              handleDelete(id) 
          
            }
          }}
        />
      ) : (
        <></>
      )}
      {showCommentEdit ? <EditComment message={message as string} cancelFn={(e)=>{setShowCommentEdit(false);document.body.classList.remove('overflow-hidden');}}/> :<></>}
    </div>
  );
}
