import { AuthContainerStyle, TitleSection } from "./AuthContainerStyle";
import { styled, css } from '../../../stitches.config';
import {} from '@/components/input/Input'

const Title = css({
  marginTop: 'auto'
});

const Container = css({
  width: '30.9375em',
  minHeight: '33.4375em'
});

type AuthContainerProp = React.PropsWithChildren<{
  title: string
}>;

const AuthContainer: React.FC<AuthContainerProp> = ({
  title,
  children
}) => {


  return (
    <div className={Container()}>

      {/* <Button></Button> */}

      <TitleSection>

      {
        <h2 className={Title()}>{title}</h2>
      }
      </TitleSection>

      <AuthContainerStyle>
        {children}
      </AuthContainerStyle>
    </div>
  );
};

export default AuthContainer;
