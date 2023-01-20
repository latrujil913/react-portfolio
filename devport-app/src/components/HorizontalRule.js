import React from "react";
import styled from "styled-components";

// NOTE: margin: top right bottom left
const HeaderRule = styled.hr`
  height: 1px;
  background: linear-gradient(to right, white, #98e342);
  border: none;
  outline: none;
  margin: 0em 5vw 0em 5vw;
  position: relative;

  @keyframes line_animation {
    from {
      width: 0vw;
    }
    to {
      width: 90vw;
    }
  }

  animation-name: line_animation;
  animation-duration: 1s;
  animation-timing-function: linear;
`;

function HorizontalRule (){
  return <HeaderRule />;
}

export default HorizontalRule;
