import React from "react";
import ReactMarkdown from "react-markdown";
// Custom

// Simple changes the markdown to fit our graphical profile better
export default ({ style, children }) => (
  <p style={{ ...style }}>
    <ReactMarkdown
      style={{ margin: 0 }}
      source={children}
      renderers={{
        strong: (props) => <b style={{ fontWeight: 700 }}>{props.children}</b>,
      }}
      disallowedTypes={["paragraph"]}
      unwrapDisallowed
    />
  </p>
);
