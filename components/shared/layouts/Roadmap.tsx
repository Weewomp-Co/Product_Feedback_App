import React from 'react'
import {Title, Value, RoadmapContainer, LinkStyle, TitleSection, MainSection, MarkerPlanned, MarkerInProgress, MarkerLive, itemText, itemWrapper} from './RoadmapStyle'
import Link from 'next/link'

const Roadmap = ({Planned, InProgress, Live}) => {
  
  type RoadmapContainerProp = React.PropsWithChildren<{
    Planned: number;
    InProgress: number;
    Live: number;
  }>

  return (
    <RoadmapContainer>
      <div className={TitleSection()}>
        <div className={Title()}>
          Roadmap
        </div>
        <div className={LinkStyle()}>
          <Link href="/feedback/roadmap">View</Link>
        </div>
      </div>
      <div className={MainSection()}>
        <div className={itemWrapper()}>
          <div className={MarkerPlanned()}></div>
          <div className={itemText()}>Planned</div>
          <h3 style={{
            marginLeft: 'auto'
          }} className={Value()}>{Planned}</h3>
        </div>
        <div  className={itemWrapper()}>
          <div className={MarkerInProgress()}></div>
          <div className={itemText()}>In-Progress</div>
          <h3 style={{
            marginLeft: 'auto'
          }} className={Value()}>{InProgress}</h3>
        </div>
        <div className={itemWrapper()}>
          <div className={MarkerLive()}></div>
          <div className={itemText()}>Live</div>
          <h3 style={{
            marginLeft: 'auto'
          }} className={Value()}>{Live}</h3>
        </div>
      </div>
    </RoadmapContainer>
  )
}

export default Roadmap