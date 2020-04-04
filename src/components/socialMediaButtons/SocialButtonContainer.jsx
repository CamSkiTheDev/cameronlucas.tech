import React from 'react'
import styled from 'styled-components'
import SocialButton from './SocialButton'

const SocialMediaButtonsContainer = styled.div`
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <SocialMediaButtonsContainer>
      <SocialButton
        value="Linked in"
        color="#006192"
        iconClass="fab fa-linkedin"
        url="https://www.linkedin.com/in/cameron-lucas-68a27217a/"
      />
      <SocialButton
        value="Twitter"
        color="#1DA1F2"
        iconClass="fab fa-twitter"
        url="https://twitter.com/SiteitSolutions"
      />
      <SocialButton
        value="Youtube"
        color="#FF0000"
        iconClass="fab fa-youtube"
        url="https://www.youtube.com/c/thelifeofadev"
      />
      <SocialButton
        value="GitHib"
        color="#211F1F"
        iconClass="fab fa-github"
        url="https://github.com/CamSkiTheDev"
      />
    </SocialMediaButtonsContainer>
  )
}
