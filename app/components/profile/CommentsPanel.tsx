"use client";

import useUserComments from "../../../hooks/useUserComments";
import SpinnerMini from "../ui/SpinnerMini";
import PanelItem from "./PanelItem";

import {useState, useEffect} from 'react'

export default function CommentsPanel() {

  const [revalidate, setRevalidate] = useState(false)
  const { comments, isLoading, isError, mutate, isValidating } = useUserComments();

  // useEffect(()=>{
  //   console.log(comments);
  // //  mutate()
  // }, [revalidate])

  if (isError) {
    return <span>Error Loading Data.</span>;
  }
  if (isLoading|| isValidating) {
    return (
      <div className="p-4 flex justify-center w-full border-dashed border-2 rounded-md border-white/80">
        <SpinnerMini />
      </div>
    );
  }
  return (
    <div className="w-full capitalize border-dashed border-2 border-white/80 flex flex-col items-center justify-between rounded-md">
    {comments ? (
      comments.map((comment) => (
       <PanelItem revFn={(e)=>{mutate();setRevalidate(!revalidate);console.log('mutating...')}} createdAt={comment.createdAt} id={comment.id} key={comment.id} message={comment.message} likesAmount={comment._count.likes} dislikesAmount={comment._count.dislikes} repliesAmount={comment._count.children}/>
      ))
    ) : (
      <></>
    )}
  </div>
  );
}
