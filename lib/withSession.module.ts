import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from "next";
import { sanitizeUser } from "@/lib/user.module";

declare module "iron-session" {
  interface IronSessionData {
    user?: ReturnType<typeof sanitizeUser>;
  }
}

const sessionOptions = {
  password: "25@SNC6dLvmCJkIl%&2lY116P*NwwRv!",
  cookieName: "token",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function withSessionRoute<T extends any>(handler: NextApiHandler<T>) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
>(handler: (
    context: GetServerSidePropsContext,
  ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,) {
  return withIronSessionSsr(handler, sessionOptions);
}
