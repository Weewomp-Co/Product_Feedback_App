import React from 'react'
import Votes from '../votes/Votes'
import {FeedbackPreviewContainer} from './FeedbackPreviewStyle'
import {useState, useEffect} from 'react'

type FeedbackPreviewProp = React.PropsWithChildren<{
  Votes: number;
  Title: string;
  Subtitle: string;
  Tags: Array;
  setVotes: Dispatch<number>;
}>

const FeedbackPreview = () => {
  const [votes, setVotes] = useState(30);
  const [active, setActive] = useState(false)

  

  return (
    <div>
        <Votes votes={votes} setVotes={setVotes} active={active} setActive={setActive}/>     
     

    </div>
  )
}

export default FeedbackPreview