import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import About from '../sections/about'
import Contact from '../sections/contact'
import Landing from '../sections/landing'
import Portfolio from '../sections/portfolio'
import Skills from '../sections/skills'

const App = () => {
  return (<>
    <Head>
      <title>Nathan Martzolff</title>
      <meta name="description" content="Nathan Martzolff | Full Stack developer" />
    </Head>
    <ParallaxProvider>
      <Site />
    </ParallaxProvider>
  </>)
}

const Site: NextPage = () => {

  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.onclick = () => {
    }
    const skills = document.querySelectorAll('.skill')
    document.onmousemove = (e: any) => {
      if (isTouchDevice()) return
      const x = e.clientX - 20;
      const y = e.clientY - 20;
      const cursor = cursorRef.current!
      cursor.style.left = `${x}px`
      cursor.style.top = `${y}px`
      
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      skills.forEach((el: any, i) => {
        const translateX = i + 10 - (x - _w) * 0.01 * (i + 0.5)
        const translateY = i + 10 - (y - _h) * 0.01 * (i + 0.5)
        const translate = `${translateX}%, ${translateY}%`
        const rx = i % 2 === 0 ? translateX : Math.abs(translateX)
        const ry = i % 2 !== 0 ? translateY : Math.abs(translateY)
        const rotate = (rx - ry) / 3
        el.style.transform = `translate(${translate}) rotate(${rotate}deg)`
      })
    }
    document.querySelectorAll('section').forEach((el) => {
      el.onmouseenter = () => setCursorClassName(el.id);
      el.onmouseleave = () => setCursorClassName('none')
    })
  })

  const setCursorClassName = (className: string) => {
    cursorRef.current!.className = className
  }

  const isTouchDevice = () => {
    const deviceAgent = navigator.userAgent.toLowerCase();

    const isTouchDevice = ('ontouchstart' in document.documentElement) || 
    (deviceAgent.match(/(iphone|ipod|ipad)/) ||
    deviceAgent.match(/(android)/)  || 
    deviceAgent.match(/(iemobile)/) || 
    deviceAgent.match(/iphone/i) || 
    deviceAgent.match(/ipad/i) || 
    deviceAgent.match(/ipod/i) || 
    deviceAgent.match(/blackberry/i) || 
    deviceAgent.match(/bada/i))
    return isTouchDevice
  }

  return (
    <main>
      <div className="sections">
        <Landing />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <div id="cursor" ref={cursorRef}></div>
    </main>
  )
}

export default App
