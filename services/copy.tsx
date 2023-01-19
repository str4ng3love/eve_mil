// "use client";
// import {
//   AiFillLike,
//   AiFillDislike,
//   AiOutlineLike,
//   AiOutlineDislike,
// } from "react-icons/ai";
// import { useState } from "react";
// import { signIn, useSession } from "next-auth/react";
// import {
//   reqSetLike,
//   reqSetDislike,
//   reqRemoveLike,
// } from "../../../services/setLikes";
// import { LikeState } from "@prisma/client";

// interface Props {
// id: string;
// userId: string;
// state: string | null;
// guideId?: string;
// commentId?: string;
 
// }

// export default function Like({id, userId, state, guideId, commentId}: Props) {
//   const [like, setLike] = useState(state);
//   const [dislike, setDislike] = useState(false);
//   const session = useSession();
// console.log(like)
//   return (
//     <>
//       {session.data?.user ? (
//         <div className="flex w-fit gap-4 p-4 h-fit">
//           <div
//             title="Like"
//             onClick={() => {
              
//             }}
//             className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
//           >
//             {like ? (
//               <AiFillLike size={"1.3em"} />
//             ) : (
//               <AiOutlineLike size={"1.3em"} />
//             )}
//           </div>
//           <div
//             title="Dislike"
//             onClick={() => {
//               if (dislike) {
//                 setDislike(false);
//                 // reqRemoveLike(likeId);
//               } else {
//                 setDislike(true);
//                 // reqSetDislike(likeId);
//               }
//             }}
//             className="hover:scale-110 text-white hover:bg-white hover:text-black hover:shadow-link transition-all ease duration-300 rounded-md p-1  cursor-pointer"
//           >
//             {dislike ? (
//               <AiFillDislike size={"1.3em"} />
//             ) : (
//               <AiOutlineDislike size={"1.3em"} />
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="flex justify-between w-fit items-center gap-4 p-4">
//           <div
//             title="Like"
//             onClick={() => {
//               signIn();
//             }}
//             className="hover:bg-white hover:text-black rounded-md p-1  cursor-pointer"
//           >
//             {like ? <AiFillLike /> : <AiOutlineLike />}
//           </div>
//           <div
//             title="Dislike"
//             onClick={() => {
//               signIn();
//             }}
//             className="hover:bg-white hover:text-black rounded-md p-1  cursor-pointer"
//           >
//             {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
