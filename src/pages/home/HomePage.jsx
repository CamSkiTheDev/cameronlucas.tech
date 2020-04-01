import React from 'react'
import Navbar from '../../components/'
import LandingPage from './components/landingPage'
import ResumePage from './components/resumePage'
import styled from 'styled-components'

export default () => {
  return (
    <main className="main_app">
      <Navbar activeTab="Home" />
      <LandingPage />
      <ResumePage />
    </main>
  )
}
