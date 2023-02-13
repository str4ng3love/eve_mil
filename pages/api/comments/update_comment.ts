import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../lib/prismaConnect";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  if (req.method !== "PATCH" || !req.body.id|| !req.body.message) {
    return res.status(400).json({ msg: "Bad request." });
  }
  
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session?.user) {
    return res.status(401).json({ msg: "Not authorized." });
  }
  const user = await prisma.user.findFirst({
    where: {
      name: session?.user?.name as string,
    },
  });
  if (!user?.name && req.body) {
    return res.status(401).json({ msg: "Not authorized." });
  }
  let t =  Date.now()
  const updatedComment = await prisma.comment.update({
    where: { 
        id: req.body.id
      },data: {
        message: req.body.message,
        updatedAt: t.toString()
    }
  });
  //   //rewrite it into separate calls ?
  return res.json(updatedComment);
}
