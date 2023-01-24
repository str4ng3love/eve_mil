import { NextApiRequest, NextApiResponse } from "next";

import { authOptions } from "./auth/[...nextauth]";
import { prisma } from "../../lib/prismaConnect";
import { unstable_getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session?.user?.name) {
    const user = await prisma.user.findFirst({
      where: { name: session.user.name },
      select: { id: true },
    });
    if (user?.id && req.body.guideId) {
      const resp = await prisma.guide.update({
        where: {
          id: req.body.guideId,
        },
        data: {
          likes: {
            create: {
              userId: user.id,
            },
          },
          dislikes: {
            deleteMany: {
              userId: user.id,
            },
          },
        },
      });

      if (!resp) {
        throw new Error("Something went wrong.");
      }

      return res.status(200).json({ msg: `Added a like` });
    } else if (user?.id && req.body.commentId) {
      const resp = await prisma.comment.update({
        where: {
          id: req.body.commentId,
        },
        data: {
          likes: {
            create: {
              userId: user.id,
            },
          },
          dislike: {
            deleteMany: {
              userId: user.id,
            },
          },
        },
      });

      if (!resp) {
        throw new Error("Something went wrong.");
      }

      return res.status(200).json({ msg: `Added a like` });
    } else if (!user?.id) {
      console.log(`Unauthorized: no user detected`);
      return res.status(401);
    }
  } else {
    console.log(`Unauthorized: no user detected`);
    return res.status(401);
  }
}
