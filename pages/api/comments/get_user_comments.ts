import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "../../../lib/prismaConnect";


export default async function handler(req:NextApiRequest, res:NextApiResponse){
    if (req.method !== "GET") {
        return res.status(400).json({ msg: "Bad request." });
      }
      const session = await unstable_getServerSession(req,res, authOptions)
      if (!session?.user?.name) {
        return res.status(401).json({ msg: "Not authorized." });
      }
      const comments = await prisma.comment.findMany({
        where: {
          user: {
            name: session.user.name,
          },
        },
        select: {
          id: true,
            message:true,
            createdAt: true,
          _count: {
            select: {
          children:true,
          dislikes:true,
          like:true
            },
          },
        }, orderBy: {
          createdAt: "desc"
        }
      });
      return res.json(comments);
    }
    
