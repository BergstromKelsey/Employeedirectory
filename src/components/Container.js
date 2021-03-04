import React from "react";

function Container(props) {
  return <div>{props.fluid ? "-fluid" : ""}{props.children}</div>;
}

export default Container;
