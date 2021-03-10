import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  
  return (
<header className="w-full absolute top-0 left-0 z-10">
  <div className="header bg-transparent">
    <div className="w-full px-12 py-8">
      <div className="text-3xl font-heading text-center log-container">
        <AniLink cover direction="up" duration={1} bg="#fff" className="text-222 no-underline" to="/" >
          <span className="first-letter">S</span>
          <span className="second-letter">T</span>
        </AniLink>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header