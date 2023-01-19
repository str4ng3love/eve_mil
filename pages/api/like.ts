import { NextApiRequest, NextApiResponse } from "next";

import { authOptions } from './auth/[...nextauth]'
import { prisma } from "../../lib/prismaConnect";
import {unstable_getServerSession} from 'next-auth'

export default async function handler (req:NextApiRequest, res: NextApiResponse){
  console.log(`hit`)
  console.log(req.body)
  res.json('all cool')

//     const session = await unstable_getServerSession(req, res, authOptions)
//     if (session?.user?.name) {
//         const user = await prisma.user.findFirst({
//           where: { name: session.user.name },
//           select: { id: true },
//         });
// if(user?.id)
//     addLike(req.body.like, req.body.dislike, user?.id ,req.body.guideId, req.body.commentId,)
   
    
// } else {
//     console.log(`no user`);
//     return res.status(400)
//   }
}