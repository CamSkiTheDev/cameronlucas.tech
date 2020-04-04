import React from 'react'
import styled from 'styled-components'

export default props => {
  const StyledImgWrapper = styled.div`
    margin: 50px auto;
    width: 260px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-self: center;
    background: linear-gradient(
      90deg,
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 115, 0, 1) 25%,
      rgba(254, 255, 0, 1) 50%,
      rgba(0, 255, 162, 1) 75%,
      rgba(0, 245, 255, 1) 100%
    );
    border-radius: 50%;
    animation: rotate-wrapper 5s linear infinite;
  `
  const StyledImg = styled.img`
    margin: auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    background-position: left;
    animation: reverse-rotate 5s linear infinite;
  `
  return (
    <StyledImgWrapper>
      <StyledImg src={props.photo} alt="of me" />
    </StyledImgWrapper>
  )
}
