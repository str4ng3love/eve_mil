import { getOfficialGuides } from "../../../services/fetching";
import Board from "../../components/ui/Board";

export default async function Page() {
  const data = await getOfficialGuides();


  return (
    <>
      <div className="flex flex-col items-center bg-fixed w-[100%] ">
        <div className="md:w-[80%] w-[100%] bg-black/80  text-white min-h-[calc(100vh-6rem)] shadow-backShadow">
          {/* add toggle buttons */}

          <Board official={true} guides={data} />
        </div>
      </div>
    </>
  );
}
