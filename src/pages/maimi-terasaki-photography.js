import React, {useEffect, useRef} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import {FiX} from 'react-icons/fi'
import Scrollbar from 'smooth-scrollbar'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Linear, TimelineMax, Power2, gsap} from "gsap/all"
import TransitionLink from "gatsby-plugin-transition-link"

function exitPage(exit, node){
  const tl = new TimelineMax();
  tl.to(".fadeOut", .8, {opacity: 0, ease: Linear.easeIn}, 1);
}

const enterAnimation = () => {
  const tl = new TimelineMax();
  tl.fromTo(".project-header-title", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 1)
  tl.fromTo(".project-header-description", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 1.5)
  tl.fromTo(".project-page-link", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 2);
  tl.fromTo(".FiX", {y: "-20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 2.5);
}

export default function MTPhotography() {

  const data = useStaticQuery(graphql`
  query MTQuery{
  markdownRemark(frontmatter: {title: {eq: "Maimi Terasaki Photography"}}) {
    id
    frontmatter {
      slug
      title
      description
      link
      nextProject
      nextProjectSlug
      content
      image {
        name
        childImageSharp {
          fluid(maxWidth: 1920){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallery {
        name
        childImageSharp {
          fluid(maxWidth: 400){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nextProjectImage {
        name
        childImageSharp {
          fluid(maxWidth: 1920){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`)


const projectPageBg = useRef(null)
const nextProjectCover = useRef(null)

  const gsReveal = useRef([]);
  gsReveal.current = [];

  const addToRefs = el => {
    if (el && !gsReveal.current.includes(el)) {
      gsReveal.current.push(el);
    }
  }

  useEffect(() => {
    enterAnimation();
  },[])

  useEffect(() => {
    const scroller = document.querySelector("[data-scrollbar]");
    const bodyScrollBar = Scrollbar.init(scroller);
    gsap.registerPlugin(ScrollTrigger);
    const actionNav = gsap.to('nav', {y:'-=60', duration: .5, ease: Power2.easeIn, paused:true});
    
    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) { 
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    ScrollTrigger.create({
      trigger: "nav",
      start: "10px top",
      end: 99999,
      onUpdate: ({progress, direction, isActive}) => {
        if (direction === -1) {
          actionNav.reverse()
        } if (direction === 1 ) {
          actionNav.play()
        } else if (direction === 1 && isActive === true) {
          actionNav.play()
        }
      }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
  })

  return <>
  <div className="fixed-nav w-full">
    <nav className="pt-8 flex justify-center">
      <TransitionLink to="/projects" exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
          entry={{ delay: 2}}>
        <FiX className="FiX text-3xl text-white z-50" />
      </TransitionLink>
    </nav>
  </div>
  <section id="___section" className="h-screen section fadeOut" data-scrollbar>

  <div className="project-header h-screen">
      <div className="project-page-bg" ref={projectPageBg}>
      <Img
        className="h-screen w-full overflow-hidden relative"
        fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
        alt={data.markdownRemark.frontmatter.image.name}/>
      </div>
      <div className="overlay">
        
        <div className="center-flex text-white">
          <div className="project-header-title">
            <p  className="text-8xl font-heading text-center">{data.markdownRemark.frontmatter.title}</p>
          </div>
          <div className="project-header-description self-end mx-12 max-w-xs">
            <p  className="text-2xl font-heading">{data.markdownRemark.frontmatter.description}</p>
            <br/>
            <a href={data.markdownRemark.frontmatter.link}
            className="project-page-link text-xl font-serif font-semibold example text-white">
              <span className="hover hover-3 white">View the Website</span></a>
          </div>
        </div>
      </div>
    </div> 
    
  
    <div className="bg-offwhite jumbotron sm:px-12 md:px-18 lg:px-24">
      <div className="center-text py-20">
        <p className="text-center margin-auto max-w-sm font-serif text-lg text-222 gs_reveal" ref={addToRefs}>
          {data.markdownRemark.frontmatter.content}
        </p>
      </div>
     </div>
     
     <div className="bg-white font-body">
       <div className="sm:px-8 md-px-16 lg:px-20 grid-container pb-24">

        <div className="section-0 grid grid-cols-2 gap-x-24 pb-20">

          <div className="col-1">
            <div className="gs_reveal mt-10 mb-12" ref={addToRefs}>
            <Img
                fluid={data.markdownRemark.frontmatter.gallery[7].childImageSharp.fluid}
                className="img-shadow"
                alt={data.markdownRemark.frontmatter.gallery[7].name} />
            </div>
            <div className="gs_reveal" ref={addToRefs}>
            <Img
                fluid={data.markdownRemark.frontmatter.gallery[3].childImageSharp.fluid}
                className="max-w-sm mt-8 img-shadow"
                alt={data.markdownRemark.frontmatter.gallery[3].name} />
            </div>
        </div>
        <div className="col-2">
          <div className="gs_reveal mb-12 mt-100" ref={addToRefs}>
            <Img
              fluid={data.markdownRemark.frontmatter.gallery[0].childImageSharp.fluid}
              className="mobile-image img-shadow"
              alt={data.markdownRemark.frontmatter.gallery[0].name} />
            </div>
            <div className="gs_reveal mb-12" ref={addToRefs}>
              <Img
                fluid={data.markdownRemark.frontmatter.gallery[2].childImageSharp.fluid}
                className="img-shadow"
                alt={data.markdownRemark.frontmatter.gallery[2].name} />
            </div>
            <div className="gs_reveal mb-12" ref={addToRefs}>
              <Img
                fluid={data.markdownRemark.frontmatter.gallery[1].childImageSharp.fluid}
                className="img-shadow"
                alt={data.markdownRemark.frontmatter.gallery[1].name} />
            </div>
          </div>

        </div>
        <div className="gs_reveal mb-12" ref={addToRefs}>
          <Img
            fluid={data.markdownRemark.frontmatter.gallery[4].childImageSharp.fluid}
            className="mt-8 img-shadow"
            alt={data.markdownRemark.frontmatter.gallery[4].name} />
        </div>
        <div className="gs_reveal mb-12" ref={addToRefs}>
          <Img
            fluid={data.markdownRemark.frontmatter.gallery[5].childImageSharp.fluid}
            className="mt-8 img-shadow"
            alt={data.markdownRemark.frontmatter.gallery[5].name} />
        </div>
        <div className="gs_reveal mb-12" ref={addToRefs}> 
          <Img
            fluid={data.markdownRemark.frontmatter.gallery[6].childImageSharp.fluid}
            className="mt-8 img-shadow"
            alt={data.markdownRemark.frontmatter.gallery[6].name} />
        </div>
  
        </div>
        <div className="pt-20 animate-trigger">
          <BackgroundImage tag="div" ref={nextProjectCover} className="scaleUp next-project-cover gs-reveal "  fluid={data.markdownRemark.frontmatter.nextProjectImage.childImageSharp.fluid}>

            <div className="center-flex text-white">
              <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                <TransitionLink to={data.markdownRemark.frontmatter.nextProjectSlug} exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                  entry={{ delay: 2}}><p className="text-8xl font-heading text-center text-white">{data.markdownRemark.frontmatter.nextProject}</p></TransitionLink>
              </div>

          </BackgroundImage>
      </div>

    </div>
  </section>
  </>;
}