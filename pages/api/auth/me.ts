import { updateUserSession } from "@/lib/user.module";
import { withSessionRoute } from "@/lib/withSession.module";

export default withSessionRoute(async (req, res) => {
  if (!req.session.user) return res.send({ unauthoriszed: true })  

  const now = Date.now()
  if (now - req.session.user?.session_updated < 300000) {
    return res.send(req.session.user)
  }

  await updateUserSession(req)
  return res.send(req.session.user)
})
