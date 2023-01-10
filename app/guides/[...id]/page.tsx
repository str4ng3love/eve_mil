import { getGuide } from "../../../lib/fetching";
import Image from "next/image";
import CoolestHeading from "../../components/headings/CoolestHeading";
import CoolHeading, { TAlign } from "../../components/headings/CoolHeading";
import SpinnerMini from "../../components/ui/SpinnerMini";
import { Suspense } from "react";
import CoolerHeading from "../../components/headings/CoolerHeading";
import { extractContent } from "../../../lib/ContentExtract";

export default async function Page({ params }: { params: { id: string } }) {
  let id = params.id.at(-1) as string;
  let decodedId = decodeURI(id);
  const data = await getGuide(decodedId);
  let content
  if(data.content){
    //@ts-ignore
    content = extractContent(data.content.objects);
  }
  
  

  return (
    <>
      <div className="min-h-[calc(100dvh_-_6rem)] w-full md:w-[80%] p-4 bg-black/80">
        <div className="text-white">
          <CoolestHeading text={data.title} align={TAlign.center} />
          <div className="flex justify-between px-6">
            <div className="flex flex-col justify-center font-Abel items-center p-4">
              <Suspense fallback={<SpinnerMini />}>
              <CoolHeading text={data.authorName} />
                <Image
                  alt="Author's portrait"
                  src={data.authorPortrait as string}
                  width={64}
                  height={64}
                />
              </Suspense>
            
            </div>
            <CoolHeading text={data.createdAt.slice(4, 24)} />
          </div>
          <section className="font-Abel">
            {content?.map((el) => (
              <>
              {el.type === "Subtitle" ? <CoolerHeading text={el.value} key={el.id} align={TAlign.center} /> : <></>}
              {el.type === "Paragraph" ? <p className="indent-4 first-letter:capitalize " key={el.id}>{el.value}</p>  : <></>}
              {el.type === "Image" ? <></>  : <></>}
              </>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
