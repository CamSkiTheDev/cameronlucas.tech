/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  Navbar,
  LandingPageImg,
  TypeWriter,
  SocialButtonContainer,
  ResumeSectionTitle,
  ResumeUnit,
} from '../../components'
import photo from '../../photo.jpg'

const Main = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainLandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 95vh;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LearnMoreBlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans';
  font-size: 1.2em;
  color: #ffffff;
`

const MainResumePageContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default () => {
  const [workExperienceState] = useState([
    {
      title: `Freelance Web Development Company`,
      company: `Siteit Solutions`,
      timeAtCompany: `2018 - Present`,
      description: [
        <div>
          Started a web development company where I worked with companies big
          and small to build websites and web apps.Most clients were small
          businesses such as bakeries, hair salons, automotive shops, etc.
          <br />
          <br />
          Siteit Solutions -{' '}
          <a
            href="https://siteitsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://siteitsolutions.com/
          </a>
          <br />
          Most recent project -{' '}
          <a
            href="https://portfolio.siteitsolutions.com/ReunionBreadCo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://portfolio.siteitsolutions.com/ReunionBreadCo/
          </a>
        </div>,
      ],
    },
  ])

  const [educationState] = useState([
    {
      title: `freeCodeCamp - Front End Libraries Certification`,
      company: `freeCodeCamp`,
      timeAtCompany: `2019`,
      description: [
        <div>
          Completed the 300+(hours) freeCodeCamp Front End Libraries
          Certification course.Learned the fundamentals of React, Redux, jQuery,
          Bootstrap, and Sass.
          <br />
          <br />
          Link to certification -{' '}
          <a
            href="https://www.freecodecamp.org/certification/camskithedev/front-end-libraries"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freecodecamp.org/certification/camskithedev/front-end-libraries
          </a>
        </div>,
      ],
    },
    {
      title: `freeCodeCamp - JavaScript Algorithms & Data Structures Certification`,
      company: `freeCodeCamp`,
      timeAtCompany: `2019`,
      description: [
        <div>
          Completed the 300+(hours) freeCodeCamp JavaScript Algorithms & Data
          Structures Certification course. Learned the fundamentals of
          JavaScript and es6. As well as the basics of JavaScript Algorithms and
          Data Structures.
          <br />
          <br />
          Link to certification -{' '}
          <a
            href="https://www.freecodecamp.org/certification/camskithedev/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freecodecamp.org/certification/camskithedev/javascript-algorithms-and-data-structures
          </a>
        </div>,
      ],
    },
    {
      title: `freeCodeCamp - Responsive Web Design Certification`,
      company: `freeCodeCamp`,
      timeAtCompany: `2018`,
      description: [
        <div>
          Completed the 300+(hours) freeCodeCamp Responsive Web Design
          Certification course. Learned the fundamentals of HTML & CSS. As well
          as best practices for SEO and accessibility.
          <br />
          <br />
          Link to certification -{' '}
          <a
            href="https://www.freecodecamp.org/certification/camskithedev/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.freecodecamp.org/certification/camskithedev/responsive-web-design
          </a>
        </div>,
      ],
    },
    {
      title: `Mclain High School`,
      company: `Mclain High School (Lakewood, CO)`,
      timeAtCompany: `2017 - 2019`,
      description: `Graduated from Mclain High School in Lakewood Colorado, Class of 2019`,
    },
  ])

  const [sideProjectsState, setSideProjectState] = useState([])
  useEffect(() => {
    fetch('/api/youtube/stats')
      .then(res => res.json())
      .then(json => {
        setSideProjectState([
          {
            title: `${json.channelInfo.channelTitle} - YouTube`,
            description: [
              `My YouTube channel with ${Number(
                json.channelInfo.channelVideoCount
              ).toLocaleString(
                'en-us'
              )}+ video tutorials on web development, game modification, and mod menu development. With over ${Number(
                json.channelInfo.channelViewCount
              ).toLocaleString('en-us')} video views and ${Number(
                json.channelInfo.channelSubCount
              ).toLocaleString(
                'en-us'
              )} subscribers. Join us and let's build something awesome. `,
              <a href="https://www.youtube.com/c/thelifeofadev/?sub_confirmation=1">
                Subscribe Now
              </a>,
            ],
          },
        ])
      })
      .catch(err => console.error('Fetch Error:', err))
  }, [])

  return (
    <Main>
      <Navbar activeTab="Home" />
      <MainLandingPageContainer>
        <LandingPageImg photo={photo} />
        <TypeWriter />
        <SocialButtonContainer />
        <LearnMoreBlurbContainer>
          <span>learn more about me.</span>
          <i class="fas fa-chevron-down" style={{ margin: '20px' }}></i>
        </LearnMoreBlurbContainer>
      </MainLandingPageContainer>
      <MainResumePageContainer>
        <ResumeSectionTitle title="EXPERIENCE" />
        {workExperienceState.map(x => (
          <ResumeUnit
            title={x.title}
            company={x.company}
            timeAtCompany={x.timeAtCompany}
            description={x.description}
          />
        ))}
        <ResumeSectionTitle title="SIDE PROJECTS" />
        {sideProjectsState.map(x => (
          <ResumeUnit title={x.title} description={x.description} />
        ))}
        <ResumeSectionTitle title="EDUCATION" />
        {educationState.map(x => (
          <ResumeUnit
            title={x.title}
            company={x.company}
            timeAtCompany={x.timeAtCompany}
            description={x.description}
          />
        ))}
      </MainResumePageContainer>
    </Main>
  )
}
