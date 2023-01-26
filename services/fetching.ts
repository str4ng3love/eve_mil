import { prisma } from "../lib/prismaConnect";
import { unstable_getServerSession } from "next-auth";

export async function getGuides() {
  const res = await prisma.guide.findMany({
    select: {
      id: true,
      description: true,
      title: true,
      category: true,
      createdAt: true,
      authorName: true,
      language: true,
    },
  });
  if (!res) {
    throw new Error("Failed to fetch data.");
  }

  return res;
}

export async function getGuide(params: string) {
  const session = await unstable_getServerSession();
  const res = await prisma.guide.findFirst({
    where: {
      title: params,
    },
    select: {
      id: true,
      authorName: true,
      authorPortrait: true,
      category: true,
      content: true,
      createdAt: true,
      description: true,
      title: true,
      likes: {
        where: {
          user: {
            name: session?.user?.name || "",
          },
        },
      },
      dislikes: {
        where: {
          user: {
            name: session?.user?.name || "",
          },
        },
      },
      _count: {
        select: {
          likes: true,
          dislikes: true,
        },
      },
    },
  });
  if (!res) {
    throw new Error("Failed to fetch data.");
  }

  return res;
}

export async function  getComments(guideId: string) {
  const session = await unstable_getServerSession();
  
    if (guideId) {
      const resp = await prisma.comment.findMany({
        where: {
          guideId: guideId,
        },
        take: 15,
        select: {
          id: true,
          author: true,
          createdAt: true,
          updatedAt: true,
          message: true,
          like: {
            where: {
              user: {
                name: session?.user?.name || ""
              }
            }, 
          },
          dislikes:{
            where: {
              user: {
                name: session?.user?.name || ""

              }
            }
          },
          _count:{
            select:{
              like: true,
              dislikes: true,
            }
          }
        },
      });

      return resp;
  {
      
    }
  } else {
    return;
  }
};
