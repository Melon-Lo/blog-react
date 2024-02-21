import './common/components.scss'

import { useContext, useState, useEffect } from 'react'
import { RWDContext } from '../contexts/RWD'

import logo from '../assets/icon/logo.png'
import hamburger from '../assets/icon/hamburger.png'
import cross from '../assets/icon/cross.png'

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false)
  const [linksState, setLinksState] = useState('')
  const { width, windowSize } = useContext(RWDContext)

  function detectLinksState() {
    let className

    if (!isToggled && windowSize === 'S') {
      className = 'down'
    } else if (isToggled && windowSize === 'S') {
      className = 'down show'
    } else {
      className = 'right'
    }

    return className
  }

  useEffect(() => {
    setLinksState(detectLinksState())
  }, [isToggled, windowSize])

  function Hamburger() {
    return (
      <div 
        className="hamburger-box"
        onClick={() => setIsToggled(!isToggled)}
      >
        <img src={hamburger} alt="" />
      </div>
    )
  }

  function Links() {
    return (
      <div className={"links " + linksState}>
        <a href="" className="link">首頁</a>
        <a href="" className="link">關於我們</a>
        <a href="" className="link">作品一覽</a>
        <a href="" className="link">聯絡資訊</a>
      </div>
    )
  }

  return (
    <section id="navbar">
      <div className="logo-box">
        <img src={logo} alt="" />
      </div>
      { windowSize === 'S' && <Hamburger /> }
      <Links />
    </section>
  )
}