import { prisma } from "../lib/prismaConnect";
import { unstable_getServerSession } from "next-auth";
import { NextApiRequest } from "next";

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
      const resp = await prisma.propsGuide.findFirst({
        where: {
          guideId: guideId,
          user: { name: session.user.name },
        },
      });

      return resp;
    } else {
      const resp = await prisma.propsComment.findFirst({
        where: {
          id: commentId,
        },
        select: {
          id: true,
          like: true,
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
