import { withSessionRoute } from "@/lib/withSession.module";
import { NextApiHandler } from "next";

const POST: NextApiHandler<any> = (req, res) => {};

export default withSessionRoute((req, res) => {
  if (!req.session.user) return res.status(401).json({ unauthorized: false });
  if (req.method === "POST") return POST(req, res);
});
