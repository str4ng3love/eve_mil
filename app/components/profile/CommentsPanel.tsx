"use client";

import useUserComments, { CommentData } from "../../../hooks/useUserComments";
import SpinnerMini from "../ui/SpinnerMini";
import PanelItem from "./PanelItem";
import { DeleteComment, EditComment } from "../../../hooks/ProfileHooks";

export default function CommentsPanel() {

  const { comments, isLoading, isError, mutate, isValidating } = useUserComments();

  // 
const deleteComment = async (id:string) =>{
  const filteredComments = comments?.filter(comment => comment.id !==id)
  const newData:CommentData[] = filteredComments as CommentData[]

  const options = {
    optimisticData: newData,
    rollbackOnError: true,
    populateCache: true,
    revalidate:false
  }
  DeleteComment(id)
  mutate(newData, options)

}
//TODO edit comment
const editComment = async (id:string, message:string) => {
if(!message){
  return
}

  EditComment(id, message)
}
  if (isError) {
    return <div className="w-full p-4 flex justify-center border-2 border-red-500 border-solid" ><span className="font-bold ">Error loading data.</span></div>;
  }
  if (isLoading) {
    return (
      <div className="p-4 flex justify-center w-full border-dashed border-2 rounded-md border-white/80">
        <SpinnerMini />
      </div>
    );
  }
  if(isValidating){
    return(
     <>
       <div className="w-full  border-dashed border-2 border-white/80 flex flex-col items-center justify-between rounded-md">
    {comments ? (
      
      comments.map((comment) => (
       <PanelItem createdAt={comment.createdAt} id={comment.id} key={comment.id} message={comment.message} likesAmount={comment._count.like} dislikesAmount={comment._count.dislikes} repliesAmount={comment._count.children}/>
      ))
    ) : (
      <></>
    )}
    
  </div>
     </>
    )
  }
  return (
    <div className="w-full  border-dashed border-2 border-white/80 flex flex-col items-center justify-between rounded-md">
    {comments ? (
      
      comments.map((comment) => (
       <PanelItem handleEdit={editComment} handleDelete={deleteComment} createdAt={comment.createdAt} id={comment.id} key={comment.id} message={comment.message} likesAmount={comment._count.like} dislikesAmount={comment._count.dislikes} repliesAmount={comment._count.children}/>
      ))
    ) : (
      <></>
    )}
    <button className="h-fit w-fit p-4 hover:bg-red-300" onClick={(e)=>mutate()}>mutate!</button>
    
  </div>
  
  );
}
