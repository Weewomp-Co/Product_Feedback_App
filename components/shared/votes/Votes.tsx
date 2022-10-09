import React from 'react'
import {useState, useEffect} from 'react'
import upArrow1 from '/public/upArrow.svg'
import upArrow2 from '/public/upArrowActive.svg'
import { VotesStyledInactive, VotesStyledActive, VotesStyledWrapper} from './VotesStyle'
import Image from 'next/image'

const Votes = ({
  votes,
  active
}) => {

  const [Active, setActive] = useState(active);

  function createVotesString(votes){

    let newStr = new Intl.NumberFormat('en-US', { 
      notation: 'compact' 
    }).format(votes);

    return newStr
  }

  return (

    (!Active) ? (
    <VotesStyledInactive onClick={() => setActive(!Active)}>
      <VotesStyledWrapper>
        <Image src={upArrow1} alt={""}/>
        <div>{createVotesString(votes)}</div>
      </VotesStyledWrapper>
    </VotesStyledInactive>
    )
    : (
    <VotesStyledActive onClick={() => setActive(!Active)}>
      <VotesStyledWrapper>
        <Image src={upArrow2} alt={""}/>
        <div>{createVotesString(votes+1)}</div>
      </VotesStyledWrapper>
    </VotesStyledActive>)
  )
}

export default Votes