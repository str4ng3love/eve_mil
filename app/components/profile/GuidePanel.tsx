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
  return <div className="flex justify-center w-full border-dashed border-2 rounded-md border-white/80"><SpinnerMini /></div>
}
  return (
    <div className="w-full   border-dashed border-2 border-red-900 flex flex-col items-center justify-between rounded-md">
      {guides ? (
        guides.map((guide, index) => (
         <PanelItem index={index} guideId={guide.id} key={guide.id} createdAt={guide.createdAt} title={guide.title} likesAmount={guide._count.likes} dislikesAmount={guide._count.dislikes} commentsAmount={guide._count.comments}/>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
