import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "95eb257207bb480f2b71",
      clientSecret: "b551f9a656d93664d2188b9851dc6d9df9f477eb",
    }),
  ],
})