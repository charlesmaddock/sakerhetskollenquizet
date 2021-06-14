import React, { useState } from "react";

export default ({
  children,
  style,
  color = "white",
  hoverColor = "black",
  onClick,
}) => {
  const [hoveringOver, setHoveringOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setHoveringOver(true)}
      onMouseLeave={() => setHoveringOver(false)}
      onClick={onClick}
      style={{
        borderRadius: 6,
        borderStyle: "solid",
        cursor: "pointer",
        borderWidth: 2,
        borderColor: hoveringOver ? hoverColor : color,
        color: hoveringOver ? hoverColor : color,
        padding: 10,
        display: "inline-block",
        margin: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
