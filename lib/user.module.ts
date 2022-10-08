import { User } from "@prisma/client";

export const santizeUser = (user: User) => {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  }
}

export const createUser = () => {

}
