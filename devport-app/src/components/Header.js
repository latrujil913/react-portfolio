import React, { Component } from "react";
import styled from "styled-components";
import logo from "../assets/images/misc/logo.png";
import FadeIn from "./animations/FadeIn";
import { Link } from "react-scroll";

// margin: top right bottom left
const HeaderContainer = styled.nav`
  display: flex;
  margin: 0em 5vw 0em 5vw;
  padding-top: 2em;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 895px) {
    padding-top: 1em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  font-size: calc(6.5px + 1vmin);
  margin: 1em 0.1vw 1em 0.1vw;
  border: 0.5px none #98e342;
  background: ${(props) => (props.primary ? "transparent" : "transparent")};
  border-radius: 2px;
  padding: 0.25em 1em;
  color: #98e342;
  font-family: "Lucida Console", Monaco, monospace;
  transition: 0.01s;
  cursor: pointer;

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
      <HeaderContainer id="Header">
        <FadeIn duration=".5" delay="2" trnslFromY="3" trnslToY="0">
          <LogoContainer>
            <Logo src={logo} alt="Logo" />
          </LogoContainer>
        </FadeIn>
        <FadeIn duration=".25" delay="1.75" trnslFrmY="3" trnslToY="0">
          <ButtonContainer>
            <Button
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              About
            </Button>{" "}
            <Button
              activeClass="active"
              to="Project"
              spy={true}
              smooth={true}
              // offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Projects
            </Button>
            <Button
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              Skills
            </Button>
          </ButtonContainer>
        </FadeIn>
      </HeaderContainer>
    );
  }
}

export default Header;
