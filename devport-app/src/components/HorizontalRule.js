import React, { Component } from "react";
import styled from "styled-components";

// NOTE: margin: top right bottom left
const HeaderRule = styled.hr`
  height: 1px;
  background: white;
  border: none;
  outline: none;
  margin: 0em 5vw 2em 5vw;
  position: relative;
`;

class HorizontalRule extends Component {
  render() {
    return <HeaderRule />;
  }
}

export default HorizontalRule;
