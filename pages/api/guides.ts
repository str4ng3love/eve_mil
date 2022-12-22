import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from '../api/auth/[...nextauth]'
import { prisma } from "../../lib/prismaConnect";
import {unstable_getServerSession} from 'next-auth'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req,res, authOptions);

  if (req.method === "POST") {
    if (!session?.user) {
      return res.status(401).json({ msg: "Not Authorized." });
    }
    try {
      const user = await prisma.user.findFirst({where: {
        name: session?.user?.name as string
      }});
    
if(user)


        await prisma.guide.create({
          data: {authorName:user.name, category: req.body.category, title: req.body.title, description: req.body.description, authorId: user.id,  content: req.body.content }})
      
    } catch (error) {
      console.log(error);
    }
    res.json({ msg: `ok` });
  } else if (req.method === "GET") {
    try {
      const guides = await prisma.guide.findMany()
      res.json(guides)

      
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(400).send(`Error: Bad request.`);
  }
}
