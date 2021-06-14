import React from "react";
import Fade from "react-reveal/Fade";
// Custom
import getWindowSize from "../../util/getWindowSize";

/*
  This component makes children fade in from bottom when the user reaches
  20% of the children component. On small screen the animation is removed 
  however, since it looks bad and ruins the user experience in my opinion. 
*/
const BottomFade = ({ fadeOnMobile = false, children }) => {
  const windowSize = getWindowSize();
  if (windowSize.width < 300) {
    if (fadeOnMobile === true) {
      return <Fade bottom>{children}</Fade>;
    } else {
      return children;
    }
  } else {
    return <Fade bottom>{children}</Fade>;
  }
};

export default BottomFade;
