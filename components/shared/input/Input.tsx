import React from 'react'
import {useEffect, useState} from 'react'
import { InputStyle, InputErrorStyle } from './InputStyle';
import { styled } from "../../../stiches.config";


const Input = (props, {value, setValue, errorMessage, type, placeHolder}) => {
  
  let pattern;
  const [isError, setIsError] = useState(props.isError)

  function checkIsError() {
  switch(type){
    case "text":

      break;
    case "email":
      pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (pattern.test(value)){
        isError = false;
      } else{
        isError = true;
      }   
      break;
    case "password":
      if (value.length < 8) {
        isError = true;
      } else {
        isError = false;
      }
      break;
  }
  
  }
  
  
  useEffect(() => {
    document.querySelector('input')?.focus()
  }, [isError])

  useEffect(() => {
    checkIsError();
  }, [value])

  return (

    <div>
        {
          (!isError) ? (
          <div>
          <InputStyle type="text" className='input' value={value}
          onChange={(e) => {setValue(e.target.value);
            () => checkIsError()}} placeholder={placeHolder}/>
          </div>) : (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column"
            }} className='inputWrapper'>
              <InputErrorStyle type="text" className='input error' value={value}
              onChange={(e) => {setValue(e.target.value);
              () => checkIsError()}} autoFocus={true} placeholder={placeHolder}/>
              <h4 style={{
                color: "red",
                fontFamily: "jost",
                fontWeight: "300",
                margin: "0em",
                wordBreak: "keep-all",
                minWidth: "8rem"
              }}>{errorMessage}</h4>
            </div>    
          )
        }  
    </div>

    
  )
  
}

export default Input