import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../lib/prismaConnect";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== "POST"){
    return res.status(400).json({ msg: "Bad request." });
  }
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session?.user?.name && req.body) {
    let user = await prisma.user.findFirst({
      where: {
        name: session.user.name,
      },
      select: { id: true, name: true },
    });
    if (user?.id && req.body.guideId) {
      let t =  Date.now()

      const resp = await prisma.comment.create({
        data: {
          createdAt: t.toString(),
          message: req.body.content,
          guideId: req.body.guideId,
          userId: user.id,
          author: user.name,
        },
      });
      if (!resp) {
        throw new Error("Something went wrong.");
      }

      return res.status(200).json({ msg: "Comment added." });
    } else if (user?.id && req.body.commentId) {
      let t =  Date.now()

      const resp = await prisma.comment.create({
        data: {
          createdAt: t.toString(),
          message: req.body.content,
          parentId: req.body.commentId,
          userId: user.id,
          author: user.name,

        },
      });
      if (!resp) {
        throw new Error("Something went wrong.");
      }
      return res.status(200).json({ msg: "Comment added." });
    }

    res.status(401).json({ msg: "Unathorized." });
  } else {
    res.status(401).json({ msg: "Unathorized." });
  }
}
