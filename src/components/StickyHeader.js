import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {FiX} from 'react-icons/fi'
import {Linear, TimelineMax, gsap} from "gsap/all"

function exitPage(exit, node){
    const tl = new TimelineMax();
    tl.to(".next-project-cover", .8, {opacity: 0, ease: Linear.easeIn}, 1);
  }

 const StickyHeader = () => (
    <div className="absolute top-0 pt-8 left-50 nav">
       <TransitionLink to="/projects" exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                entry={{ delay: 2}}>
            <FiX className="FiX text-3xl text-222" />
        </TransitionLink>
    </div>
)

export default StickyHeader