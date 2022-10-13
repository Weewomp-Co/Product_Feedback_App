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
      <h2 className={TitleStyle()}>{title}</h2>
      <p className={SubTitleStyle()}>{subtitle}</p>
    </FeedbackHeaderStyle>
  )
}

export default FeedbackHeader