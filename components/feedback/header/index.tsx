import React from 'react';
import { FeedbackHeaderStyle, TitleStyle, SubTitleStyle } from './styles';

type FeedbackHeaderProp = React.PropsWithChildren<{
  title: string;
  subtitle: string;
}>

const FeedbackHeader: React.FC<FeedbackHeaderProp> = ({title, subtitle}) =>{
  return (
    <FeedbackHeaderStyle>
      <h2 className={TitleStyle()}>{title}</h2>
      <p className={SubTitleStyle()}>{subtitle}</p>
    </FeedbackHeaderStyle>
  )
}

export default FeedbackHeader
