import { User } from "@prisma/client";
import { client } from "@/prisma/client"
import { hash } from "argon2"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export const sanitizeUser = (user: User) => {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  }
}

type CreateUser = Omit<User, "id">
export const createUser = async (user: CreateUser) => {
  return client.user.create({
    data: {
      email: user.email,
      username: user.username,
      password: await hash(user.password),
    } 
  })
}

export const handlePrismaUserError = (err: PrismaClientKnownRequestError) => {
  if (err.code === "P2002") {
    const target = err.meta?.target as string[] | undefined
    if (!target?.[0]) return { '_errors': ["Unknown unqiue field contraint error"] }
    return { [target?.[0]]: { '_errors': [`User with that ${target?.[0]} already exists`] } }
  }
}
