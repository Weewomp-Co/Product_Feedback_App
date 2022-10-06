import React from 'react'
import {useEffect, useState} from 'react'
import { InputStyle, InputErrorStyle } from './InputStyle';
import { styled } from "../../../stiches.config";


const Input = ({value, setValue, isError, errorMessage, type, placeHolder}) => {
  
  


  switch(type){
    case "text":
    if (value.length > 4){
      isError = true;

    }
      break;
    case "email":
    
      break;
    case "password":

      break;

  }
  
  useEffect(() => {
    document.querySelector('input')?.focus()
  }, [isError])

  return (

    <div>
        {
          (!isError) ? (
          <div>
          <InputStyle type="text" className='input' value={value}
          onChange={(e) => setValue(e.target.value)} placeholder={placeHolder}/>
          </div>) : (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column"
            }} className='inputWrapper'>
              <InputErrorStyle type="text" className='input error' value={value}
              onChange={(e) => setValue(e.target.value)} autoFocus={true} placeholder={placeHolder}/>
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