
import ShowReplies from "./ShowReplies"
import Reply from "./Reply";
import TimeDifference from "../../../lib/TimeDifference";

type Props = {
  message: string;
  commentId: string;
  author: string;
  createdAt: string;
  updatedAt: string | null;
  likesNum: number | null;
  dislikesNum: number | null;
  like: number | boolean | null;
  dislike: number | boolean | null;
  repliesAmount: number;

};

export default function CommentComp({
  author,
  commentId,
  message,
  createdAt,
  updatedAt,
  dislike,
  dislikesNum,
  like,
  likesNum,
  repliesAmount

}: Props) {
  let formatedMessage = message
    .replaceAll("</div>", `\n`)
    .replaceAll("<div>", "")
    .replaceAll("<br>", " ")
    .replaceAll("&nbsp;", " ");


  return (
    <div className={`flex flex-col w-full pl-4 mb-4 font-Abel`}>
      <div className="whitespace-pre-wrap w-full flex flex-col justify-start">
        <div className="flex justify-between">
          <span className="p-1 font-bold">{author}</span>
          {!updatedAt ? (
            // change date from string to Date
            <span className="p-1">{TimeDifference(Date.now(), parseInt(createdAt))}</span>
          ) : (
            <span className="p-1">(edited) {createdAt}</span>
          )}
        </div>
        <span className="p-1">{formatedMessage}</span>
      </div>

      <div className="flex items-start justify-between">
        <Reply commentId={commentId} like={like} likeNum={likesNum} dislike={dislike} dislikeNum={dislikesNum} />

   
      </div>

      <ShowReplies commentId={commentId} repliesAmount={repliesAmount}/>
    </div>
  );
}
