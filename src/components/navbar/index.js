import React, { useState } from 'react'
import './style.sass'
import logo from '../../logo.jpg'

export default () => {
  const initState = {
    activeTab: 'Home',
    isMobile: false,
    isOpen: false,
  }

  const [state, setState] = useState(initState)

  return (
    <nav
      style={{
        height: state.isOpen ? 'auto' : '55px',
      }}
    >
      <img
        src={logo}
        alt="My Logo"
        style={{ alignSelf: state.isOpen ? 'flex-start' : 'center' }}
      />
      <ul style={{ flexDirection: state.isOpen ? 'column' : 'row' }}>
        <li
          style={{
            borderBottom:
              state.activeTab === 'Home' ? `solid 2px #F0DB4F` : null,
            padding: state.isOpen ? '20px' : '0 20px',
            width: state.isOpen ? '122px' : 'auto',
            order: state.isOpen ? 2 : null,
            display: state.isMobile ? (state.isOpen ? 'flex' : 'none') : null,
          }}
        >
          Home
        </li>
        <li
          style={{
            borderBottom:
              state.activeTab === 'Portfolio' ? `solid 2px #F0DB4F` : null,
            padding: state.isOpen ? '20px' : '0 20px',
            width: state.isOpen ? '122px' : 'auto',
            order: state.isOpen ? 3 : null,
            display: state.isMobile ? (state.isOpen ? 'flex' : 'none') : null,
          }}
        >
          Portfolio
        </li>
        <li
          style={{
            borderBottom:
              state.activeTab === 'Contact Us' ? `solid 2px #F0DB4F` : null,
            padding: state.isOpen ? '20px' : '0 20px',
            width: state.isOpen ? '122px' : 'auto',
            order: state.isOpen ? 4 : null,
            display: state.isMobile ? (state.isOpen ? 'flex' : 'none') : null,
          }}
        >
          Contact Me
        </li>
        <li
          style={{ order: state.isOpen ? 1 : null, alignSelf: 'flex-end' }}
          onClick={() =>
            setState({ ...state, isMobile: true, isOpen: !state.isOpen })
          }
        >
          <i className="fas fa-bars"></i>
        </li>
      </ul>
    </nav>
  )
}
