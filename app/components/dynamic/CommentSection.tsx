import { Comment } from "@prisma/client"
import CommentComp from "./CommentComp"
interface Props {
    comments?: Comment[] | null
}
export default function CommentSection({comments}:Props){

    
    return(
        <section className="flex items-center flex-col">
          {
            comments ? comments.map((comment)=>(
                <CommentComp author={comment.author} key={comment.id} commentId={comment.id} message={comment.message} />
            )): <div>
                No Comments Yet
            </div>
          }
          
        </section>
    )
}
