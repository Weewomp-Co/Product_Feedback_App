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
  register?: UseFormRegisterReturn<any>,
  value?: string
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
  value,
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
        value={value}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default Input;
