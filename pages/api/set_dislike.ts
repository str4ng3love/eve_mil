import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from './auth/[...nextauth]'
import { prisma } from "../../lib/prismaConnect";
import {unstable_getServerSession} from 'next-auth'

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
        const resp = await prisma.propsGuide.create({
          data: {
            like: "DISLIKE",
            userId: user.id,
            guideId: req.body.guideId 
            }
            
          
        });
        console.log(resp);
        res.json("all cool");
      } else if (!user?.id) {
        console.log(`Unauthorized: no user detected`);
        return res.status(401);
      }
    } else {
      console.log(`Unauthorized: no user detected`);
      return res.status(401);
    }
  }
  