import React, { useState } from 'react'
import './style.sass'
import logo from '../../logo.jpg'

export default () => {
  const initState = {
    activeTab: 'Home',
  }

  const [state, setState] = useState(initState)

  return (
    <nav>
      <img src={logo} alt="My Logo" />
      <ul>
        <li
          style={{
            borderBottom:
              state.activeTab === 'Home' ? `solid 2px #F0DB4F` : null,
          }}
        >
          Home
        </li>
        <li
          style={{
            borderBottom:
              state.activeTab === 'Portfolio' ? `solid 2px #F0DB4F` : null,
          }}
        >
          Portfolio
        </li>
        <li
          style={{
            borderBottom:
              state.activeTab === 'Contact Us' ? `solid 2px #F0DB4F` : null,
          }}
        >
          Contact Me
        </li>
      </ul>
    </nav>
  )
}
