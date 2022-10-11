import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";

const DELETE: NextApiHandler<any> = (req, res) => {
  if (!req.session.user) return res.json({
    unauthorized: true
  })

  req.session.destroy()
  return res.json({ ok: true })
}

export default withSessionRoute((req, res) => {
  if (req.method === "DELETE") return DELETE(req, res)
})
