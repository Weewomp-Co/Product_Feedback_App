import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";

const GET: NextApiHandler<any> = (req, res) => {
}

const POST: NextApiHandler<any> = (req, res) => {
}

const DELETE: NextApiHandler<any> = (req, res) => {
}

export default withSessionRoute((req, res) => {
  if (req.method === "GET") return GET(req, res)
  if (req.method === "POST") return POST(req, res)
  if (req.method === "DELETE") return DELETE(req, res)
})
