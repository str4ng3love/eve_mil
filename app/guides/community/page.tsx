
import Board from "../../components/ui/Board";

import { prisma } from "./../../../lib/prismaConnect";

async function getGuides() {
  const res = await prisma.guide.findMany({
    select:{
      id: true,
      description: true,
      title: true,
      category:true,
      createdAt:true,
      authorName: true,
      language: true,
    }
  });
  if (!res) {
    throw new Error("Failed to fetch data.");
  }
  return res;
}

export default async function Page() {
  const data = await getGuides();


  return (
    <>
      <div className="flex flex-col items-center bg-fixed w-[100%] ">
        <div className="md:w-[75%] w-[100%] bg-black/80  text-white min-h-[calc(100vh-6rem)] shadow-backShadow">
          


          {/* add toggle buttons */}

          <Board guides={data}/>
        </div>
      </div>
    </>
  );
}
