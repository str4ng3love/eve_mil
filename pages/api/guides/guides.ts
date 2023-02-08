import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../auth/[...nextauth]'
import { prisma } from "../../../lib/prismaConnect";
import {unstable_getServerSession} from 'next-auth'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req,res, authOptions);
 console.log(`hit`)

  if (req.method === "POST") {
    if (!session?.user) {
      if(session?.user?.name !== req.body.authorName){
        return res.status(401).json({ msg: "Not Authorized." });
      }
      return res.status(401).json({ msg: "Not Authorized." });
    }
    try {
      const user = await prisma.user.findFirst({where: {
        name: session?.user?.name as string
     
      }});
    
if(!user){
  return res.status(401).json({ msg: "Not Authorized." });
}


let t =  Date.now()

     
        await prisma.guide.create({
          data: {
            title: req.body.title,
            userId: user.id,
            authorPortrait: user.image,
            authorName: req.body.authorName || user.name,
            createdAt: t.toString(),
            category: req.body.category,
            description: req.body.description,
            language: req.body.language,
            content: req.body.content,
            scope: 'COMMUNITY'

          }})
      
    } catch (error) {
      console.log(error);
    }
    res.json({ msg: `Success` });
  } else if (req.method === "GET") {
    try {
      const guides = await prisma.guide.findMany({
        where:{scope: 'COMMUNITY'},
        select:{
          authorName:true,
          category:true,
          language: true,
          createdAt: true,
          title: true,
          description:true,
          id:true,
          _count: {
            select:{
              likes: true
            }
          }

        }
      })
      res.json(guides)

      
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).send(`Error: Bad request.`);
  }
}
