// Next Auth
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Helpers
import { MongoClientConnection } from "@helpers";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
  // ... other options
  callbacks: {
    async signIn({ user, account, profile, email, credentials }): Promise<any> {
      const emailRegex: RegExp = /^([a-z]{4,}[1-9]{2}@epoka\.edu\.al)$/;
      const isAllowedToAuthenticate: boolean =
        user.email?.endsWith("@epoka.edu.al") && emailRegex.test(user.email)
          ? true
          : false;
      return Promise.resolve(
        isAllowedToAuthenticate
          ? { user, account, profile, email, credentials }
          : false
      );
    },
  },
  pages: {
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  theme: {
    colorScheme: "dark",
    brandColor: "#00458C",
    logo: "../../../public/static/images/EpokaLogo.jpg",
    buttonText: "#00458C",
  },
  adapter: MongoDBAdapter(MongoClientConnection),
};

export default NextAuth(authOptions);
