import type { NextPage } from "next";
import AuthContainer from "@/components/shared/layouts/AuthContainer"
import Input from "@/components/shared/input/Input";
import {css, styled} from '../../stitches.config'
import Button from "@/components/shared/buttons";

const inputStyle = {
	width: '100%'
}

const Container = css({
	width: '100vw',
	height: '100vh',
	backgroundColor: '#F7F8FD',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
})

const labelStyle = css({
	color: '$grey600',
	fontSize: '$h4',
	letterSpacing: '$h4',
	lineHeight: '$h4',
	marginBottom: '1rem'
})

const ButtonsWrapper = css({
	marginTop: '3.5em',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '1em'
})

const SignupButton = styled(Button, {
  backgroundColor: '#28A7ED'
})

const Page: NextPage = () => {
  return (
    <AuthContainer title="Sign in" href="/">
      <h4 className={labelStyle()}>Username</h4>
			<Input isError={false} value={""} setValue={() => {}} errorMessage={"Invalid input"} type={"text"} placeHolder={""} css={inputStyle}/>
			<h4 className={labelStyle()}>Email</h4>
			<Input isError={false} value={""} setValue={() => {}} errorMessage={"Invalid input"} type={"text"} placeHolder={""} css={inputStyle}/>

      <div className={ButtonsWrapper()}>
        <Button type="one" css={{
          backgroundColor: '#28A7ED',
          '&:hover': {
            backgroundColor: '#84caff'
          }
        }}>Sign in</Button>
        <Button as={'a'} href={'http://localhost:3000/auth/signup'} type="four" css={{
          backgroundColor: '#E84D70',
          '&:hover': {
            backgroundColor: '#e8889e'
          }
        }}>Sign up</Button>
      </div>
    </AuthContainer>
  );
};

export default Page;
