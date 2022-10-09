import React, { Dispatch } from "react";
import { useEffect, useState } from "react";
import { InputStyle, ErrorMessage } from "./InputStyle";
import { styled, css } from '../../../stitches.config';

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
}

const Input: React.FC<InputProp> = ({
  isError,
  value,
  setValue,
  errorMessage,
  type= 'text',
  placeHolder,
  as= 'input'
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
      />
      {
        (isError) ? (<ErrorMessage>{errorMessage}</ErrorMessage>) : (<div></div>)
      }
    </div>
  );
};

export default Input;
