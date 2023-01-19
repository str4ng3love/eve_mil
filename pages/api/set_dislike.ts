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
     
      const resp = await prisma.propsGuide.upsert({
        where: {
          userId_guideId:{
            guideId: req.body.guideId,
            userId: user.id
          }
        }, 
        update:{
          like: 'DISLIKE'
        }, 
        create: {
          like: 'DISLIKE',
          guideId: req.body.guideId,
          userId: user.id
        }
      });
      if (user?.id && req.body.commentId) {
     
        const resp = await prisma.propsComment.upsert({
          where: {
            userId_commentId:{
              commentId: req.body.commentId,
              userId: user.id
            }
          }, 
          update:{
            like: 'DISLIKE'
          }, 
          create: {
            like: 'DISLIKE',
            commentId: req.body.commentId,
            userId: user.id
          }
        });
      }
      if(!resp){
        throw new Error('Something went wrong.')
      } 
      console.log('resolved')
      return res.status(200).json({msg: `Added a dislike`})
    } else if (!user?.id) {
      console.log(`Unauthorized: no user detected`);
      return res.status(401);
    }
  } else {
    console.log(`Unauthorized: no user detected`);
    return res.status(401);
  }
}
