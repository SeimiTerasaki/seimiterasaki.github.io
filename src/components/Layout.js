import React from "react"
import PropTypes from 'prop-types'

const Layout = ({ children }) => {

  return (
    <>
        <span><p>{children.currentPage}</p></span>
        {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
