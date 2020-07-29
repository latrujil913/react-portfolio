import React, { Component } from "react";
import styled from "styled-components";

// NOTE: margin: top right bottom left
const HeaderRule = styled.hr`
  height: 1.5px;
  background: white;
  border: none;
  outline: none;
  margin: 1em 7em 2em 7em;
  position: relative;
`;

class HorizontalRule extends Component {
  render() {
    return <HeaderRule />;
  }
}

export default HorizontalRule;
