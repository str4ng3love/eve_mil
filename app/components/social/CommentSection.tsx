import { getComments } from "../../../services/fetching";
import CommentComp from "./CommentComp"
interface Props {
    guideId?: string;
}
export default async function CommentSection({guideId}:Props){
    
  // TODO: learn about mutations, implement swr reevalidation
    const comments = await getComments(guideId as string)
    const compareFN = (a:any,b:any)=>{
           let sorterA = a.createdAt;
           let sorterB = b.createdAt;
           if (sorterA > sorterB) {
            return -1;
          }
          if (sorterA < sorterB) {
            return +1;
          }
  
          return 0;
    }
    return(
        <section className="flex items-center w-[90%] flex-col">
          {
            comments ? comments.sort(compareFN).map((comment)=>(
                <CommentComp repliesAmount={comment._count.children} author={comment.author} key={comment.id} commentId={comment.id} message={comment.message} createdAt={comment.createdAt} updatedAt={comment.updatedAt} like={comment.like.length} dislike={comment.dislikes.length} likesNum={comment._count.like} dislikesNum={comment._count.dislikes} />
            )): <div>
                No Comments Yet
            </div>
          }
          
        </section>
    )
}
