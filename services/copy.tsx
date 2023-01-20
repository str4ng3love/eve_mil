// "use client";

// import { signIn, useSession } from "next-auth/react";
// import { useState } from "react";
// import Button, { BType } from "../ui/Button";

// export default function AddComment() {
//   const [showForm, setShowForm] = useState(false);
//   const [commentContent, setCommentContent] = useState("");
//   const [respMsg, setRespMsg] = useState("");
//   const session = useSession();

//   const handleAddComment = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     const parEl = e.currentTarget.parentElement
//     const divGroup = parEl?.parentElement?.children
//     const divInQuest = divGroup?.item(0)
//     if(divInQuest){
//       divInQuest.textContent = ''
//     }
//     const comment = {
//       content: commentContent,
//     };
//     try {
//       const resp = await fetch("/api/add_comment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(comment),
//       });
//       const data = await resp.json();
//       setRespMsg(data.msg);
//       console.log(data.msg);
//     } catch (error) {
//       console.log(error);
//     }
    
 
//   };
//   const resetComment = () => {
//     setRespMsg("");
//     setCommentContent("");
//   };
//   return (
//     <div className="w-full flex justify-center p-8">
//       <div className="w-[80%] text-white">
//         {!showForm ? (
//           <Button
//             handleClick={() => {
//               if (session.data?.user) {
//                 setShowForm(true);
//               } else {
//                 signIn();
//               }
//             }}
//             text={"Add a comment"}
//             type={BType.button}
//           />
//         ) : (
//           <>
//             <div className="flex justify-between items-center">
//               {!respMsg ? (
//                 <div
//                   onInput={(e) => setCommentContent(e.currentTarget.innerHTML)}
//                   //TODO edit text before saving ↑

//                   contentEditable="true"
//                   placeholder="Add a comment..."
//                   className="w-full  p-1 h-40 bg-stone-400  text-white resize-none border-b-2 border-white overflow-y-scroll"
//                 />
//               ) : (
//                 <div className="flex w-full  p-1 h-40 text-white resize-none justify-center items-center">
//                   <span className="p-4 font-Abel bg-emerald-300 uppercase rounded-md text-lg font-bold border-emerald-700 border-solid border-2">
//                     {respMsg}
//                   </span>
//                 </div>
//               )}
//             </div>
//             <div className="flex p-2 border-white justify-evenly items-center font-bold font-Abel ">
//               {respMsg.length > 1 ? (
//                 <Button
//                   handleClick={() => {
//                     resetComment();
//                   }}
//                   text={"Add a new comment"}
//                   type={BType.button}
//                 />
//               ) : (
//                 <Button
//                   handleClick={(e) => {
//                     if (commentContent.length >= 1) {
//                       handleAddComment(e);
//                       setCommentContent('')
//                     }
//                   }}
//                   text={"Comment"}
//                   type={BType.button}
//                 />
//               )}
//               <Button
//                 text="X"
//                 type={BType.erase}
//                 handleClick={() => {
//                   setShowForm(false);
//                 }}
//               />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
