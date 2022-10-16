import { User } from "@prisma/client";
import { client } from "@/prisma/client";
import { hash } from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextApiRequest } from "next";

export const sanitizeUser = (
  user: User & { votes: { feedbackId: string }[] }
) => {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    votes: user.votes,
    session_updated: Date.now(),
  };
};

type CreateUser = Omit<User, "id">;
export const createUser = async (user: CreateUser) => {
  return client.user.create({
    data: {
      email: user.email,
      username: user.username,
      password: await hash(user.password),
    },
    include: {
      votes: {
        select: {
          feedbackId: true,
        },
      },
    },
  });
};

export const handlePrismaUserError = (err: PrismaClientKnownRequestError) => {
  if (err.code === "P2002") {
    const target = err.meta?.target as string[] | undefined;
    if (!target?.[0])
      return { _errors: ["Unknown unqiue field contraint error"] };
    return {
      [target?.[0]]: {
        _errors: [`User with that ${target?.[0]} already exists`],
      },
    };
  }
};

export const updateUserSession = async (req: NextApiRequest) => {
  const user = await client.user.findFirst({
    where: {
      id: req.session?.user?.id,
    },
    select: {
      id: true,
      email: true,
      username: true,
      votes: {
        select: {
          feedbackId: true,
        },
      },
    },
  });

  if (!user) return;
  req.session.user = { ...user, session_updated: Date.now() };
  await req.session.save();
};
