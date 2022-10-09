import type { NextPage } from "next";
import AuthContainer from "@/components/shared/layouts/AuthContainer"
import Input from "@/components/shared/input/Input";
import Button from "@/components/shared/buttons";
import {css, styled} from '../../stitches.config'

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
	marginTop: '3.5em'
})

const Page: NextPage = () => {
  return (
		<div className={Container()}>
			<AuthContainer title="Sign up" href="/auth/signin">
				<div className="div">
					<h4 className={labelStyle()}>Username</h4>
					<Input isError={false} value={""} setValue={() => {}} errorMessage={"Invalid input"} type={"text"} placeHolder={""} css={inputStyle}/>
					<h4 className={labelStyle()}>Email</h4>
					<Input isError={false} value={""} setValue={() => {}} errorMessage={"Invalid input"} type={"text"} placeHolder={""} css={inputStyle}/>
					<h4 className={labelStyle()}>Password</h4>
					<Input isError={false} value={""} setValue={() => {}} errorMessage={"Invalid input"} type={"text"} placeHolder={""} css={inputStyle}/>
					<h4 className={labelStyle()}>Confirm Password</h4>
					<Input isError={false} value={""} setValue={() => {}} errorMessage={"Invalid input"} type={"text"} placeHolder={""} css={inputStyle}/>

					<div className={ButtonsWrapper()}>
						<Button type="four">Sign up</Button>
						<Button type="five">forgot password</Button>
					</div>
				</div>
			</AuthContainer>
		</div>
  );
};

export default Page;