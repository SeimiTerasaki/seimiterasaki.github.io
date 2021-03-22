import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import {FiX} from 'react-icons/fi'
import Scrollbar from 'smooth-scrollbar'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Linear, TimelineMax, gsap, Power2} from "gsap/all"
import TransitionLink from "gatsby-plugin-transition-link"

import VisibilityFade from '../components/visibleFade'
import VisibilityWidth from '../components/visibleWidth'

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

const DEA = () => {

  const data = useStaticQuery(graphql`
  query DEAQuery {
  markdownRemark(frontmatter: {title: {eq: "Dea Boutique"}}) {
    id
    frontmatter {
      slug
      title
      description
      link
      nextProject
      nextProjectSlug
      features
      content
      image {
        id
        name
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      gallery {
        id
        name
        childImageSharp {
          fluid(maxWidth: 814, quality: 90){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nextProjectImage {
        id
        name
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`)

const firstColumn = data.markdownRemark.frontmatter.gallery.slice(2)
const secondColumn = data.markdownRemark.frontmatter.gallery.slice(0, 2)

  const scrolling = () => {
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
      }
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
  };

  useEffect(() => {
    enterAnimation();
    scrolling();
  },[])

  useEffect(() => {
    scrolling();
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
      <Img
        className="h-screen w-full overflow-hidden parallax-bg"
        fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}
        alt={data.markdownRemark.frontmatter.image.name}/>
      <div className="w-full">
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

    <div className="bg-efefef jumbotron sm:px-12 md:px-18 lg:px-24">
      <div className="center-text py-20">
      <VisibilityFade>
        <ul className="text-center margin-auto max-w-sm font-serif text-222">
          <p className="mb-4 text-2xl">Features:</p>
          {
            data.markdownRemark.frontmatter.features.map(item => (
            <li className="mb-2 text-lg" key={item}>{item}</li>
          )
          )}
        </ul>
      </VisibilityFade>
      </div>

     </div>

    <div className="bg-white font-body">
      <div className="sm:px-8 md-px-16 lg:px-20 grid-container pb-24">
      
        <div className="section-0 grid grid-cols-2 gap-x-24">
          <div className="col-1 mt-10">
            
              {
                firstColumn.map(img => (
                  <VisibilityFade key={img.id}>
                  <div className="mb-12">
                    <Img
                      fluid={img.childImageSharp.fluid}
                      className="img-shadow"
                      alt={img.name}
                       />
                  </div>
                   </VisibilityFade>
                ))
              }
          </div>

          <div className="col-2">
          <VisibilityFade>
            <div className="mt-100 mb-12">
              <Img
                fluid={secondColumn[0].childImageSharp.fluid}
                className="mobile-image img-shadow"
                alt={secondColumn[0].name} />
            </div>
            </VisibilityFade>
            <VisibilityFade>
            <div className="mb-12">
              <Img
                fluid={secondColumn[1].childImageSharp.fluid}
                className="img-shadow"
                alt={secondColumn[1].name} />
            </div>
            </VisibilityFade>
          </div>
        </div>
      </div>

      <div className="pt-20 animate-trigger">
      <VisibilityWidth>
          <BackgroundImage tag="div" className="next-project-cover"
          fluid={data.markdownRemark.frontmatter.nextProjectImage.childImageSharp.fluid}>
            <div className="center-flex text-white">
            <VisibilityFade>
              <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                <TransitionLink to={data.markdownRemark.frontmatter.nextProjectSlug} exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                  entry={{ delay: 2}}><p className="text-8xl font-heading text-center text-white">{data.markdownRemark.frontmatter.nextProject}</p></TransitionLink>
               </VisibilityFade>
               </div>
          </BackgroundImage>
        </VisibilityWidth>
      </div>

    </div>
  </section>
  </>;
}

export default DEA