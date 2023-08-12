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
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      //@ts-ignore
      async authorize(credentials, req) {
        const { username, password }: UserCredentials = credentials!;

        try {
          const user = await prisma.users.findUnique({
            select: { username: username },
          });
          if (!user) return null;

          if (await bcrypt.compare(password, user.hashPassword)) {
            return {
              id: user.id,
              email: user.email,
              username: user.username,
            };
          }
        } catch (err) {
          return;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }: any) => {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      session.accessToken = token.accessToken;

      return {
        ...session,
        user: {
          ...session.user,
          ...token.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/dashboard/login",
  },
};
