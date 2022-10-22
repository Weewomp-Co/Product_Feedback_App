import { ServerClient } from "postmark"

export const emailClient = new ServerClient(process.env.EMAIL_TOKEN as string)
