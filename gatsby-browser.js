import "./src/css/tailwind.css"
import './src/css/main.css'
import "@fontsource/raleway"
import "@fontsource/bodoni-moda"


import {gsap, Power2, TimelineMax} from "gsap/all"

const loader = document.getElementById("___loader")
const loaderBckg = document.getElementById("loader__bckg")
const loaderLogo = document.getElementById("loader__logo")
const seimi = document.getElementById("loader__p")

const tl = new TimelineMax();
  tl.to(loaderBckg, {scaleY: 0.0001, duration: .8, ease: Power2.easeInOut}, 1.5)
    .to(loaderLogo, {height:0, duration: .6, ease: Power2.easeInOut}, 1.5)
    .to(loaderLogo, {opacity: 0, duration: .8, ease: Power2.easeIn}, 1.5)
    .to(loader,{duration: 1, opacity: 0, autoAlpha:1, yPercent: -100, ease: Power2.easeInOut}, 2.5)

export const onClientEntry = () => {
  gsap.fromTo(seimi, {autoAlpha: 0, width: 0},{ease: "steps(60)", autoAlpha:1, width: '100%',duration: 1})
}

export const onInitialClientRender = () => {
    tl.play();
}