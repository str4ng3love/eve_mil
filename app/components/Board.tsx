import { randomUUID } from "crypto";
import { Suspense } from "react";
import GridCard from "./GridCard";
import SpinnerMini from "./ui/SpinnerMini";

type Props = {
   guides: {
    id: string;
    description: string;
    title: string;

   }[]
    
   
}

export default function Board (props: Props) {
  
    return(

        <div className=" grid grid-cols-auto gap-4 mt-8 p-4">
            {props.guides.map((guide) => (
              <Suspense key={randomUUID()} fallback={<SpinnerMini key={randomUUID()} />}>
                <GridCard
                  key={guide.id}
                  description={guide.description}
                  heading={guide.title}
                
                  url="#"

                />
              </Suspense>
            ))}
          </div>
 
        
    )
}