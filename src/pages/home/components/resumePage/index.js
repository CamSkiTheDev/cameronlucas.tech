import React from 'react'
import ResumeTitle from './resumeTitle'
import ResumeUnit from './resumeUnit'

export default () => (
  <div className="resume">
    <ResumeTitle title="EXPERIENCE" />
    <ResumeUnit
      title="Freelance Web Development Company"
      company="Siteit Solutions"
      timeAtCompany="2018 - Present"
      description={
        <div>
          Started a web development company where I worked with companies big
          and small to build websites and web apps. Most clients were small
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
        </div>
      }
    />

    <ResumeTitle title="EDUCATION" />
    <ResumeUnit
      title="freeCodeCamp - Front End Libraries Certification"
      company="freeCodeCamp"
      timeAtCompany="2019"
      description={
        <div>
          Completed the 300+(hours) freeCodeCamp Front End Libraries
          Certification course. Learned the fundamentals of React, Redux,
          jQuery, Bootstrap, and Sass.
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
        </div>
      }
    />
    <ResumeUnit
      title="freeCodeCamp - JavaScript Algorithms & Data Structures Certification"
      company="freeCodeCamp"
      timeAtCompany="2019"
      description={
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
        </div>
      }
    />
    <ResumeUnit
      title="freeCodeCamp - Responsive Web Design Certification"
      company="freeCodeCamp"
      timeAtCompany="2018"
      description={
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
        </div>
      }
    />
    <ResumeUnit
      title="Mclain High School"
      company="Mclain High School (Lakewood, CO)"
      timeAtCompany="2019"
      description="Graduated from Mclain High School in Lakewood Colorado, Class of 2019"
    />
  </div>
)
