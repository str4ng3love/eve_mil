import DeleteComment from "./DeleteComment";
import Reply from "./Reply";

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
}: Props) {
  let formatedMessage = message
    .replaceAll("</div>", `\n`)
    .replaceAll("<div>", "")
    .replaceAll("<br>", " ")
    .replaceAll("&nbsp;", " ");

  return (
    <div className="flex flex-col w-[80%]  p-4 mb-4 font-Abel">
      <div className="whitespace-pre-wrap w-full flex flex-col justify-start">
        <div className="flex justify-between">
          <span className="p-1 font-bold">{author}</span>
          {!updatedAt ? (
            // change date from string to Date
            <span className="p-1">{createdAt.slice(0, 25)}</span>
          ) : (
            <span className="p-1">(edited) {createdAt.slice(0, 25)}</span>
          )}
        </div>
        <span className="p-1">{formatedMessage}</span>
      </div>

      <div className="flex items-start justify-between">
        <Reply commentId={commentId} like={like} likeNum={likesNum} dislike={dislike} dislikeNum={dislikesNum} />

        <DeleteComment commentId={commentId} />
      </div>
    </div>
  );
}
