import NextAuth, { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
        id?: unknown
        provider?: unknown
        username?: any
    } & DefaultSession["user"]
  }
  interface User extends DefaultUser {
    username: string
  }
}