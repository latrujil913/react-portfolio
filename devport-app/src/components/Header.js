import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

// margin: top right bottom left
const HeaderContainer = styled.nav`
  display: flex;
  margin: 0em 5vw 0em 5vw;
  padding-top: 2em;
  flex-direction: row;

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Button = styled.button`
  font-size: 0.9em;
  margin: 1em 1em 1em 1em;
  border: transparent;
  background: transparent;
  color: #98e342;
  font-family: "Lucida Console", Monaco, monospace;
`;

const LogoContainer = styled.nav`
  display: flex;
  align-self: center;
`;

const ButtonContainer = styled.nav`
  justify-content: right;
  align-self: center;
  margin-left: auto;

  // for unsetting the margin-left attribute
  @media (max-width: 750px) {
    margin-left: unset;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 5px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
        </LogoContainer>
        <ButtonContainer>
          <Button
            onMouseOver={() => {
              console.log("I found you mouse.");
            }}
          >
            About
          </Button>
          <Button>Resume</Button>
          <Button>Work</Button>
          <Button>Contact</Button>
        </ButtonContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
