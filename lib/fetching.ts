import { prisma } from "./prismaConnect";

export async function getGuide(params:string) {
    const res = await prisma.guide.findFirst({
        where:{
            title: params
        },
      select: {
        description: true,
        id: true,
        title: true,
        authorId: true,
        authorName: true,
        category: true,
        createdAt: true,
        content: true,
       
        
      },
    });
    if (!res) {
      throw new Error("Failed to fetch data.");
    }
    return res;
  }