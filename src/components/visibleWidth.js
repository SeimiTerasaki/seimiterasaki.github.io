import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const VisibilityWidth = ({children}) => {
  const [visible, setVisibility] = useState(false)

    return (
      <VisibilitySensor partialVisibility onChange={(isVisible) => {setVisibility(!visible)}}>
          <div className="transition-width margin-auto" style={{
              width: visible ? '70%': '100%'
            }}>
          {children}
          </div>
      </VisibilitySensor>
    );
}

export default VisibilityWidth