import React from 'react'
import styled from 'styled-components'

export default props => {
  const SocialButton = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-family: 'Roboto';
    background: ${props.color};
  `

  return (
    <SocialButton onClick={() => window.open(props.url, '_blank')}>
      <i className={props.iconClass} /> {props.value}
    </SocialButton>
  )
}
