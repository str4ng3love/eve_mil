import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { prisma } from "../../../lib/prismaConnect";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    if(req.method  !== "GET" || !req.query){
        return res.status(400).json({msg:`Bad request.`})

    }
    const session = await unstable_getServerSession(req,res, authOptions)
    if(!session?.user){
        return res.status(401).json({msg: `Not Authorized`})
    }
    const guide = await prisma.guide.findFirst({where:{
        id:req.query.id as string
    },
select:{
    id:true,
    category:true,
    content:true,
    description:true,
    language: true,
    title:true,
    

}})
    res.json(guide)
}