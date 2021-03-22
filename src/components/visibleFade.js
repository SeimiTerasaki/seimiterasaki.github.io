import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const VisibilityFade = ({children}) => {
  const [visible, setVisibility] = useState(false)

    return (
      <VisibilitySensor partialVisibility onChange={(isVisible) => {setVisibility(!visible)}}>
          <div className="gs_reveal" style={{
              opacity: visible ? 0 : 1,
              transform: visible ? "translateY(120px)" : "translateY(0)" }}>
          {children}
          </div>
      </VisibilitySensor>
    );
}

export default VisibilityFade