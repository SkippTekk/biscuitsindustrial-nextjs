import { PrismaClient } from "@prisma/biscuits/index";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

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
        const { username, password } = credentials!;
        const prisma = new PrismaClient();

        const user = await prisma.users.findFirst({
          where: {
            OR: [{ username: username }],
          },
        });
        if (!user) return null;
        if (await bcrypt.compare(password, user.hashPassword)) {
          return {
            id: user.id,
            email: user.email,
            username: user.username,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }: any) => {
      if (user) {
        token.user = user;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    session: ({ session, token }: any) => {
      token.accessToken;
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
