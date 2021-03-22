import React, { useEffect, useRef, useCallback } from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import Img from "gatsby-image"
import Slider from "react-slick"
import {Linear, TimelineMax} from "gsap/all"

import SEO from "../components/seo"
import {useSiteMarkdown} from "../hooks/useSiteMarkdown"

import "../css/slick.css"
import "../css/slick-theme.css"

function exitPage(exit, node){
	const tl = new TimelineMax();
	tl.to(".slick-active .project-title-container", .8, {y: "470px", opacity: 0, ease:Linear.easeNone})
	  .to(".slick-active", 1, {scale: 2}, .8);
  }

function enterAnim(){
	const tl = new TimelineMax();
	tl.fromTo(".slick-active", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease})
	  .fromTo(".slick-active .project-title-container", {y: "470px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 2)
	  .fromTo(".slick-cloned, .slick-slide", {y: "20px", opacity: 0}, {duration: .8, y: '0px', opacity: 1, ease: Linear.ease}, 2.5)
	  .set([".slick-active .project-title-container"], { clearProps: "all" }, 3);
}

const ProjectsPage = () => {
	const {edges} = useSiteMarkdown()
	const sliderRef = useRef()

	const scroll = useCallback( y => {
      if (y > 0) {
        return sliderRef?.current?.slickNext(); /// ? <- using description below 
      } else {
        return sliderRef?.current?.slickPrev();
      }
    },
    [sliderRef]
  )

	useEffect(() => {
		enterAnim();
		
		window.addEventListener("wheel", e => {
			scroll(e.deltaY);
		});
	}, [scroll])

	var settings = {
		infinite: true,
		centerMode: true,
		centerPadding: "20%",
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		className: "slider-inner"
	};

    return (
        <div className="w-full h-screen">
			<SEO title="Projects" />
			<Slider  {...settings} ref={sliderRef}>
			{
				edges.map(({ node }) => (
				<div key={node.id} className="project-slide">
					<TransitionLink to={`/${node.frontmatter.slug}`} className="project-transition-link color-ff9170"
				exit={{ trigger: ({ exit, node }) => exitPage(exit, node), length: 2}} entry={{ delay: 2}}>
					<>
					<div className="project-title-container">
							<p className="project-title font-heading">{node.frontmatter.title}</p>
					</div>
					<Img className="project-cover"
					fluid={node.frontmatter.image.childImageSharp.fluid}
					alt={node.frontmatter.image.name} />
					</>
					</TransitionLink>
				</div>
					))
				}
			</Slider>
    </div>
    );
}

export default ProjectsPage
