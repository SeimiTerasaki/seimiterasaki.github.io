import React, {useEffect} from "react"
import Img from "gatsby-image"
import {FaFacebook, FaLinkedinIn, FaGithub, FaCodepen, FaEnvelope, FaPhoneAlt, FaFileAlt} from 'react-icons/fa'
import {Linear, TimelineMax} from "gsap/all"
import TransitionLink from "gatsby-plugin-transition-link"

import {useIndexImages} from "../hooks/useIndexImages"
import SEO from "../components/seo"
import PDF from '../../static/seimiterasakicv.pdf'

function exitPageHome(exit, node){
  const tl = new TimelineMax();
  tl.to(".about-main, about-img", .8, {y: '20px', opacity: 0, autoAlpha: 0, ease: Linear.easeIn})
    .to(".marquee-animation", .8, {opacity: 0, autoAlpha: 0, ease: Linear.easeIn}, .5)
    .to(".bottom-container", .8, {y: '20px', opacity: 0, autoAlpha: 0, ease: Linear.easeIn}, .5)
    .to(".first-letter", .8, {y: '20px', opacity: 0, autoAlpha: 0}, 1)
    .to(".second-letter", .8, {y: '20px', opacity: 0, autoAlpha: 0}, 1.5)
    .to(".about-bg", .8, {opacity: 0, autoAlpha: 0, ease: Linear.easeIn}, 2)
}

function exitPage(exit, node){
  const tl = new TimelineMax();
  tl.to(".about-main, about-img", .8, {y: '20px', opacity: 0, autoAlpha: 0, ease: Linear.easeIn})
    .to(".marquee-animation", .8, {opacity: 0, autoAlpha: 0, ease: Linear.easeIn}, .5)
    .to(".bottom-container", .8, {y: '20px', opacity: 0, autoAlpha: 0, ease: Linear.easeIn}, .5)
}

const About = () => {
  const {edges} = useIndexImages()

    useEffect(() => {
        const tl = new TimelineMax();
             
        tl.fromTo(".about-main, .about-img", {y: '20px', opacity: 0, autoAlpha: 0}, {y: '0px', opacity: 1, autoAlpha: 1, ease: Linear.easeIn, duration: .8,}, .8)
        .fromTo(".marquee-animation", {opacity: 0, autoAlpha: 0}, { opacity: 1, autoAlpha: 1, ease: Linear.easeIn, duration: .8,}, 1)
        .fromTo(".bottom-container", {y: '20px', opacity: 0, autoAlpha: 0}, {y: '0px', opacity: 1, autoAlpha: 1, ease: Linear.easeIn, duration: .8,}, 1.5)
        .fromTo(".first-letter", {y: '-20px', opacity: 0, autoAlpha: 0}, {y: '0px', opacity: 1, autoAlpha: 1, ease: Linear.easeIn, duration: .5,}, 2)
        .fromTo(".second-letter", {y: '-20px', opacity: 0, autoAlpha: 0}, {y: '0px', opacity: 1, autoAlpha: 1, ease: Linear.easeIn, duration: .5,}, 2.5)
      }, [])

    return(
        <section className="h-screen w-full text-white bg-e3a39c">
            <SEO title="About" />
            <header className="w-full absolute top-0 left-0 z-10">
              <div className="header bg-transparent">
                <div className="w-full px-12 py-8">
                  <div className="text-3xl font-heading text-center log-container">
                    <TransitionLink to="/" exit={{ trigger: ({ exit, node }) => exitPageHome(exit, node), length: 2}}
                          entry={{ delay: 2}} className="text-white no-underline">
                      <span className="first-letter">S</span>
                      <span className="second-letter">T</span>
                    </TransitionLink>
                  </div>
                </div>
              </div>
            </header>
            <div className="pt-24 bg-e3a39c">
                <div className="marquee-wrapper font-heading">
                    <div className="marquee-animation">
                        <span>An APPLE per day keeps the code clean...</span>
                        <span>An APPLE per day keeps the code clean...</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:px-8 md-px-16 lg:px-20 grid-container">
                  <div className="margin-auto items-center">
                    <Img className="about-img" fluid={edges[0].node.childImageSharp.fluid} alt={edges[0].node.name} /> 
                  </div>
                  <div className="about-main font-serif z-20 text-center">
                    <p> Hi there! Thanks for checking out my page. </p>
                    <br/>
                    <p>
                      I'm a Fullstack Developer from Tokyo specializing in progressive web apps using Javascript and its frameworks ReactJS and NodeJS. 
                    </p>
                    <br/>
                    <p>I enjoy turning complex problems into simple, beautiful and intuitive algorythms.</p>
                    <br/>
                    <TransitionLink to="/projects" exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                      entry={{ delay: 2}}>
                        <div className="text-3xl example font-heading my-projects">
                          <span className="hover hover-3 white">See my projects</span>
                        </div>
                    </TransitionLink>
                  </div>
                </div>
                <div className="flex justify-between fixed bottom-container font-sans sm:px-12 md:px-16 lg:px-48">
                  <div className="">
                    <ul className="flex align-center social-wrapper text-xl z-10">
                      <li className="inline-flex mx-2"><a href="https://www.facebook.com/SeimiTerasaki" aria-label="link"><FaFacebook /></a></li>
                      <li className="inline-flex mx-2"><a href="https://www.linkedin.com/in/seimi-terasaki-6b052a149/" aria-label="link"><FaLinkedinIn /></a></li>
                      <li className="inline-flex mx-2"><a href="https://github.com/SeimiTerasaki" aria-label="link"><FaGithub /></a></li>
                      <li className="inline-flex mx-2"><a href="https://codepen.io/Seimi" aria-label="link"><FaCodepen /></a></li>
                    </ul>
                  </div>
                  <div className="inline-flex items-center xs-hidden">
                    <FaEnvelope className="mx-2" />
                    <div className="example">
                        <span className="hover hover-3 white">seimiterasaki@gmail.com</span>
                      </div>
                  </div>
                  <div className="inline-flex items-center">
                    <FaFileAlt className="mx-2" />
                    <div className="example">
                        <span className="hover hover-3 white">
                          <a rel="noopener noreferrer" href={PDF} target="_blank">Resume</a></span>
                      </div>
                  </div>
                  <div className="inline-flex items-center sm-hidden">
                    <FaPhoneAlt className="mx-2" />
                    <div className="example">
                        <span className="hover hover-3 white">+43 6765988226</span>
                      </div>
                  </div>
                  
                </div>
                <footer className="fixed bottom-0 p-4 text-xs copywrite">©Seimi Terasaki 2021</footer>
            </div>
        </section>
    )
}


export default About