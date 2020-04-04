import React from 'react'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledTitleBars = styled.div`
  width: 100%;
  height: 5px;
  background: #00ffff;
`
const StyledTitle = styled.span`
  padding: 0 30px;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 2em;
  white-space: nowrap;
`

export default props => {
  return (
    <StyledSectionTitle>
      <StyledTitleBars />
      <StyledTitle>{props.title}</StyledTitle>
      <StyledTitleBars />
    </StyledSectionTitle>
  )
}
