(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{eOWU:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var r=t("q1tI"),l=t.n(r),n=t("Wbzz"),m=t("9eSz"),c=t.n(m),o=t("1eu9"),s=t.n(o),i=t("Tgqd"),d=t("V0Rq"),g=t("Haw6"),f=t("pc+1"),p=t("RHZy"),u=t("plVc"),h=t.n(u);function x(e,a){(new f.v).to(".fadeOut",.8,{opacity:0,ease:f.h.easeIn},1)}function v(){var e=Object(n.useStaticQuery)("199750775");return Object(r.useEffect)((function(){var e;(e=new f.v).fromTo(".project-header-title",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.h.ease},1),e.fromTo(".project-header-description",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.h.ease},1.5),e.fromTo(".project-page-link",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.h.ease},2),e.fromTo(".FiX",{y:"-20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.h.ease},2.5);var a=document.querySelector("[data-scrollbar]"),t=d.a.init(a),r=p.a.to("nav",{y:"-=60",duration:.5,ease:f.k.easeIn,paused:!0});p.a.registerPlugin(g.a),g.a.scrollerProxy("body",{scrollTop:function(e){return arguments.length&&(t.scrollTop=e,document.getElementsByTagName("body").setAttribute("class","scrolling")),t.scrollTop}}),t.addListener(g.a.update),g.a.create({trigger:"nav",start:"10px top",end:99999,onUpdate:function(e){e.progress;var a=e.direction,t=e.isActive;-1===a&&r.reverse(),(1===a||1===a&&!0===t)&&r.play()}}),p.a.to(".project-page-bg",{yPercent:50,ease:"none",scrollTrigger:{trigger:".jumbotron",scrub:!0}}),p.a.utils.toArray(".gs_reveal").forEach((function(e){!function(e){p.a.set(e,{autoAlpha:0})}(e),g.a.create({trigger:e,onEnter:function(){!function(e,a){var t=.5,r=100*(a|=1);e.classList.contains("gs_reveal_delay15")?t=1.5:e.classList.contains("gs_reveal_delay2")&&(t=2),p.a.fromTo(e,{x:0,y:r,autoAlpha:0},{delay:t,duration:1.25,x:0,y:0,autoAlpha:1,ease:"expo",overwrite:"auto"})}(e)}})})),p.a.to(".next-project-cover",{ease:"none",width:"100vw",scrollTrigger:{trigger:".next-project-cover",end:"bottom bottom",scrub:!0}},"+=1")}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"fixed-nav w-full"},l.a.createElement("nav",{className:"pt-8 flex justify-center"},l.a.createElement(h.a,{to:"/projects",exit:{trigger:function(e){e.exit,e.node;return x()},length:2},entry:{delay:2}},l.a.createElement(i.a,{className:"FiX text-3xl text-white z-50"})))),l.a.createElement("section",{id:"___section",className:"h-screen section fadeOut","data-scrollbar":!0},l.a.createElement("div",{className:"project-header h-screen"},l.a.createElement("div",{className:"project-page-bg"},l.a.createElement(c.a,{className:"h-screen w-full overflow-hidden relative",fluid:e.markdownRemark.frontmatter.image.childImageSharp.fluid,alt:e.markdownRemark.frontmatter.image.name})),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"center-flex text-white"},l.a.createElement("div",{className:"project-header-title"},l.a.createElement("p",{className:"text-8xl font-heading text-center"},e.markdownRemark.frontmatter.title)),l.a.createElement("div",{className:"project-header-description self-end mx-12 max-w-xs"},l.a.createElement("p",{className:"text-2xl font-heading"},e.markdownRemark.frontmatter.description),l.a.createElement("br",null),l.a.createElement("a",{href:e.markdownRemark.frontmatter.link,className:"project-page-link text-xl font-serif font-semibold example text-white"},l.a.createElement("span",{className:"hover hover-3 white"},"View the Website")))))),l.a.createElement("div",{className:"bg-offwhite px-20 py-40 jumbotron"},l.a.createElement("div",{className:"center-text"},l.a.createElement("p",{className:"text-center margin-auto max-w-sm font-serif text-lg text-222 gs_reveal"},e.markdownRemark.frontmatter.content))),l.a.createElement("div",{className:"bg-white font-body"},l.a.createElement("div",{className:"sm:px-8 md-px-16 lg:px-20 grid-container pb-24"},l.a.createElement("div",{className:"section-0 grid grid-cols-2 gap-x-24 pb-20"},l.a.createElement("div",{className:"col-1"},l.a.createElement("div",{className:"gs_reveal mt-10 mb-12"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[7].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[7].name})),l.a.createElement("div",{className:"gs_reveal"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[3].childImageSharp.fluid,className:"max-w-sm mt-8 img-shadow",alt:e.markdownRemark.frontmatter.gallery[3].name}))),l.a.createElement("div",{className:"col-2"},l.a.createElement("div",{className:"gs_reveal mb-12 mt-100"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[0].childImageSharp.fluid,className:"mobile-image img-shadow",alt:e.markdownRemark.frontmatter.gallery[0].name})),l.a.createElement("div",{className:"gs_reveal mb-12"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[2].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[2].name})),l.a.createElement("div",{className:"gs_reveal mb-12"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[1].childImageSharp.fluid,className:"img-shadow",alt:e.markdownRemark.frontmatter.gallery[1].name})))),l.a.createElement("div",{className:"gs_reveal mb-12"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[4].childImageSharp.fluid,className:"mt-8 img-shadow",alt:e.markdownRemark.frontmatter.gallery[4].name})),l.a.createElement("div",{className:"gs_reveal mb-12"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[5].childImageSharp.fluid,className:"mt-8 img-shadow",alt:e.markdownRemark.frontmatter.gallery[5].name})),l.a.createElement("div",{className:"gs_reveal mb-12"},l.a.createElement(c.a,{fluid:e.markdownRemark.frontmatter.gallery[6].childImageSharp.fluid,className:"mt-8 img-shadow",alt:e.markdownRemark.frontmatter.gallery[6].name}))),l.a.createElement("div",{className:"pt-20 animate-trigger"},l.a.createElement(s.a,{tag:"div",className:"scaleUp next-project-cover gs-reveal ",fluid:e.markdownRemark.frontmatter.nextProjectImage.childImageSharp.fluid},l.a.createElement("div",{className:"center-flex text-white"},l.a.createElement("p",{className:"text-center pb-20 font-serif text-2xl"},"Next Project:"),l.a.createElement(h.a,{to:e.markdownRemark.frontmatter.nextProjectSlug,exit:{trigger:function(e){e.exit,e.node;return x()},length:2},entry:{delay:2}},l.a.createElement("p",{className:"text-7xl font-heading text-center text-white"},e.markdownRemark.frontmatter.nextProject))))))))}}}]);
//# sourceMappingURL=component---src-pages-maimi-terasaki-photography-js-f6d38fd7364ba5c005f7.js.map