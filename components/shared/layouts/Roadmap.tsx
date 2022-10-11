import React from 'react'
import {Title, Value, RoadmapContainer, LinkStyle, TitleSection, MainSection, MarkerSection, MarkerPlanned, MarkerInProgress, MarkerLive} from './RoadmapStyle'
import { styled, css } from '@stitches/react'


const Roadmap = ({Planned, InProgress, Live}) => {
  

  return (
    <RoadmapContainer>
      <div className={TitleSection()}>
        <div className={Title()}>
          Roadmap
        </div>
        <div className={LinkStyle()}>
          View
        </div>
      </div>
      <div style={{
        display: 'grid',
        height: '100%',
        gridTemplateAreas: `
          'Dot Planned Value'
          'Dot InProgress Value'
          'Dot Live Value'
        `
      }}>
          <div style={{
            gridArea: 'Dot'
          }}></div>
          <div style={{
            gridArea: 'Planned'
          }}>Planned</div>
          <div  style={{
            gridArea: 'Value'
          }}>{Planned}</div>
          <div style={{
            gridArea: 'Dot'
          }}></div>
          <div style={{
            gridArea: 'InProgress'
          }}>In-Progress</div>
          <div style={{
            gridArea: 'Value'
          }}>{InProgress}</div>
          <div style={{
            gridArea: 'Dot'
          }}></div>
          <div style={{
            gridArea: 'Live'
          }}>Live</div>
          <div style={{
            gridArea: 'Value'
          }}>{Live}</div>
      </div>
    </RoadmapContainer>
  )
}

export default Roadmap