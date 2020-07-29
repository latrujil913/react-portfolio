import React, { Component } from "react";
import Home from "./Home";
import Header from "./Header";
import styled from "styled-components";

const HeroContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <Header />
        <Home />
      </HeroContainer>
    );
  }
}

export default Hero;
