




import DeleteComment from "./DeleteComment";
import Reply from "./Reply";

type Props = {
  message: string;
  commentId: string;
  author: string;
};

export default function CommentComp({author, commentId, message}: Props) {
  let formatedMessage = message.replaceAll("</div>", `\n`).replaceAll('<div>', '').replaceAll('<br>', ' ').replaceAll('&nbsp;', ' ')

  return (
    <div className="flex flex-col w-[80%]  p-4 mb-4 font-Abel">
      <div className="whitespace-pre-wrap w-full flex flex-col justify-start">
        <span className="p-1 font-bold">{author}</span>
        <span className="p-1">{formatedMessage}</span>
    
      </div>

      <div className="flex items-center">
      <Reply commentId={commentId}/>
      <DeleteComment commentId={commentId}/>
      </div>

 
    </div>
  );
}
