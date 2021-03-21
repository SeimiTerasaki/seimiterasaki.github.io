import React from "react"
import PropTypes from "prop-types"
import "@fontsource/im-fell-french-canon-sc"

import "./css/main.css"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`loader`} id="___loader"
        style={{position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 1000
          }}>
          <div id="loader__bckg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: '#dd545b',
            transformOrigin: 'center top',
          }}>
          <div id="loader__logo" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}>
            <p id="loader__p" style={{
              color: '#fff',
              fontSize: '3rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              visibility:'hidden',
              fontFamily: 'Playfair Display',
            }}>Welcome...</p>
          </div>     
          </div>
        </div>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
