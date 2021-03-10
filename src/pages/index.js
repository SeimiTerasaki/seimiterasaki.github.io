import React, {useEffect} from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {Linear, TimelineMax, gsap} from "gsap/all"
import Scrollbar from 'smooth-scrollbar'
import {ScrollTrigger} from "gsap/ScrollTrigger"


import SEO from "../components/seo"

import '../css/tailwind.css'
import '../css/main.css'

function exitPageRight(exit, node){
  const tl = new TimelineMax();
  tl.to(".logo", .8, {y: "-20px", opacity: 0})
  .to(".right", .8, {width: '100vw', zIndex: 100, ease: Linear.easeIn})
  .to(".nav-transform", .8, {opacity: 0, ease: Linear.easeIn}, .8);
}

function exitPageLeft(exit, node){
  const tl = new TimelineMax();
  tl.to(".logo", .8, {y: "-20px", opacity: 0})
  .to(".left", .8, {width: '100vw', zIndex: 100, ease: Linear.easeIn}, .8)
  .to(".nav-transform", .8, {opacity: 0, ease: Linear.easeIn}, .8);
}
function enterAnim(){
   const tl = new TimelineMax();

    tl.set(".logo", {display: "block", width: "200.4%", opacity: 0})
      .set(".center", {xPercent: -50, yPercent: -50, force3D:true })
      .fromTo(".right", {height: "10px", opacity: 0}, {duration: 2, height: '100vh', autoAlpha: 1, ease: Linear.easeIn})
      .fromTo(".logo", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 2)
      .fromTo(".nav-transform", {opacity: 0, autoAlpha: 0}, {duration: 1, opacity: 1, autoAlpha: 1, ease: Linear.easeIn}, 2.5);
}

export default function IndexPage() {

  useEffect(() => {
    enterAnim();

    const scroller = document.querySelector("[data-scrollbar]");
    const bodyScrollBar = Scrollbar.init(scroller);
  
    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
          document.getElementsByTagName("body").setAttribute("class", "scrolling");
        }
        return bodyScrollBar.scrollTop;
      },
    });
  }, [])

  return(
    <section className="h-screen" data-scrollbar>
    <SEO title="Full Stack Developer from Tokyo" />
      <div className="section-1 h-screen">
        <div className="navbar-side">
        <TransitionLink to="/about" exit={{ trigger: ({ exit, node }) => exitPageRight(exit, node), length: 2}}
            entry={{ delay: 2}}>
            <div className="absolute nav-transform nav-right font-heading"><p>About</p></div>
        </TransitionLink>
        <TransitionLink to="/projects" exit={{ trigger: ({ exit, node }) => exitPageLeft(exit, node), length: 2}}
          entry={{ delay: 2}}>
              <div className="absolute nav-transform nav-left font-heading"><p><span>Works</span></p></div>
        </TransitionLink>
        </div>
      
      <div className="wrap h-screen">
        <div className="left">
          <div className="logo">
            <p className="font-heading text-7xl main-title">Seimi Terasaki</p>
            <br/>
              <p className="text-2xl">Full-stack Web Developer</p>
          </div>
        </div>
        <div className="right">
          <div className="logo">
            <h1 className="font-heading text-7xl main-title">Seimi Terasaki</h1>
            <br/>
              <p className="text-2xl">Full-stack Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

