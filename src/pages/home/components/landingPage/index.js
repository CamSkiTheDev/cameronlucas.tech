import React, { useEffect } from 'react'
import photo from '../../../../photo.jpg'

export default () => {
  useEffect(() => {
    const TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    }

    TxtType.prototype.tick = function() {
      const i = this.loopNum % this.toRotate.length
      const fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      const that = this
      let delta = 200 - Math.random() * 100

      if (this.isDeleting) {
        delta /= 2
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function() {
        that.tick()
      }, delta)
    }

    const elements = document.getElementsByClassName('typewrite')
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute('data-type')
      const period = elements[i].getAttribute('data-period')
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period)
      }

      // INJECT CSS
      const css = document.createElement('style')
      css.type = 'text/css'
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}'
      document.body.appendChild(css)
    }
  }, [])

  return (
    <div className="main_container">
      <div className="img_wrapper">
        <img src={photo} alt="of me" />
      </div>
      <span
        className="typewrite"
        data-period="2000"
        data-type={`["Hello, my name is Cameron.", "I'm a Front-End Developer.", "I build awesome websites and web apps!", "I love design and development!", "Let's build something awesome!"]`}
      ></span>
      <div className="social_container">
        <button
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/cameron-lucas-68a27217a/',
              '_blank'
            )
          }
        >
          <i className=" fab fa-linkedin" /> Linked in
        </button>
        <button
          onClick={() =>
            window.open('https://twitter.com/SiteitSolutions', '_blank')
          }
        >
          <i className="fab fa-twitter" /> Twitter
        </button>
        <button
          onClick={() =>
            window.open('https://www.youtube.com/c/thelifeofadev', '_blank')
          }
        >
          <i className="fab fa-youtube" /> YouTube
        </button>
        <button
          onClick={() =>
            window.open('https://github.com/CamSkiTheDev', '_blank')
          }
        >
          <i className="fab fa-github" /> GitHub
        </button>
      </div>
    </div>
  )
}
