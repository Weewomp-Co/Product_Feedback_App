import React from 'react';
import { css, styled } from "../../../stitches.config";
import { FeedbackHeaderStyle, TitleStyle, SubTitleStyle } from './FeedbackHeaderStyle';

type FeedbackHeaderProp = React.PropsWithChildren<{
  title: string;
  subtitle: string;
}>


const FeedbackHeader: React.FC<FeedbackHeaderProp> = ({title, subtitle}) =>{
  
  
  return (
    <FeedbackHeaderStyle>
      <div className={TitleStyle()}>{title}</div>
      <div className={SubTitleStyle()}>{subtitle}</div>
    </FeedbackHeaderStyle>
  )
}

export default FeedbackHeader