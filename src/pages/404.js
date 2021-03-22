import React from "react"
import {Linear, TimelineMax} from "gsap/all"
import TransitionLink from "gatsby-plugin-transition-link"


function exitPageHome(exit, node){
  const tl = new TimelineMax();
  tl.to("max-w-4xl", .2, {y: '20px', opacity: 0, autoAlpha: 0, ease: Linear.easeIn})
}

export default () => {
  return (
      <div className="max-w-4xl flex-grow mx-auto flex flex-col mt-40 item-center">
        <p className="text-2xl">Page Not Found</p>
        <br />          
        <TransitionLink to="/" exit={{ trigger: ({ exit, node }) => exitPageHome(exit, node), length: 1}}
            entry={{ delay: 2}}><p>Return to Home</p></TransitionLink>
      </div>
  )
}
