import React, {useEffect} from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import BackgroundImage from 'gatsby-background-image'
import {Linear, TimelineMax, gsap} from "gsap/all"

import {useIndexImages} from "../hooks/useIndexImages"
import SEO from "../components/seo"

import '../css/tailwind.css'
import '../css/main.css'

function exitPageRight(exit, node){
  const tl = new TimelineMax();
  tl.to(".index-image-right", .5, {opacity: 0})
  .to(".logo", .8, {y: "-20px", opacity: 0})
  .to(".right", .8, {width: '100vw', zIndex: 100, ease: Linear.easeIn})
  .to(".nav-transform", .8, {opacity: 0, ease: Linear.easeIn}, .8);
}

function exitPageLeft(exit, node){
  const tl = new TimelineMax();
  tl.to(".index-image-left", .5, {opacity: 0})
  .to(".logo", .8, {y: "-20px", opacity: 0}, .5)
  .to(".left", .8, {width: '100vw', zIndex: 100, ease: Linear.easeIn}, .8)
  .to(".nav-transform", .8, {opacity: 0, ease: Linear.easeIn}, .8);
}
function enterAnim(){
   const tl = new TimelineMax();

    tl.set(".logo", {display: "block", width: "200.4%", opacity: 0})
      .fromTo(".right", {height: "10px", opacity: 0}, {duration: 2, height: '100vh', autoAlpha: 1, ease: Linear.easeIn})
      .fromTo(".logo", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 2)
      .fromTo(".nav-transform", {opacity: 0, autoAlpha: 0}, {duration: 1, opacity: 1, autoAlpha: 1, ease: Linear.easeIn}, 2.5);
}

export default function IndexPage() {
  const {edges} = useIndexImages()
 

  useEffect(() => {
    enterAnim();

    var navRight = document.getElementById('navRight');
    var navLeft = document.getElementById('navLeft');
  
    navRight.addEventListener('mouseenter', function() {
      gsap.to('.index-image-right', .8, { autoAlpha: 1 })
    })
    
    navRight.addEventListener('mouseleave', function() {
      gsap.to('.index-image-right', .8,{ autoAlpha: 0 })
    })
   
    navLeft.addEventListener('mouseenter', function() {
      gsap.to('.index-image-left', .8,{ autoAlpha: 1 })
    })
    
    navLeft.addEventListener('mouseleave', function() {
      gsap.to('.index-image-left', .8,{ autoAlpha: 0 })
    })

  }, [])

  return(
    <section className="h-screen" data-scrollbar>
    <SEO title="Front-end Developer from Tokyo" />
      <div className="section-1 h-screen">
        <div className="navbar-side">
        <TransitionLink to="/about" exit={{ trigger: ({ exit, node }) => exitPageRight(exit, node), length: 2}}
            entry={{ delay: 2}}>
            <div className="absolute nav-transform nav-right font-heading example">
              <p><span className="hover hover-3 white" id="navRight">About</span></p></div>
        </TransitionLink>
        <TransitionLink to="/projects" exit={{ trigger: ({ exit, node }) => exitPageLeft(exit, node), length: 2}}
          entry={{ delay: 2}}>
              <div className="absolute nav-transform nav-left font-heading example">
                <p><span className="hover hover-3 e3a39c" id="navLeft">Works</span></p></div>
        </TransitionLink>
        </div>
      
      <div className="wrap h-screen">
        <div className="left">
          <BackgroundImage className="index-image-left" id="imgLeft" fluid={edges[2].node.childImageSharp.fluid} alt={edges[2].node.name} />
            <div className="logo z-20">
              <p className="font-heading text-7xl main-title z-30">Seimi Terasaki</p>
              <br/>
                <p className="text-2xl z-30">Front-end Developer for EBCONT</p>
            </div>
         
        </div>
        <div className="right">
        <BackgroundImage className="index-image-right" id="imgRight" fluid={edges[0].node.childImageSharp.fluid} alt={edges[0].node.name} />
          <div className="logo z-20">
            <h1 className="font-heading text-7xl main-title z-30">Seimi Terasaki</h1>
            <br/>
              <p className="text-2xl z-30 example">Front-end Developer for
                  <span className="hover hover-3 white">
                    <a rel="noopener noreferrer"  href="https://www.ebcont.com/" target="_blank"> EBCONT</a>
                </span>
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

