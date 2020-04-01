import React from 'react'
import './style.sass'
import Navbar from '../../components/navbar/NavBar'

export default () => {
  return (
    <main className="portfolio_main_container">
      <Navbar activeTab="Portfolio" />
      <h2>Projects</h2>
      <div className="project_container">
        <div
          className="project_card"
          style={{
            background: `url('https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/79537225_154519985844703_6240801087625312206_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=K6lwDlV52JQAX9NdT6x&oh=a0f28976394032f54602d1b23f101990&oe=5E986D45')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="gradient_div">
            <div className="logo_div" />
            <div className="content_div">
              <span>
                High-end bakery located in The Rhino Art District of Denver at
                the Source Hotel
              </span>
              <button>
                Visit Website <i class="fal fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="project_card"
          style={{
            background: `url('https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/79537225_154519985844703_6240801087625312206_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=K6lwDlV52JQAX9NdT6x&oh=a0f28976394032f54602d1b23f101990&oe=5E986D45')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="gradient_div">
            <div className="logo_div" />
            <div className="content_div">
              <span>
                High-end bakery located in The Rhino Art District of Denver at
                the Source Hotel
              </span>
              <button>
                Visit Website <i class="fal fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="project_card"
          style={{
            background: `url('https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/79537225_154519985844703_6240801087625312206_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=K6lwDlV52JQAX9NdT6x&oh=a0f28976394032f54602d1b23f101990&oe=5E986D45')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="gradient_div">
            <div className="logo_div" />
            <div className="content_div">
              <span>
                High-end bakery located in The Rhino Art District of Denver at
                the Source Hotel
              </span>
              <button>
                Visit Website <i class="fal fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
