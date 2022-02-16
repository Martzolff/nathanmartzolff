import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import About from '../sections/about'
import Contact from '../sections/contact'
import Landing from '../sections/landing'
import Portfolio from '../sections/portfolio'

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
    setVH()
    window.addEventListener('resize', setVH)
    document.onmousemove = (e: any) => {
      if (isTouchDevice()) return
      const x = e.clientX - 20;
      const y = e.clientY - 20;
      const cursor = cursorRef.current!
      cursor.style.left = `${x}px`
      cursor.style.top = `${y}px`
    }
    document.querySelectorAll('section').forEach((el) => {
      el.onmouseenter = () => setCursorClassName(el.id)
      el.onmouseleave = () => setCursorClassName('none')
    })
  })

  const setVH = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  const setCursorClassName = (className: string) => {
    cursorRef.current!.className = className
  }

  const isTouchDevice = () => {
    const deviceAgent = navigator.userAgent.toLowerCase();

    return ('ontouchstart' in document.documentElement) || 
      (deviceAgent.match(/(iphone|ipod|ipad)/) ||
      deviceAgent.match(/(android)/)  || 
      deviceAgent.match(/(iemobile)/) || 
      deviceAgent.match(/iphone/i) || 
      deviceAgent.match(/ipad/i) || 
      deviceAgent.match(/ipod/i) || 
      deviceAgent.match(/blackberry/i) || 
      deviceAgent.match(/bada/i))
  }

  const toggleTheme = () => {
    const htmlTag = document.documentElement
    const currentTheme = htmlTag.className
    htmlTag.className = currentTheme == 'dark' ? '' : 'dark'
  }

  return (
    <main>
      <div className="sections">
        <Landing />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div id="cursor" ref={cursorRef}></div>
      <div id="theme" onClick={toggleTheme}>💡</div>
    </main>
  )
}

export default App
