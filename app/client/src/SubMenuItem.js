import React from 'react'
import { withGreenMenuHighlighting } from './GreenMenuHighlighting.js'

const SubMenuItem = ({
  id,
  title,
  icon,
  children,
  handleHoverIn,
  handleHoverOut,
  isActive
}) => (
  <li onMouseOver={() => handleHoverIn(id)}
    onMouseLeave={handleHoverOut}>
    <div>
      <i className={`fas fa-${icon} ${isActive ? 'green-time' : ''}`} />
    </div>
    <div>
      <div>
        <h4 className={`${isActive ? 'green-time' : ''}`}>{ title }</h4>
        {
          children && <p>{ children }</p>
        }
      </div>
    </div>
  </li>
)

export default withGreenMenuHighlighting(SubMenuItem)
