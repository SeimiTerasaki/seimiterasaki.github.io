(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7Roh":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),c=t("9eSz"),m=t.n(c),o=t("1eu9"),s=t.n(o),i=t("Tgqd"),d=t("V0Rq"),f=t("Haw6"),p=t("pc+1"),u=t("RHZy"),g=t("plVc"),x=t.n(g);function h(e,a){(new p.v).to(".fadeOut",.8,{opacity:0,ease:p.h.easeIn},1)}function v(){var e=Object(n.useStaticQuery)("3183623712"),a=Object(r.useRef)(null),t=Object(r.useRef)(null),c=Object(r.useRef)([]);c.current=[];var o=function(e){e&&!c.current.includes(e)&&c.current.push(e)};return Object(r.useEffect)((function(){var e;(e=new p.v).fromTo(".project-header-title",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:p.h.ease},1),e.fromTo(".project-header-description",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:p.h.ease},1.5),e.fromTo(".project-page-link",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:p.h.ease},2),e.fromTo(".FiX",{y:"-20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:p.h.ease},2.5);var r=document.querySelector("[data-scrollbar]"),l=d.a.init(r),n=u.a.to("nav",{y:"-=60",duration:.5,ease:p.k.easeIn,paused:!0});u.a.registerPlugin(f.a),f.a.scrollerProxy("body",{scrollTop:function(e){return arguments.length&&(l.scrollTop=e,document.getElementsByTagName("body").setAttribute("class","scrolling")),l.scrollTop}}),l.addListener(f.a.update),f.a.create({trigger:"nav",start:"10px top",end:99999,onUpdate:function(e){e.progress;var a=e.direction,t=e.isActive;-1===a&&n.reverse(),(1===a||1===a&&!0===t)&&n.play()}}),u.a.to(a.current,{yPercent:50,ease:"none",scrollTrigger:{trigger:".jumbotron",scrub:!0}}),c.current.forEach((function(e){!function(e){u.a.set(e,{autoAlpha:0})}(e),u.a.fromTo(e,{y:"120px",autoAlpha:0},{duration:1.25,autoAlpha:1,y:"0px",ease:"expo",overwrite:"auto",scrollTrigger:{trigger:e,scrub:!0}})})),u.a.to(t.current.selfRef,{ease:"none",width:"100%",scrollTrigger:{trigger:".next-project-cover",end:"bottom bottom",scrub:!0}},"+=1")}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fixed-nav w-full"},l.a.createElement("nav",{className:"pt-8 flex justify-center"},l.a.createElement(x.a,{to:"/projects",exit:{trigger:function(e){e.exit,e.node;return h()},length:2},entry:{delay:2}},l.a.createElement(i.a,{className:"FiX text-3xl text-white z-50"})))),l.a.createElement("section",{id:"___section",className:"h-screen section fadeOut","data-scrollbar":!0},l.a.createElement("div",{className:"project-header h-screen"},l.a.createElement("div",{className:"project-page-bg",ref:a},l.a.createElement(m.a,{className:"h-screen w-full overflow-hidden relative",fluid:e.markdownRemark.frontmatter.image.childImageSharp.fluid,alt:e.markdownRemark.frontmatter.image.name})),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"center-flex text-white"},l.a.createElement("div",{className:"project-header-title"},l.a.createElement("p",{className:"text-8xl font-heading text-center"},e.markdownRemark.frontmatter.title)),l.a.createElement("div",{className:"project-header-description self-end mx-12 max-w-xs"},l.a.createElement("p",{className:"text-2xl font-heading"},e.markdownRemark.frontmatter.description),l.a.createElement("br",null),l.a.createElement("a",{href:e.markdownRemark.frontmatter.link,className:"project-page-link text-xl font-serif font-semibold example text-white"},l.a.createElement("span",{className:"hover hover-3 white"},"View the Website")))))),l.a.createElement("div",{className:"bg-efefef jumbotron sm:px-12 md:px-18 lg:px-24"},l.a.createElement("div",{className:"center-text py-20"},l.a.createElement("ul",{className:"text-center margin-auto max-w-sm font-serif text-222 gs_reveal",ref:o},l.a.createElement("p",{className:"mb-4 text-2xl"},"Features:"),e.markdownRemark.frontmatter.features.map((function(e){return l.a.createElement("li",{className:"mb-2 text-lg",key:e},e)}))))),l.a.createElement("div",{className:"bg-white font-body"},l.a.createElement("div",{className:"sm:px-8 md-px-16 lg:px-20 grid-container pb-24"},l.a.createElement("div",{className:"section-0 grid grid-cols-2 gap-x-24 pb-20"},l.a.createElement("div",{className:"col-1"},l.a.createElement("div",{className:"gs_reveal mt-10 mb-12",ref:o},l.a.createElement(m.a,{fluid:e.markdownRemark.frontmatter.gallery[2].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[2].id})),l.a.createElement("div",{className:"gs_reveal mb-12",ref:o},l.a.createElement(m.a,{fluid:e.markdownRemark.frontmatter.gallery[3].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[3].id})),l.a.createElement("div",{className:"gs_reveal",ref:o},l.a.createElement(m.a,{fluid:e.markdownRemark.frontmatter.gallery[4].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[4].id}))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"gs_reveal mt-100 mb-12",ref:o},l.a.createElement(m.a,{fluid:e.markdownRemark.frontmatter.gallery[0].childImageSharp.fluid,className:"mobile-image img-shadow",alt:e.markdownRemark.frontmatter.gallery[0].id})),l.a.createElement("div",{className:"gs_reveal",ref:o},l.a.createElement(m.a,{fluid:e.markdownRemark.frontmatter.gallery[1].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[1].id}))))),l.a.createElement("div",{className:"pt-20 animate-trigger"},l.a.createElement(s.a,{tag:"div",ref:t,className:"scaleUp next-project-cover gs-reveal",fluid:e.markdownRemark.frontmatter.nextProjectImage.childImageSharp.fluid},l.a.createElement("div",{className:"center-flex text-white"},l.a.createElement("p",{className:"text-center pb-20 font-serif text-2xl"},"Next Project:"),l.a.createElement(x.a,{to:e.markdownRemark.frontmatter.nextProjectSlug,exit:{trigger:function(e){e.exit,e.node;return h()},length:2},entry:{delay:2}},l.a.createElement("p",{className:"text-8xl font-heading text-center text-white"},e.markdownRemark.frontmatter.nextProject))))))))}}}]);
//# sourceMappingURL=component---src-pages-dea-boutique-js-02fc6278f787d2069a40.js.map