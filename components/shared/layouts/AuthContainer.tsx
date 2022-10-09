import { AuthContainerStyle, TitleSection } from "./AuthContainerStyle";
import { styled, css } from '../../../stitches.config';
import Button from '@/components/shared/buttons'
import Image from "next/image";
import { BackArrow } from "@/assets/backArrow";

const Title = css({
  marginTop: 'auto'
});

const Container = css({
  width: '30.9375em',
  minHeight: '33.4375em'
});

const TopContainer = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '4.375em',
  flexDirection: "row",
  width: 'fit-content'
})

const BackButton = css({
  paddingTop: "16px",
  paddingBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1em',
  minWidth: '163px'
})

const BackArrowStyle = css({
  paddingLeft: '0.979375em'
})

type AuthContainerProp = React.PropsWithChildren<{
  title: string
}>;

const AuthContainer: React.FC<AuthContainerProp> = ({
  title,
  children
}) => {


  return (

    <div className={TopContainer()}>
      <Button type={'three'} className={BackButton()}><BackArrow /> Go Back</Button>
      <div className={Container()}>

        <TitleSection>

        {
          <h2 className={Title()}>{title}</h2>
        }
        </TitleSection>

        <AuthContainerStyle>
          {children}
        </AuthContainerStyle>
      </div>
    </div>
  );
};

export default AuthContainer;
