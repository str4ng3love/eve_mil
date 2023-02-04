import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../lib/prismaConnect";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400).json({ msg: "Bad request." });
  }
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session?.user?.name) {
    return res.status(401).json({ msg: "Not authorized." });
  }
  const guides = await prisma.guide.findMany({
    where: {
      user: {
        name: session.user.name,
      },
    },
    select: {
      id: true,
      title: true,
      _count: {
        select: {
          comments: true,
          dislikes: true,
          likes: true,
        },
      },
    },
  });
  return res.json(guides);
}
