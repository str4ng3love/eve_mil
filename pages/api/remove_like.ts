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

        const resp = await prisma.propsGuide.delete({where:{
            userId_guideId: {
              guideId: req.body.guideId, userId: user.id
            }
        }});
        
     
        res.json(`Like with ID ${req.body.id} deleted.`);
      } else  if (user?.id && req.body.commentId) {

        const resp = await prisma.propsComment.delete({where:{
            userId_commentId: {
              commentId: req.body.commentId, userId: user.id
            }
        }});
        
     
        res.json(`Like with ID ${req.body.id} deleted.`);
      }
       else if (!user?.id) {
        console.log(`Unauthorized: no user detected`);
        return res.status(401);
      }
    } else {
      console.log(`Unauthorized: no user detected`);
      return res.status(401);
    }
  }
  