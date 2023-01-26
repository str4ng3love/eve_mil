import { getGuide } from "../../../services/fetching";
import Image from "next/image";
import CoolestHeading from "../../components/headings/CoolestHeading";
import CoolHeading, { TAlign } from "../../components/headings/CoolHeading";
import SpinnerMini from "../../components/ui/SpinnerMini";
import { Suspense } from "react";
import CoolerHeading from "../../components/headings/CoolerHeading";
import { extractContent } from "../../../lib/ContentExtract";
import CommentSection from "../../components/dynamic/CommentSection";
import AddComment from "../../components/dynamic/AddComment";
import Like from "../../components/dynamic/Like";

export default async function Page({ params }: { params: { id: string } }) {
  let id = params.id.at(-1) as string;
  let decodedId = decodeURI(id);

  // chceck whether it is possible to fetch session user's like state
  const data = await getGuide(decodedId);
  let content;
  if (data.content) {
    //@ts-ignore
    content = extractContent(data.content.objects);
  }
  // const likeData = await getLike(data.id)

  // const commentsData = await getComments(data.id)

  return (
    <>
      <div className="min-h-[calc(100dvh_-_6rem)] w-full md:w-[80%]  bg-black/80">
        <div className="text-white">
          <CoolestHeading text={data.title} align={TAlign.center} />
          <div className="flex justify-between items-center px-6">
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
          <section className="font-Abel p-8">
            {content?.map((el) => (
              <>
                {el.type === "Subtitle" ? (
                  <CoolerHeading
                    text={el.value}
                    key={el.id}
                    align={TAlign.center}
                  />
                ) : (
                  <></>
                )}
                {el.type === "Paragraph" ? (
                  <p className="indent-4 first-letter:capitalize " key={el.id}>
                    {el.value}
                  </p>
                ) : (
                  <></>
                )}
                {el.type === "Image" ? <></> : <></>}
              </>
            ))}
          </section>
        </div>
      </div>
      <div className="w-full text-white py-4 bg-black shadow-wrapperShadow ">
        <div className="flex w-full items-center justify-evenly">
          <span className="font-Abel font-bold">Views: 12345</span>
          {/* read up on suspense and how it works */}
          <Suspense fallback={<SpinnerMini />}>
            <Like
              guideId={data.id}
              like={data.likes.length}
              dislike={data.dislikes.length}
              likesAmount={data._count.likes}
              dislikesAmount={data._count.dislikes}
            />
          </Suspense>
        </div>

        <AddComment guideId={data.id} />
        {/* @ts-expect-error Server Component */}
        <CommentSection guideId={data.id} />
      </div>
    </>
  );
}
