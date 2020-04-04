import React from 'react'
import styled from 'styled-components'

export default props => {
  const StyledSectionTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
  `
  return (
    <StyledSectionTitle>
      <StyledTitleBars />
      <StyledTitle>{props.title}</StyledTitle>
      <StyledTitleBars />
    </StyledSectionTitle>
  )
}
