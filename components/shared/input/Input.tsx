import React, { Dispatch } from "react";
import { useEffect, useState } from "react";
import { InputStyle, ErrorMessage } from "./InputStyle";
import { styled, css, config } from '../../../stitches.config';
import {CSS} from '@stitches/react'

const inputError = css({
  border: "1px solid #D73737",
});

type InputProp = {
  isError: boolean
  value: string
  setValue: Dispatch<string>
  errorMessage: string
  type: string
  placeHolder: string
  as?: 'input' | 'textarea'
  css?: CSS<typeof config>
}

const Input: React.FC<InputProp> = ({
  isError,
  value,
  setValue,
  errorMessage,
  type= 'text',
  placeHolder,
  as= 'input',
  css= {}
}) => {


  return (
    <div>
      <InputStyle as={as}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder={placeHolder}
        isError={isError}
        css={css}
      />
      {
        (isError) ? (<ErrorMessage>{errorMessage}</ErrorMessage>) : (<div></div>)
      }
    </div>
  );
};

export default Input;