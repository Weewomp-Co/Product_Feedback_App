import React from 'react';
import { css, styled } from "../../../stitches.config";
import { FeedbackHeaderStyle, TitleStyle, SubTitleStyle } from './FeedbackHeaderStyle';

const FeedbackHeader = ({title, subtitle}) => {
  return (
    <FeedbackHeaderStyle>
      <div className={TitleStyle()}>{title}</div>
      <div className={SubTitleStyle()}>{subtitle}</div>
    </FeedbackHeaderStyle>
  )
}

export default FeedbackHeader