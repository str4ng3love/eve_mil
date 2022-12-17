import { Suspense } from "react";
import { prisma } from "../../../lib/prismaConnect";
import Card from "../../components/Card";
import SpinnerMini from "../../components/ui/SpinnerMini";
import Toolbar from "../../components/ui/Toolbar";
import { randomUUID } from "crypto";

async function getGuides() {
  const res = await prisma.guide.findMany({
    select: {
      description: true,
      id: true,
      title: true,
    },
  });
  if (!res) {
    throw new Error("Failed to fetch data.");
  }
  return res;
}

export default async function Page() {
  const data = await getGuides();
  console.log(`fetching...`);
  console.log(data);
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-bl from-slate-700 to-emerald-700 bg-fixed w-[100%] ">
        <div className="md:w-[75%] w-[100%] bg-black/80  text-white min-h-[calc(100vh-6rem)] shadow-backShadow">
          {/* dont like the toolbar - rework needed */}
          <Toolbar />
          <div className="grid gap-4 mt-8 sm:grid-cols-auto grid-cols-grid-col-2 justify-center ">
            {data.map((guide) => (
              <Suspense key={randomUUID()} fallback={<SpinnerMini key={randomUUID()} />}>
                <Card
                  key={guide.id}
                  description={guide.description}
                  heading={guide.title}
                  url="#"

                />
              </Suspense>
            ))}
          </div>
          {/* add toggle buttons */}
        </div>
      </div>
    </>
  );
}
