import React from 'react'
import {useState, useEffect} from 'react'
import upArrow1 from '/public/upArrow.svg'
import upArrow2 from '/public/upArrowActive.svg'
import { VotesStyledInactive, VotesStyledActive} from './VotesStyle'
import Image from 'next/image'

const Votes = ({votes, active}) => {

  const [Active, setActive] = useState(active);

  function createVotesString(votes){
    // if (votes > 999 && votes < 10000) {
    //   let newStr = votes.toLocaleString();
    //   let mag = "k"


    //   newStr = newStr.split("")

    //   for(let i = 0; i < newStr.length; i++){
    //     if (newStr[i] === ','){
    //       let localizedString =  newStr;
    //       localizedString = localizedString.splice(0, i+2)

    //       localizedString.push('K')

    //       localizedString = localizedString.join("")

    //       localizedString.split("")
          


    //       localizedString = localizedString.replace(',', '.')

    //       return localizedString
    //     }
    //   }


    // }

    // if (votes < 1000){
    //   return votes.toString();
    // }

    let newStr = new Intl.NumberFormat('en-US', { 
      notation: 'compact' 
    }).format(votes);

    

    return newStr
  }

  return (

    (!Active) ? (
    <VotesStyledInactive onClick={() => setActive(!Active)}>
      <Image src={upArrow1} alt={""}/>
      <div>{createVotesString(votes)}</div>
    </VotesStyledInactive>
    )
    : (<VotesStyledActive onClick={() => setActive(!Active)}>
      <Image src={upArrow2} alt={""}/>
      <div>{createVotesString(votes+1)}</div>
    </VotesStyledActive>)
  )
}

export default Votes