import React from "react"
import { FaFacebook, FaLinkedinIn, FaGithub, FaCodepen} from 'react-icons/fa'

import '../css/tailwind.css';

const Footer = () => {
   
  return (
  <footer className="section py-5 padding-2 sm:p-12 md-px-18 lg:px-24 bg-111 h-screen flex items-center justify-center flex-col animate-slideInBottom">
  <div className="text-center text-white">
  <ul className="social-wrapper text-3xl py-5">
    <li className="inline-flex mx-2"><FaFacebook /></li>
    <li className="inline-flex mx-2"><FaLinkedinIn /></li>
    <li className="inline-flex mx-2"><FaGithub /></li>
    <li className="inline-flex mx-2"><FaCodepen /></li>
  </ul>
  <p className="contact text-3xl">Contact</p>
  <p className="email text-2xl py-3">seimiterasaki@gmail.com</p>
  <p className=" text-xl font-normal uppercase">© 2020 by Seimi Terasaki. All rights reserved.</p>
  </div>
  </footer>
  )
}

export default Footer