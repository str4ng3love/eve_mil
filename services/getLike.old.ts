import { prisma } from "../lib/prismaConnect";
import { unstable_getServerSession } from "next-auth";

export default async function getLike(guideId?: string, commentId?: string) {
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
    return 
  }
}
