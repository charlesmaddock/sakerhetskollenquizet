import React from "react";

export default ({ children, colored, href, style }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: colored !== undefined ? "blue" : "grey",
      fontWeight: 500,
      textDecoration: "none",
      cursor: "pointer",
      ...style,
    }}
  >
    {children}
  </a>
);
