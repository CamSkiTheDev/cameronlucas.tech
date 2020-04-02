import React from 'react'
import styled from 'styled-components'
import {
  Navbar,
  LandingPageImg,
  TypeWriter,
  SocialButtonContainer,
} from '../../components'
import photo from '../../photo.jpg'
import ResumePage from './components/resumePage'

export default () => {
  const MainLandingPageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 95vh;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `

  const LearnMoreBlurbContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    font-size: 1.2em;
    color: #ffffff;
  `

  return (
    <React.Fragment>
      <Navbar activeTab="Home" />
      <MainLandingPageContainer>
        <LandingPageImg photo={photo} />
        <TypeWriter />
        <SocialButtonContainer />
        <LearnMoreBlurbContainer>
          <span>learn more about me.</span>
          <i class="fas fa-chevron-down" style={{ margin: '20px' }}></i>
        </LearnMoreBlurbContainer>
      </MainLandingPageContainer>
      <ResumePage />
    </React.Fragment>
  )
}
