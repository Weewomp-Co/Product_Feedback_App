import React from 'react'
import {useEffect, useState} from 'react'
import { InputStyle, InputErrorStyle } from './InputStyle';
import { styled } from "../../../stiches.config";


const Input = ({isError, value, setValue, errorMessage, type, placeHolder}) => {
  
  let pattern;
  const [localIsError, setLocalIsError] = useState(isError) 


  function checkIsError() {

    // switch(type){
    //   case "text":

    //     break;
    //   case "email":
    //     pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //     if (pattern.test(value)){
    //       setLocalIsError(false);
    //     } else{
    //       setLocalIsError(true);
    //     }   
    //     break;
    //   case "password":
    //     if (value.length < 8) {
    //       setLocalIsError(true);
    //     } else {
    //       setLocalIsError(false);
    //     }
    //     break;
    // }
  }
  
  
  useEffect(() => {  
    
  }, [localIsError])

  useEffect(() => {
    checkIsError();

    console.log(value);
  }, [value])

  return (

    <div>
      <div>
      <InputStyle type="text" className='input' value={value}
      onChange={(e) => {setValue(e.target.value)}} placeholder={placeHolder}/>
      </div>
      {
        (localIsError) ? (<h4 style={{
          color: "red",
          fontFamily: "jost",
          fontWeight: "300",
          margin: "0em",
          wordBreak: "keep-all",
          minWidth: "8rem"
        }}>{errorMessage}</h4>) : (<></>)
      }
    </div>

    
  )
  
}

export default Input