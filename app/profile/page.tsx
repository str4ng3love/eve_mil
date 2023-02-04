import { unstable_getServerSession } from "next-auth";
import CoolerHeading, { TAlign } from "../components/headings/CoolerHeading";
import LoginButton from "../components/LoginButton";
import MyGuides from "../components/profile/MyGuides";

export default async function Page() {
  const session = await unstable_getServerSession();

  return (
    <>
      {!session?.user?.name ? (
        <div className="flex justify-center">
          <div className="md:w-[75%] shadow-wrapperShadow bg-black/80 min-h-[calc(100dvh-6rem)] w-full flex justify-center items-center">
            <div className="flex flex-col bg-white py-4 px-8 rounded-md shadow-backShadow items-center justify-center">
              <CoolerHeading
                align={TAlign.center}
                text="Please Log In to continue..."
              />
              <LoginButton />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="md:w-[75%] shadow-wrapperShadow bg-black/80 min-h-[calc(100dvh-6rem)] w-full flex justify-center">
            <MyGuides />
          </div>
        </div>
      )}
    </>
  );
}
