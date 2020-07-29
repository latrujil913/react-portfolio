import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 0.5px solid;
  margin: 1em;
  font-size: 0.9em;
  height: 2.75em;
  border: 1px solid #98e342;
  background: transparent;
  color: #98e342;
  border-radius: 3px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: left;

  @media (max-width: 500px) {
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
      </HeaderContainer>
    );
  }
}

export default Header;
