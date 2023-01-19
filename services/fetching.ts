import { prisma } from "../lib/prismaConnect";


export async function getGuide(params:string) {
    const res = await prisma.guide.findFirst({
        where:{
            title: params
        }
     
    });
    if (!res) {
      throw new Error("Failed to fetch data.");
    }
 
    return res;
  }
  
