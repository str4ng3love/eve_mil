import Board from "../../components/Board";
import Toolbar from "../../components/ui/Toolbar";
import { prisma } from "./../../../lib/prismaConnect";

async function getGuides() {
  const res = await prisma.guide.findMany({
    select: {
      description: true,
      id: true,
      title: true,
      authorId: true,
      authorName: true
    },
  });
  if (!res) {
    throw new Error("Failed to fetch data.");
  }
  return res;
}

export default async function Page() {
  // const data = await getGuides();
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-bl from-slate-700 to-emerald-700 bg-fixed w-[100%] ">
        <div className="md:w-[75%] w-[100%] bg-black/80  text-white min-h-[calc(100vh-6rem)] shadow-backShadow">
          <Toolbar />
          {/* dont like the toolbar - rework needed */}
         
          {/* add toggle buttons */}

          {/* <Board guides={data}/> */}
        </div>
      </div>
    </>
  );
}
