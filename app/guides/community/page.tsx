import { getGuides } from "../../../services/fetching";
import Board from "../../components/ui/Board";

export default async function Page() {
  const data = await getGuides();


  return (
    <>
      <div className="flex flex-col items-center bg-fixed w-[100%] ">
        <div className="md:w-[75%] w-[100%] bg-black/80  text-white min-h-[calc(100vh-6rem)] shadow-backShadow">
          {/* add toggle buttons */}

          <Board guides={data} />
        </div>
      </div>
    </>
  );
}
