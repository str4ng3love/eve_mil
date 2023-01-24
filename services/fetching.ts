import { prisma } from "../lib/prismaConnect";
import { unstable_getServerSession } from "next-auth";


export async function getGuide(params: string) {
  const res = await prisma.guide.findFirst({
    where: {
      title: params,
    }, 
  });
  if (!res) {
    throw new Error("Failed to fetch data.");
  }

  return res;
}

export async function getLike(guideId?: string, commentId?: string) {
  const session = await unstable_getServerSession();

  if (session?.user && session.user.name) {
    if (guideId) {
      console.log(`querying`)
      const resp = await prisma.like.findFirst({
        where:{
          guideId: guideId,
          user: {
            name: session.user.name
          }
        }
      })
      
console.log(resp)
      return resp;
    }
    if(commentId){
      console.log(`running`)
      const resp = await prisma.like.findFirst({
        where: {
          id: commentId,
          user: { name: session.user.name },
        },
        select: {
         id:true
        },
      });
      return resp;
    }
  } else {
    return;
  }
}

export const getComments = async (guideId: string) => {
  const session = await unstable_getServerSession();
  if (session?.user && session.user.name) {
    if (guideId) {
      const resp = await prisma.comment.findMany({
        where: {
          guideId: guideId, 
        }, 
        
      });
      return resp;
    } else {
      return;
    }
  } else {
    return;
  }
};
