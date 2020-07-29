import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 0.9em;
  //   margin: 0em 1em 0em 1em;
  border: transparent;
  background: transparent;
  color: #98e342;
  font-family: "Lucida Console", Monaco, monospace;
`;

// margin: top right bottom left
const HeaderContainer = styled.nav`
  display: flex;
  justify-content: right;
  margin: 0em 7em 2em 7em;
  padding-top: 5em;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Button>About</Button>
        <Button>Resume</Button>
        <Button>Work</Button>
        <Button>Contact</Button>
      </HeaderContainer>
    );
  }
}

export default Header;
