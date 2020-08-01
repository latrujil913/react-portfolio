import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import FadeIn from "./FadeIn";

// margin: top right bottom left
const HeaderContainer = styled.nav`
  display: flex;
  margin: 0em 5vw 0em 5vw;
  padding-top: 2em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Button = styled.button`
  font-size: 0.9em;
  margin: 1em 0.1vw 1em 0.1vw;
  border: 0.5px none #98e342;
  background: ${(props) => (props.primary ? "transparent" : "transparent")};
  border-radius: 2px;
  padding: 0.25em 1em;
  color: #98e342;
  font-family: "Lucida Console", Monaco, monospace;
  transition: 0.01s;

  &:hover,
  &:focus {
    background-color: rgba(126, 209, 31, 0.15);
    border-color: #b6eb7a;
    color: #b6eb7a;
    box-shadow: 0 0.5em 0.5em -0.4em #b6eb7a;
    transform: translateY(-0.15em);
  }

  &:active {
    background-color: rgba(126, 209, 31, 0.15);
    transform: translateY(1px);
    box-shadow: 0 0em 0.5em -0.4em #b6eb7a;
  }
`;

const LogoContainer = styled.nav`
  display: flex;
  align-self: center;
`;

const ButtonContainer = styled.nav`
  align-self: center;
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
        <FadeIn duration=".5" delay="2" trnslFromY="3" trnslToY="0">
          <LogoContainer>
            <Logo src={logo} alt="Logo" />
          </LogoContainer>
        </FadeIn>
        <FadeIn duration=".25" delay="1.75" trnslFrmY="3" trnslToY="0">
          <ButtonContainer>
            <Button
              primary={false}
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
        </FadeIn>
      </HeaderContainer>
    );
  }
}

export default Header;
