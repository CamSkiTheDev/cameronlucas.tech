import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../logo.jpg'

export default props => {
  console.log(window.innerWidth)
  const [activeTab, setActiveTab] = useState(props.activeTab)
  const [isMobile, toggleMobile] = useState(
    window.innerWidth <= 610 ? true : false
  )
  const [isOpen, toggleOpen] = useState(false)

  const Nav = styled.nav`
    margin: 0 auto;
    width: 100%;
    height: ${isOpen ? 'auto' : '55px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #181c22;
    transition: all 1s linear;
  `

  const LogoImg = styled.img`
    width: 55px;
    height: 55px;
    align-self: ${isOpen ? 'flex-start' : 'center'};
  `

  const NavList = styled.ul`
    margin: 0;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: ${isOpen ? 'column' : 'row'};
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: 'Neutra Text';
  `

  const StyledLink = styled(Link)`
    margin: 0;
    padding: ${isOpen ? '20px' : '0 20px'};
    height: 100%;
    width: ${isOpen ? '122px' : 'auto'};
    display: ${isMobile ? (isOpen ? 'flex' : 'none') : 'flex'};
    justify-content: center;
    align-items: center;
    order: ${isOpen ? 2 : null};
    text-decoration: none;
    border-bottom: solid 2px transparent;
    color: #ffffff;
    &:nth-child(4) {
      display: none;
      width: 0px;
    }
    &:hover {
      cursor: pointer;
      border-bottom: solid 2px #f0db4f;
    }
    @media only screen and (max-width: 610px) {
      padding: 0;
      min-height: 55px;
      &:hover {
        background: #f0db4f;
        color: #181c22;
      }
      &:nth-child(4) {
        display: flex;
        width: auto;
      }
    }
  `

  const StyledNavButtons = styled.li`
    padding: 10px 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    @media only screen (max-width: 610px) {
      padding: 0 20px;
    }
  `

  return (
    <Nav className="navbar">
      <LogoImg src={logo} alt="My Logo" />
      <NavList>
        <StyledLink
          to="/"
          style={{
            borderBottom: activeTab === 'Home' ? `solid 2px #F0DB4F` : null,
          }}
        >
          <StyledNavButtons>Home</StyledNavButtons>
        </StyledLink>
        <StyledLink
          to="/Portfolio"
          style={{
            borderBottom:
              activeTab === 'Portfolio' ? `solid 2px #F0DB4F` : null,
          }}
          onClick={() => setActiveTab('Portfolio')}
        >
          <StyledNavButtons>Portfolio</StyledNavButtons>
        </StyledLink>
        <StyledLink
          to="/ContactMe"
          style={{
            borderBottom:
              activeTab === 'Contact Us' ? `solid 2px #F0DB4F` : null,
          }}
        >
          <StyledNavButtons>Contact Me</StyledNavButtons>
        </StyledLink>
        <StyledLink
          style={{ order: isOpen ? 1 : null, alignSelf: 'flex-end' }}
          onClick={() => {
            toggleMobile(true)
            toggleOpen(!isOpen)
          }}
        >
          <StyledNavButtons>
            <i className="fas fa-bars"></i>
          </StyledNavButtons>
        </StyledLink>
      </NavList>
    </Nav>
  )
}
