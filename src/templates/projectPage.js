import React, {useEffect} from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import {FiX} from 'react-icons/fi'
import Scrollbar from 'smooth-scrollbar'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Linear, TimelineMax, gsap, Power2} from "gsap/all"
import TransitionLink from "gatsby-plugin-transition-link"

import SEO from "../components/seo"
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

const ProjectPage = (props) => {

    const project = props.data.markdownRemark.frontmatter
    console.log(project)
    var firstColumn;
    var secondColumn;
    var fullRow;

    if(project.title === "Maimi Terasaki Photography"){
        firstColumn = project.gallery.slice(0, 2);
        secondColumn = project.gallery.slice(3, 5);
        fullRow = project.gallery.slice(5);
    } else {
        firstColumn = project.gallery.slice(2);
        secondColumn = project.gallery.slice(0, 2);
    }

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
    return (
    <>
        <div className="fixed-nav w-full">
        <SEO title={project.title} />
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
                fluid={project.image.childImageSharp.fluid}
                alt={project.image.name}/>
                <div className="w-full">
                <div className="center-flex text-white">
                    <div className="project-header-title">
                    <p  className="text-8xl font-heading text-center">{project.title}</p>
                    </div>
                    <div className="project-header-description self-end mx-12 max-w-xs">
                    <p  className="text-2xl font-heading">{project.description}</p>
                    <br/>
                    <a href={project.link}
                    className="project-page-link text-xl font-serif font-semibold example text-white">
                        <span className="hover hover-3 white">View the Website</span></a>
                    </div>
                </div>
                </div>
            </div> 

           {(() => {
            if(project.title==="Maimi Terasaki Photography"){
                return(
                    <>
                    <div className="bg-offwhite jumbotron sm:px-12 md:px-18 lg:px-24">
                        <div className="center-text py-20">
                        <VisibilityFade>
                        <p className="text-center margin-auto max-w-sm font-serif text-lg text-222">
                            {project.content}
                        </p>
                        </VisibilityFade>
                        </div>
                   </div>
                   
                   <div className="bg-white font-body">
                     <div className="sm:px-8 md-px-16 lg:px-20 grid-container pb-24">
              
                      <div className="section-0 grid grid-cols-2 gap-x-24 pb-20">
              
                        <div className="col-1">
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
                        <div className="mb-12 mt-100">
                          <Img
                            fluid={project.gallery[2].childImageSharp.fluid}
                            className="mobile-image img-shadow"
                            alt={project.gallery[2].name} />
                          </div>
                        </VisibilityFade>
                        {
                          secondColumn.map(img => (
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
              
                      </div>
                      {
                          fullRow.map(img => (
                            <VisibilityFade key={img.id}>
                            <div className="mb-12">
                              <Img
                                fluid={img.childImageSharp.fluid}
                                className="img-shadow mt-8"
                                alt={img.name}
                                  />
                            </div>
                              </VisibilityFade>
                          ))
                        }
                
                      </div>
                      <div className="pt-20 animate-trigger">
                      <VisibilityWidth>
                        <BackgroundImage tag="div" className="next-project-cover"
                        fluid={project.nextProjectImage.childImageSharp.fluid}>
                          <div className="center-flex text-white">
                          <VisibilityFade>
                            <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                              <TransitionLink  to={`/projects/${project.nextProjectSlug}`} exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                                entry={{ delay: 2}}><p className="text-8xl font-heading text-center text-white">{project.nextProject}</p></TransitionLink>
                             </VisibilityFade>
                             </div>
                        </BackgroundImage>
                      </VisibilityWidth>
                      </div>
              
                    </div>
                </>
                )
        } else if(project.title==="DEA Boutique"){
            return(
                <>
                <div className="bg-efefef jumbotron sm:px-12 md:px-18 lg:px-24">
                <div className="center-text py-20">
                <VisibilityFade>
                  <ul className="text-center margin-auto max-w-sm font-serif text-222">
                    <p className="mb-4 text-2xl">Features:</p>
                    {
                      project.features.map(item => (
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
                    fluid={project.nextProjectImage.childImageSharp.fluid}>
                      <div className="center-flex text-white">
                      <VisibilityFade>
                        <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                          <TransitionLink  to={`/projects/${project.nextProjectSlug}`} exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                            entry={{ delay: 2}}><p className="text-8xl font-heading text-center text-white">{project.nextProject}</p></TransitionLink>
                         </VisibilityFade>
                         </div>
                    </BackgroundImage>
                  </VisibilityWidth>
                </div>
          
              </div>
              </>
            )
        } else if(project.title==="Finesse Organisation"){
            return(
                <>
                <div className="bg-offwhite jumbotron sm:px-12 md:px-18 lg:px-24">
                    <div className="center-text py-20">
                        <VisibilityFade>
                            <p className="text-center margin-auto max-w-sm font-serif text-lg text-222">
                            {project.content}
                            </p>
                        </VisibilityFade>
                    </div>
                </div>
     
                <div className="bg-white font-body">
                    <div className="sm:px-8 md-px-16 lg:px-20 grid-container pb-24">
                        <div className="section-0 grid grid-cols-1 mt-20">
                        <VisibilityFade>
                        <Img loading="eager"
                            fluid={project.gallery[0].childImageSharp.fluid}
                            alt={project.gallery[0].name} />
                        </VisibilityFade>
                        </div>
                    </div>
                    <div className="pt-20 animate-trigger">
                    <VisibilityWidth>
                        <BackgroundImage tag="div" className="next-project-cover"
                        fluid={project.nextProjectImage.childImageSharp.fluid}>
                            <div className="center-flex text-white">
                            <VisibilityFade>
                            <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                                <TransitionLink to={`/projects/${project.nextProjectSlug}`}  exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                                entry={{ delay: 2}}><p className="text-8xl font-heading text-center text-white">{project.nextProject}</p></TransitionLink>
                            </VisibilityFade>
                            </div>
                        </BackgroundImage>
                    </VisibilityWidth>
                    </div>
                </div>
                </>
            )
        } else {
            return(
                <div className="header-gradient text-white text-center font-serif jumbotron">
                    <div className="sm:px-12 md:px-18 lg:px-24">
                        <div className="py-20">
                            <VisibilityFade>
                            <p className="text-lg max-w-sm margin-auto">{project.content}</p>
                            </VisibilityFade>
                        </div>

                        <div className="mobile-dd py-20">
                            <VisibilityFade>
                            <Img
                                fluid={project.gallery[0].childImageSharp.fluid}
                                alt={project.gallery[0].name}/>
                            </VisibilityFade>    
                        </div>
        
                        <div className="bg-image-bold-text margin-auto">Game Play</div>
                        <VisibilityFade>
                            <p className="text-lg max-w-sm margin-auto text-center pt-16">{project.role}</p>
                        </VisibilityFade>
                    </div>
    
                    <div className="pt-20 animate-trigger">
                        <VisibilityWidth>
                        <BackgroundImage tag="div" className="next-project-cover"
                        fluid={project.nextProjectImage.childImageSharp.fluid}>
                            <div className="center-flex text-white">
                            <VisibilityFade>
                            <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                                <TransitionLink to={`/projects/${project.nextProjectSlug}`} exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                                entry={{ delay: 2}}><p className="text-8xl font-heading text-center text-white">{project.nextProject}</p></TransitionLink>
                            </VisibilityFade>
                            </div>
                        </BackgroundImage>
                        </VisibilityWidth>
                    </div>
                </div>
            )
        }
        })()}
        </section>
    </>
 )
}

export default ProjectPage

export const query = graphql`
query ProjectQuery( $slug: String! ) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        title
        description
        link
        nextProject
        nextProjectSlug
        features
        content
        role
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
  }`