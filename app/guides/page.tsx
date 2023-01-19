import CoolerHeading from "../components/headings/CoolerHeading";
import CoolestHeading from "../components/headings/CoolestHeading";
import { TAlign } from "../components/headings/CoolHeading";
import Card from "../components/ui/Card";
import Carrousel from "../components/ui/Carrousel";
import CoolHeading from "../components/headings/CoolHeading";
import { prisma } from "../../lib/prismaConnect";

async function getRecent(){
  const res = await prisma.guide.findMany({
    take: 9,
    select:{
      description: true,
      title: true,
      id: true
    }
  })
  if(!res){
    throw new Error('Failed to fetch data.')
  }
  return res
}


export default async function Page() {
  const data = await getRecent()  
  return(
    <>
      <div className="flex flex-col items-center bg-gradient-to-tl from-orange-300 to-red-500 bg-fixed">

        <div className="md:w-[75%] w-[100%] h-[calc(100vh-6rem)] text-white bg-black/80 pt-12 shadow-wrapperShadow">
          <CoolestHeading text="Guides(WIP)" align={TAlign.center} />
          <CoolHeading
            text="Browse through our compilation of guides to learn the basics of Factional Warfare and more..."
            align={TAlign.center}
          />

      
          <div className="w-[100%] gap-8 flex flex-col sm:flex-row my-12 justify-evenly items-center">
            <Card
            img="bg-[url('/images/official-w.svg')]"
              description="Official WARZONE Guides on EVE ONLINE"
              heading="Official"
              url="/guides/official"

            />
            <Card
            img="bg-[url('/images/community-w.svg')]"
              description="Community Guides, Written by our Users"
              heading="Community"
              url="/guides/community"

            />
    
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center bg-black/80 text-white py-12 ">
        <CoolerHeading text="Recent guides:" align={TAlign.center}/>
        <Carrousel input={data} />
      </div>
  
    </>
  );
}
