import { useState, useEffect, createContext } from "react";

export const RWDContext= createContext()

export default function RWDContextProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [windowSize, setWindowSize] = useState(detectWindowSize)

  function detectWindowSize() {
    const currentWidth = window.innerWidth
    if (width > 1200) {
      return 'XXL'
    } else if (width > 996) {
      return 'XL'
    } else if (width > 768) {
      return 'L'
    } else if (width > 576) {
      return 'M'
    } else {
      return 'S'
    }
  }

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (width > 1200) {
      setWindowSize('XXL')
    } else if (width > 996) {
      setWindowSize('XL')
    } else if (width > 768) {
      setWindowSize('L')
    } else if (width > 576) {
      setWindowSize('M')
    } else {
      setWindowSize('S')
    }
  }, [width])

  return (
    <RWDContext.Provider
      value={{
        window,
        windowSize
      }}
    >
      {children}
    </RWDContext.Provider>
  )
}