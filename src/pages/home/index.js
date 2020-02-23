import React from 'react'
import Navbar from '../../components/navbar'
import LandingPage from './components/landingPage'
import ResumePage from './components/resumePage'
import './style.sass'

export default () => {
  return (
    <main className="main_app">
      <Navbar />
      <LandingPage />
      <ResumePage />
    </main>
  )
}
