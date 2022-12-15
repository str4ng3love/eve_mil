import { NextApiRequest, NextApiResponse } from "next";
import { prisma }  from "../../app/lib/prismaConnect";

export default async function handler(req:NextApiRequest, res: NextApiResponse){
if(req.method === 'POST'){
    try {

        let pack = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        }


        await prisma.guide.create({data: {
            title: req.body.title,
            description: req.body.description,
            
            
        }})
    } catch (error) {
        console.log(error)
    }
    res.json({msg: `ok`})
} else if(req.method === 'GET'){
    try {
        const data = await prisma.guide.findMany()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
} else {
    res.status(400).send(`Error: Bad request.`)
}


}