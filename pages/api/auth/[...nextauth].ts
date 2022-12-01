import NextAuth from "next-auth/next";
import EveOnlineProvider from "next-auth/providers/eveonline";
export const authOptions = {
  providers: [
    EveOnlineProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.SECRET_KEY,

      authorization: {
        params: { scope: "esi-characters.read_corporation_roles.v1" },
      },
    }),
  ],
};

export default NextAuth(authOptions);
