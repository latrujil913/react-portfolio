import React, { Component } from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import HorizontalRule from "./HorizontalRule";

const HeroContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <Header />
        <HorizontalRule />
        <Home />
      </HeroContainer>
    );
  }
}

export default Hero;
