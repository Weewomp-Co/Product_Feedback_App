import { BackArrow } from "@/assets/backArrow"
import { ProfileForm } from "@/components/profile/profile-form"
import Buttons from "@/components/shared/buttons"
import { withSessionSsr } from "@/lib/withSession.module"
import { GoBackButton, MainContainer } from "@/styles/profile"
import { useRouter } from "next/router"

export const Page: React.FC = () => {
  const router = useRouter()
  const onGoBack  = () => router.back()

  return <MainContainer>
    <Buttons color="five" onClick={onGoBack} className={GoBackButton()}>
      <BackArrow />
      Go Back
    </Buttons>

    <ProfileForm />
  </MainContainer>
}

export default Page

export const getServerSideProps = withSessionSsr(({ req }) => {
  if (!req.session?.user?.id) return {
    redirect: {
        permanent: true,
        destination: "/auth/signin",
    }
  }

  return {
    props: {}
  }
})
