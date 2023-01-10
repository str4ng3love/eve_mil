import { getGuide } from "../../../lib/fetching";
import Image from "next/image";
import CoolestHeading from "../../components/headings/CoolestHeading";
import CoolHeading, { TAlign } from "../../components/headings/CoolHeading";
import SpinnerMini from "../../components/ui/SpinnerMini";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
  let id = params.id.at(-1) as string;
  let decodedId = decodeURI(id);
  const data = await getGuide(decodedId);

  console.log(data.content.objects)
  let sortedContent
 
  return (
    <>
      <div className="w-[80%] p-4 bg-black/80">
        <div className="text-white">
          <CoolestHeading text={data.title} align={TAlign.center} />
          <div className="flex justify-between">
            <div className="flex flex-col justify-center items-center p-4">
              <Suspense fallback={<SpinnerMini />}>
                <Image
                  alt="Author's portrait"
                  src={data.authorPortrait as string}
                  width={64}
                  height={64}
                />
              </Suspense>
              <CoolHeading text={data.authorName} />
            </div>
            <CoolHeading text={data.createdAt.slice(4, 24)} />
          </div>
          <section>
            {}
          </section>
        </div>
      </div>
    </>
  );
}
