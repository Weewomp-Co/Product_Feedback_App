import React from 'react'
import {useState, useEffect} from 'react'
import upArrow1 from '/public/upArrow.svg'
import upArrow2 from '/public/upArrowActive.svg'
import { VotesStyledInactive, VotesStyledActive} from './VotesStyle'
import Image from 'next/image'

const Votes = ({votes, active}) => {

  const [Active, setActive] = useState(active);



  return (

    (!Active) ? (
    <VotesStyledInactive onClick={() => setActive(!Active)}>
      <Image src={upArrow1} alt={""}/>
      <div>{votes}</div>
    </VotesStyledInactive>
    )
    : (<VotesStyledActive onClick={() => setActive(!Active)}>
      <Image src={upArrow1} alt={""}/>
      <div>{votes+1}</div>
    </VotesStyledActive>)
  )
}

export default Votes