import CoolerHeading from "../components/headings/CoolerHeading";
import CoolestHeading from "../components/headings/CoolestHeading";
import { TAlign } from "../components/headings/CoolHeading";
import Card from "../components/Card";
import Carrousel from "../components/Carrousel";
import CoolHeading from "../components/headings/CoolHeading";



export default function Page() {
  const testo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('test')
  }
  return (
    <>
      <div className="flex flex-col items-center bg-gradient-to-tl from-orange-300 to-red-500 bg-fixed ">
        <div className="md:w-[75%] w-[100%] h-[calc(100vh-6rem)] text-white bg-black/80 pt-12 shadow-wrapperShadow">
          <CoolestHeading text="Guides(WIP)" align={TAlign.center} />
          <CoolHeading
            text="Browse through our compilation of guides to learn the basics of Factional Warfare and more..."
            align={TAlign.center}
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
        <CoolerHeading text="Recent guides:" align={TAlign.center}/>
        <Carrousel
          input={[
            { desciption: "desc", title: "Title 1", url: "#" },
            { desciption: "desc", title: "Title 2", url: "#" },
            { desciption: "desc", title: "Title 3", url: "#" },
            { desciption: "desc", title: "Title 4", url: "#" },
            { desciption: "desc", title: "Title 5", url: "#" },
            { desciption: "desc", title: "Title 6", url: "#" },
            { desciption: "desc", title: "Title 7", url: "#" },
            { desciption: "desc", title: "Title 11", url: "#" },
            { desciption: "desc", title: "Title 12", url: "#" },
            { desciption: "desc", title: "Title 13", url: "#" },
            { desciption: "desc", title: "Title 14", url: "#" },
            { desciption: "desc", title: "Title 15", url: "#" },
            { desciption: "desc", title: "Title 16", url: "#" },
            { desciption: "desc", title: "Title 17", url: "#" },
          ]}
        />
      </div>
      <div className="w-[100%] flex flex-col items-center bg-black/80 text-white py-12 ">
        <CoolerHeading text="Most Popular:" align={TAlign.center}/>
        <Carrousel
          input={[
            { desciption: "desc", title: "Title a", url: "#" },
            { desciption: "desc", title: "Title b", url: "#" },
            { desciption: "desc", title: "Title c", url: "#" },
            { desciption: "desc", title: "Title d", url: "#" },
          
          ]}
        /> 
      </div>
    </>
  );
}
