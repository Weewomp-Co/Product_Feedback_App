import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var client: PrismaClient | undefined
}

export const client = global.client || new PrismaClient({ log: ['query'], })
if (process.env.NODE_ENV !== 'production') global.client = client
