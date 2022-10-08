import { withSessionRoute } from "@/lib/withSession.module";

export default withSessionRoute((req, res) => {
  if (req.session.user) return res.send(req.session.user)
  res.send({ unauthoriszed: true })
})
