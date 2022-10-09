import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";
import { client } from "@/prisma/client"

const POST: NextApiHandler<any> = (req, res) => {
}

const GET: NextApiHandler<any> = async (req, res) => {
  const results = await client.feedback.findMany({
    include: {
      user: {
        select: {
          username: true,
          email: true,
          id: true
        }
      }
    }
  })

  return res.json(results)
}

export default withSessionRoute((req, res) => {
  if (req.method === "POST") return POST(req, res) 
  if (req.method === "GET") return GET(req, res)
})
