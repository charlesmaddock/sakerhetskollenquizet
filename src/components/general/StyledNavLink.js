import React from "react"
import { NavLink } from "react-router-dom"

export default ({to, style, children}) => (
  <NavLink 
    to={to}
    style={{
      color: "grey",
      fontSize: 16,
      textDecoration: "none",
      fontWeight: 500,
      ...style
    }}
    activeStyle={{
      color: "black",
    }}
  >
    {children}
  </NavLink>
)