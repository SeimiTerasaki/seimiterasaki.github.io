(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{eOWU:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var r=t("q1tI"),n=t.n(r),l=t("Wbzz"),c=t("9eSz"),m=t.n(c),i=t("1eu9"),o=t.n(i),s=t("Tgqd"),d=t("V0Rq"),p=t("Haw6"),f=t("pc+1"),u=t("RHZy"),x=t("plVc"),g=t.n(x),E=t("vrFN"),h=t("4tyx"),w=t("dKVP");function y(e,a){(new f.e).to(".fadeOut",.8,{opacity:0,ease:f.b.easeIn},1)}function k(){var e=Object(l.useStaticQuery)("377245809"),a=e.markdownRemark.frontmatter.gallery.slice(0,2),t=e.markdownRemark.frontmatter.gallery.slice(3,5),c=e.markdownRemark.frontmatter.gallery.slice(5),i=function(){var e=document.querySelector("[data-scrollbar]"),a=d.a.init(e);u.a.registerPlugin(p.a);var t=u.a.to("nav",{y:"-=60",duration:.5,ease:f.c.easeIn,paused:!0});p.a.scrollerProxy("body",{scrollTop:function(e){return arguments.length&&(a.scrollTop=e),a.scrollTop}}),p.a.create({trigger:"nav",start:"10px top",end:99999,onUpdate:function(e){e.progress;var a=e.direction,r=e.isActive;-1===a&&t.reverse(),(1===a||1===a&&!0===r)&&t.play()}}),a.addListener(p.a.update)};return Object(r.useEffect)((function(){var e;(e=new f.e).fromTo(".project-header-title",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.b.ease},1),e.fromTo(".project-header-description",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.b.ease},1.5),e.fromTo(".project-page-link",{y:"20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.b.ease},2),e.fromTo(".FiX",{y:"-20px",opacity:0},{duration:.8,y:"0px",opacity:1,ease:f.b.ease},2.5),i()}),[]),Object(r.useEffect)((function(){i()})),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"fixed-nav w-full"},n.a.createElement(E.a,{title:"Maimi Terasaki Photography"}),n.a.createElement("nav",{className:"pt-8 flex justify-center"},n.a.createElement(g.a,{to:"/projects",exit:{trigger:function(e){e.exit,e.node;return y()},length:2},entry:{delay:2}},n.a.createElement(s.a,{className:"FiX text-3xl text-white z-50"})))),n.a.createElement("section",{id:"___section",className:"h-screen section fadeOut","data-scrollbar":!0},n.a.createElement("div",{className:"project-header h-screen"},n.a.createElement(m.a,{className:"h-screen w-full overflow-hidden parallax-bg",fluid:e.markdownRemark.frontmatter.image.childImageSharp.fluid,alt:e.markdownRemark.frontmatter.image.name}),n.a.createElement("div",{className:"parallax-fwd w-full"},n.a.createElement("div",{className:"center-flex text-white"},n.a.createElement("div",{className:"project-header-title"},n.a.createElement("p",{className:"text-8xl font-heading text-center"},e.markdownRemark.frontmatter.title)),n.a.createElement("div",{className:"project-header-description self-end mx-12 max-w-xs"},n.a.createElement("p",{className:"text-2xl font-heading"},e.markdownRemark.frontmatter.description),n.a.createElement("br",null),n.a.createElement("a",{href:e.markdownRemark.frontmatter.link,className:"project-page-link text-xl font-serif font-semibold example text-white"},n.a.createElement("span",{className:"hover hover-3 white"},"View the Website")))))),n.a.createElement("div",{className:"bg-offwhite jumbotron sm:px-12 md:px-18 lg:px-24"},n.a.createElement("div",{className:"center-text py-20"},n.a.createElement(h.a,null,n.a.createElement("p",{className:"text-center margin-auto max-w-sm font-serif text-lg text-222"},e.markdownRemark.frontmatter.content)))),n.a.createElement("div",{className:"bg-white font-body"},n.a.createElement("div",{className:"sm:px-8 md-px-16 lg:px-20 grid-container pb-24"},n.a.createElement("div",{className:"section-0 grid grid-cols-2 gap-x-24 pb-20"},n.a.createElement("div",{className:"col-1"},a.map((function(e){return n.a.createElement(h.a,{key:e.id},n.a.createElement("div",{className:"mb-12"},n.a.createElement(m.a,{fluid:e.childImageSharp.fluid,className:"img-shadow",alt:e.name})))}))),n.a.createElement("div",{className:"col-2"},n.a.createElement(h.a,null,n.a.createElement("div",{className:"mb-12 mt-100"},n.a.createElement(m.a,{fluid:e.markdownRemark.frontmatter.gallery[2].childImageSharp.fluid,className:"mobile-image img-shadow",alt:e.markdownRemark.frontmatter.gallery[2].name}))),t.map((function(e){return n.a.createElement(h.a,{key:e.id},n.a.createElement("div",{className:"mb-12"},n.a.createElement(m.a,{fluid:e.childImageSharp.fluid,className:"img-shadow",alt:e.name})))})))),c.map((function(e){return n.a.createElement(h.a,{key:e.id},n.a.createElement("div",{className:"mb-12"},n.a.createElement(m.a,{fluid:e.childImageSharp.fluid,className:"img-shadow mt-8",alt:e.name})))}))),n.a.createElement("div",{className:"pt-20 animate-trigger"},n.a.createElement(w.a,null,n.a.createElement(o.a,{tag:"div",className:"next-project-cover",fluid:e.markdownRemark.frontmatter.nextProjectImage.childImageSharp.fluid},n.a.createElement("div",{className:"center-flex text-white"},n.a.createElement(h.a,null,n.a.createElement("p",{className:"text-center pb-20 font-serif text-2xl"},"Next Project:"),n.a.createElement(g.a,{to:e.markdownRemark.frontmatter.nextProjectSlug,exit:{trigger:function(e){e.exit,e.node;return y()},length:2},entry:{delay:2}},n.a.createElement("p",{className:"text-8xl font-heading text-center text-white"},e.markdownRemark.frontmatter.nextProject))))))))))}}}]);
//# sourceMappingURL=component---src-pages-maimi-terasaki-photography-js-2e2cb47227c98ea167c9.js.map