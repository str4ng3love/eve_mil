"use client";


import useUserGuides from "../../../hooks/useUserGuides";
import SpinnerMini from "../ui/SpinnerMini";
import PanelItem from "./PanelItem";

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
         <PanelItem id={guide.id} key={guide.id} title={guide.title} likesAmount={guide._count.likes} dislikesAmount={guide._count.dislikes} commentsAmount={guide._count.comments}/>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
