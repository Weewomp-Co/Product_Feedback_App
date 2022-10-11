import React from "react";
import { InputStyle, ErrorMessage } from "./InputStyle";
import { config } from '../../../stitches.config';
import { CSS } from '@stitches/react'
import { UseFormRegisterReturn } from "react-hook-form";

type InputProp = {
  id?: string
  isError: boolean
  errorMessage: string
  type: string
  placeHolder?: string
  as?: 'input' | 'textarea'
  css?: CSS<typeof config>,
  register?: UseFormRegisterReturn<any>
}

const Input: React.FC<InputProp> = ({
  id="",
  isError,
  errorMessage,
  type= 'text',
  register,
  placeHolder="",
  as='input',
  css={},
}) => {
  return (
    <div>
    <InputStyle 
        id={id}
        as={as}
        type={type}
        placeholder={placeHolder}
        isError={isError}
        css={css}
        {...register}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default Input;
