export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    authorized({auth, request}){
      const user = auth?.user
      const isOnTaskPage = request.nextUrl?.pathname.startsWith("/task")
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login")

      if (isOnTaskPage && !user){
        return false
      }

      if(isOnLoginPage && user){
        return Response.redirect(new URL('/task', request.nextUrl));
      }
      return true;
    }
  },
};
