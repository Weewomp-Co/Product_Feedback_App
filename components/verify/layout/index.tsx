import { Container, Main } from "./styles"

type VerifyLayoutProps = React.PropsWithChildren<{
  className?: string
}>

export const VerifyLayout: React.FC<VerifyLayoutProps> = ({ children, className }) => {
  return <Main>
    <Container className={className}>
      {children}
    </Container>
  </Main>
}
