import React from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'

export default () => {
  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate
    this.el = el
    this.loopNum = 0
    this.period = parseInt(period, 10) || 2000
    this.txt = ''
    this.tick()
    this.isDeleting = false
  }

  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length
    var fullTxt = this.toRotate[i]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.el.children[0].innerHTML = `${this.txt} <span style="width: 0.08em; display: inline-block; background: #fff; overflow: hidden; animation: caret 1s steps(1) infinite;">&nbsp;</span>`

    var that = this
    var delta = 200 - Math.random() * 100

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

  useEffect(() => {
    var element = document.querySelector('.typeWriter')
    var toRotate = element.getAttribute('data-type')
    var period = element.getAttribute('data-period')
    if (toRotate) {
      new TxtType(element, JSON.parse(toRotate), period)
    }
  }, [])

  const TypeWriterSpan = styled.span`
    width: 75%;
    height: 3.5em;
    color: #fff;
    font-family: 'Neutra Text';
    font-size: 3.24em;
    letter-spacing: 0.05em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    @media only screen and (max-width: 610px) {
      height: 5em;
    }
  `

  const TypeWriterWrap = styled.span`
    text-align: start;
    color: #fff;
    word-break: break-word;
  `

  return (
    <TypeWriterSpan
      className="typeWriter"
      data-type={`[" Hello, my name is Cameron.", "I'm a Front-End Developer.", "I build awesome websites and web apps!", "I love design and development!", "Let's build something awesome!"]`}
      data-period="2000"
    >
      <TypeWriterWrap className="typeWriterWrap"></TypeWriterWrap>
    </TypeWriterSpan>
  )
}
