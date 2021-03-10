import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import {FiX} from 'react-icons/fi'
import Scrollbar from 'smooth-scrollbar'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {Linear, TimelineMax, Power2, gsap} from "gsap/all"
import TransitionLink from "gatsby-plugin-transition-link"

const exitPage = (exit, node) => {
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

function animateFrom(elem, direction) {
  direction = direction | 1;
  var delay = .5
  var x = 0,
      y = direction * 100;

  if(elem.classList.contains("gs_reveal_delay15")) {
    delay = 1.5;
  } else if(elem.classList.contains("gs_reveal_delay2")) {
    delay = 2;
  }

  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    delay: delay,
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

export default function DungeonsDemons(){
    
  const data = useStaticQuery(graphql`
  query DungeonQuery {
  markdownRemark(frontmatter: {title: {eq: "Dungeons and Demons Game"}}) {
    id
    frontmatter {
      slug
      title
      description
      link
      role
      nextProject
      nextProjectSlug
      content
      features
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
          fluid(maxWidth: 584){
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

useEffect(() => {
  enterAnimation();

  const scroller = document.querySelector("[data-scrollbar]");
  const bodyScrollBar = Scrollbar.init(scroller);
  const actionNav = gsap.to('nav', {y:'-=60', duration: .5, ease: Power2.easeIn, paused:true});

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
  
  bodyScrollBar.addListener(ScrollTrigger.update);

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

    
  gsap.to(".project-page-bg", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".jumbotron",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
    });
  });

  gsap.to(".next-project-cover", {
    ease: "none",
    width: "100vw",
    scrollTrigger: { 
      trigger: ".next-project-cover",
      end: "bottom bottom",
      scrub: true,
  }},'+=1')

}, [])
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
      <div className="project-page-bg">
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
            className="project-page-link text-xl font-heading text-white">View the Website</a>
          </div>
        </div>
      </div>
    </div> 

    <div className="header-gradient text-white text-center font-serif jumbotron">
      <div className="sm:px-12 md:px-18 lg:px-24">
        <div className="py-20 gs_reveal">
        <p className="text-2xl">{data.markdownRemark.frontmatter.description}</p>
        <br/>
        <p className="text-lg max-w-sm margin-auto">{data.markdownRemark.frontmatter.content}</p>
        </div>

        <div className="mobile-dd py-20 gs_reveal">
          <Img
            fluid={data.markdownRemark.frontmatter.gallery[0].childImageSharp.fluid}
            alt={data.markdownRemark.frontmatter.gallery[0].name}/>      
        </div>
      
      <div className="bg-image-bold-text margin-auto">Game Play</div>

      <div className="gs_reveal">
        <p className="text-lg max-w-sm margin-auto text-center pt-16">{data.markdownRemark.frontmatter.role}</p>
      </div>
    </div>

    <div className="pt-20 animate-trigger">
          <BackgroundImage tag="div" className="scaleUp next-project-cover gs-reveal "  fluid={data.markdownRemark.frontmatter.nextProjectImage.childImageSharp.fluid}>

            <div className="center-flex text-white">
              <p className="text-center pb-20 font-serif text-2xl">Next Project:</p>
                <TransitionLink to={data.markdownRemark.frontmatter.nextProjectSlug} exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}}
                  entry={{ delay: 2}}><p className="text-7xl font-heading text-center text-white">{data.markdownRemark.frontmatter.nextProject}</p></TransitionLink>
              </div>

          </BackgroundImage>
      </div>

  </div>
</section>
</>;
}