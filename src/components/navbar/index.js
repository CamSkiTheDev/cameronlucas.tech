import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.sass'
import logo from '../../logo.jpg'

export default props => {
  const initState = {
    activeTab: props.activeTab,
    isMobile: false,
    isOpen: false,
  }

  const [state, setState] = useState(initState)

  return (
    <nav
      style={{
        height: state.isOpen ? 'auto' : '55px',
      }}
      className="navbar"
    >
      <img
        src={logo}
        alt="My Logo"
        style={{ alignSelf: state.isOpen ? 'flex-start' : 'center' }}
        className="navbar_logo"
      />
      <ul
        style={{ flexDirection: state.isOpen ? 'column' : 'row' }}
        className="navbar_list"
      >
        <Link
          to="/"
          style={{
            borderBottom:
              state.activeTab === 'Home' ? `solid 2px #F0DB4F` : null,
            padding: state.isOpen ? '20px' : '0 20px',
            width: state.isOpen ? '122px' : 'auto',
            order: state.isOpen ? 2 : null,
            display: state.isMobile ? (state.isOpen ? 'flex' : 'none') : null,
          }}
          className="navbar_button_container"
        >
          <li className="navbar_button">Home</li>
        </Link>
        <Link
          to="/Portfolio"
          style={{
            borderBottom:
              state.activeTab === 'Portfolio' ? `solid 2px #F0DB4F` : null,
            padding: state.isOpen ? '20px' : '0 20px',
            width: state.isOpen ? '122px' : 'auto',
            order: state.isOpen ? 3 : null,
            display: state.isMobile ? (state.isOpen ? 'flex' : 'none') : null,
          }}
          className="navbar_button_container"
          onClick={() => setState({ ...state, activeTab: 'Portfolio' })}
        >
          <li className="navbar_button">Portfolio</li>
        </Link>
        <Link
          to="/ContactMe"
          style={{
            borderBottom:
              state.activeTab === 'Contact Us' ? `solid 2px #F0DB4F` : null,
            padding: state.isOpen ? '20px' : '0 20px',
            width: state.isOpen ? '122px' : 'auto',
            order: state.isOpen ? 4 : null,
            display: state.isMobile ? (state.isOpen ? 'flex' : 'none') : null,
          }}
          className="navbar_button_container"
        >
          <li className="navbar_button">Contact Me</li>
        </Link>
        <Link
          style={{ order: state.isOpen ? 1 : null, alignSelf: 'flex-end' }}
          className="navbar_button_container"
          onClick={() =>
            setState({ ...state, isMobile: true, isOpen: !state.isOpen })
          }
        >
          <li className="navbar_button">
            <i className="fas fa-bars"></i>
          </li>
        </Link>
      </ul>
    </nav>
  )
}
