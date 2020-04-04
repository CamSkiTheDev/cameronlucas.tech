import React from 'react'
import styled from 'styled-components'

export default props => {
  const ResumeUnit = styled.div`
    margin: 20px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #ffffff;
  `
  const ResumeTitle = styled.span`
    font-family: 'Neutra Text';
    font-size: 1.5em;
  `

  const ResumeInfoContainer = styled.div`
    margin: 5px 0;
    display: flex;
  `

  const ResumeInfoUnit = styled.div`
    padding: 0 10px 0 0;
    font-family: 'Open Sans';
    &:nth-child(1) {
      border-right: solid 2px #ffffff;
    }
    &:nth-child(2) {
      padding: 0 0 0 10px;
    }
  `

  const ResumeDesc = styled.div`
    max-width: 850px;
    font-family: 'Roboto';
    line-height: 1.5em;
    a {
      color: #00ffff;
      word-wrap: break-word;
    }
  `
  return (
    <ResumeUnit>
      <ResumeTitle>{props.title}</ResumeTitle>
      <ResumeInfoContainer>
        <ResumeInfoUnit>{props.company}</ResumeInfoUnit>
        <ResumeInfoUnit>{props.timeAtCompany}</ResumeInfoUnit>
      </ResumeInfoContainer>
      <ResumeDesc>{props.description}</ResumeDesc>
    </ResumeUnit>
  )
}
