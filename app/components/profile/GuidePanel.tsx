"use client";
import Link from "next/link";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import useUserGuides from "../../../hooks/useUserGuides";
import SpinnerMini from "../ui/SpinnerMini";

export default function GuidePanel() {
  const { guides, isLoading, isError } = useUserGuides();
if(isError){
  return <span>Error Loading Data.</span>
}
if(isLoading){
  return <div className=" p-4 bg-black flex justify-center w-full border-solid border-2 border-white/80"><SpinnerMini /></div>
}
  return (
    <div className="w-full capitalize border-solid border-2 border-white/80 flex flex-col items-center justify-between">
      {guides ? (
        guides.map((guide) => (
          <div
            key={guide.id}
            className="flex w-full justify-between bg-emerald-700 p-4"
          >
            <div className="flex justify-between items-center w-full">
            <Link href={`/guides/community/${guide.title}`}><span className="text-ellipsis p-4 w-[25ch] md:w-full">{guide.title}</span></Link>
              <div className="flex items-center">
                <div className="p-4  flex whitespace-pre-wrap md:flex-row flex-col">
                  <span>{guide._count.likes} </span>
                  <AiOutlineLike />
                </div>
                <div className="p-4 flex whitespace-pre-wrap md:flex-row flex-col">
                <span>{guide._count.dislikes} </span>
                  <AiOutlineDislike />
                </div>
                <div className="p-4 flex whitespace-pre-wrap md:flex-row flex-col">
                <span>{guide._count.comments} </span>
                  <AiOutlineComment />
                </div>
              </div>
            </div>
            <div
              className="flex justify-evenly items-center
            "
            >
              <span className="p-4">edit</span>
              <span className="p-4">Delete</span>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
