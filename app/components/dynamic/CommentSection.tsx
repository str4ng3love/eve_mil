import { getComments } from "../../../services/fetching";
import CommentComp from "./CommentComp"
interface Props {
    guideId?: string;
}
export default async function CommentSection({guideId}:Props){
    

    const comments = await getComments(guideId as string)
    
    return(
        <section className="flex items-center flex-col">
          {
            comments ? comments.map((comment)=>(
                <CommentComp author={comment.author} key={comment.id} commentId={comment.id} message={comment.message} createdAt={comment.createdAt} updatedAt={comment.updatedAt} like={comment.like.length} dislike={comment.dislikes.length} likesNum={comment._count.like} dislikesNum={comment._count.dislikes} />
            )): <div>
                No Comments Yet
            </div>
          }
          
        </section>
    )
}
