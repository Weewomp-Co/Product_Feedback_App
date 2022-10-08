import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { NextApiHandler } from "next";
import { santizeUser } from "@/lib/user.module";

declare module "iron-session" {
  interface IronSessionData {
    user?: ReturnType<typeof santizeUser>;
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

export function withSessionSsr(handler: any) {
  return withIronSessionSsr(handler, sessionOptions);
}
