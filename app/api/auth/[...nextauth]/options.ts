import { PrismaClient } from "@prisma/biscuits/index";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username.toLowerCase();
        const password = credentials?.password;

        try {
          const fetchUser = await prisma.users.findFirst({
            where: { username },
          });

          const checkPass = await bcrypt.compare(password, fetchUser.password);

          if (fetchUser !== null && checkPass) {
            return {
              id: fetchUser.id,
              username: fetchUser.username,
              email: fetchUser.email,
              verified: fetchUser.verified,
            };
          } else {
            return null;
          }
        } catch (err) {
          return;
        }
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  session: {
    strategy: "jwt",
    updateAge: 60 * 60 * 24,
  },
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...token.user,
        },
      };
    },
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
};
