import NextAuth from "next-auth/next";
import EveOnlineProvider from "next-auth/providers/eveonline";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../app/lib/prismaConnect";


export default NextAuth({
  adapter:PrismaAdapter(prisma),
  providers: [
    EveOnlineProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_KEY,
      authorization: {
        params: { scope: "esi-characters.read_corporation_roles.v1" },
      },
    }),
  ],
  session: { 
    strategy:"jwt",

  },
 
});
