import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../lib/prismaConnect";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await unstable_getServerSession(req,res, authOptions);
    if (session?.user?.name && req.query.id) {
     
      const replies = await prisma.comment.findFirst({
        where: {
          id: req.query.id as string,
        },
        select: {
          children: {
            take: 10,
            select: {
              _count: {
                select: {
                  children: true,
                  dislikes: true,
                  like: true,
                },
              },
              author: true,
              createdAt: true,
              updatedAt: true,
              id: true,
              message: true,
              like: {
                where: {
                  user: {
                    name: session.user.name,
                  },
                },
              },
              dislikes: {
                where: {
                  user: {
                    name: session.user.name,
                  },
                },
              },
            },
          },
        },
      });
     
      if(!replies){
        throw new Error("Could not fetch the replies.")
      }

   

      return res.json(replies);
    } else if(req.query.id) {
      const replies = await prisma.comment.findFirst({
        where: {
          id: req.query.id as string,
        },
        select: {
          children: {
            take: 10,
            select: {
              _count: {
                select: {
                  children: true,
                  dislikes: true,
                  like: true,
                },
              },
              author: true,
              createdAt: true,
              updatedAt: true,
              id: true,
              message: true,
        
            
            },
          },
        },
      });
      if(!replies){
        throw new Error("Could not fetch the replies.")
      }
     
      return res.json(replies);
    }
  }

  return res.status(400).json({ msg: "Bad Request." });
}
