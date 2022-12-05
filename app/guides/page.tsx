import CoolerHeading from "../components/headings/CoolerHeading";
import CoolestHeading from "../components/headings/CoolestHeading";
import Card from "../components/Card";
import Carrousel from "../components/Carrousel";
import CoolHeading from "../components/headings/CoolHeading";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-tl from-orange-300 to-red-500  ">
        <div className="md:w-[75%] w-[100%] h-[calc(100vh-6rem)] text-white bg-black/80 pt-12 shadow-wrapperShadow">
          <CoolestHeading text="Guides(WIP)" align="center" />
          <CoolHeading
            text="Browse through our compilation of guides to learn the basics of Factional Warfare and more..."
            align="center"
          />
          <div className="w-[100%] flex flex-col sm:flex-row my-12 justify-evenly items-center">
            <Card
              description="Official WARZONE Guides"
              heading="Official"
              url="/guides/official"
            />
            <Card
              description="Community guides, written by our users"
              heading="Community"
              url="/guides/community"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] flex flex-col items-center bg-black/80 text-white py-12 ">
        <CoolerHeading text="Recent guides:" align="center"/>
        <Carrousel
          input={[
            { desciption: "desc", title: "Title 1", url: "#" },
            { desciption: "desc", title: "Title 2", url: "#" },
            { desciption: "desc", title: "Title 3", url: "#" },
            { desciption: "desc", title: "Title 4", url: "#" }
          ]}
        />
      </div>
      <div className="w-[100%] flex flex-col items-center bg-black/80 text-white py-12 ">
        <CoolerHeading text="Most Popular:" align="center"/>
        <Carrousel
          input={[
            { desciption: "desc", title: "Title 1", url: "#" },
            { desciption: "desc", title: "Title 2", url: "#" },
            { desciption: "desc", title: "Title 3", url: "#" },
          ]}
        />
      </div>
    </>
  );
}
