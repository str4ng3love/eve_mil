import { getReplies } from "../../../services/fetching";
import ShowReplies from "../ui/ShowReplies";
import CommentComp from "./CommentComp";


interface Props{
    commentId: string;
}
export default async function Replies({commentId}:Props){

    const data = await getReplies(commentId)
    console.log(data?.children)
    return(
        <>
      
       
        {data?.children.map((reply)=>
          <>
          {/* somehow display conditionally */}
          <ShowReplies />
          {
              <CommentComp width="90%" author={reply.author} commentId={reply.id} createdAt={reply.createdAt} message={reply.message} updatedAt={reply.updatedAt} like={reply.like.length} dislike={reply.dislikes.length} likesNum={reply._count.like} dislikesNum={reply._count.dislikes}/>

          }
            </>
        )} 
       
        </>
            

    )
}