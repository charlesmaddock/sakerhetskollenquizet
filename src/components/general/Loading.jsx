import React from "react";
// Custom
import { Logo } from ".";

const Loading = ({ fullScreen }) => {
  return (
    <div
      style={{
        textAlign: "center",
        flex: 1,
        minHeight: fullScreen ? "100vh" : 0,
        marginTop: fullScreen ? "30vh" : 0,
      }}
    >
      <Logo />
    </div>
  );
};

export default Loading;
