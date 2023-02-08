import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../lib/prismaConnect";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
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
  //rewrite it into separate calls ?
  
  const axedGuide = await prisma.$executeRaw`DELETE FROM Guide where id=${req.body}`

 
  if (!axedGuide || !req.body) {
    return res.status(404).json({ msg: "Not Found." });
  }

  return res.json({ msg: "Guide deleted." });
}
