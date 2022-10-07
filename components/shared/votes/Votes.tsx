import React from 'react'
import upArrow1 from './upArrow1.png'
import { VotesStyledInactive } from './VotesStyle'
import Image from 'next/image'

const Votes = () => {
  return (
    <VotesStyledInactive>
      <Image src={upArrow1} alt={""} width={100} height={100}/>
      <h3>99</h3>
    </VotesStyledInactive>
  )
}

export default Votes