import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Header from "./Header";
import HorizontalRule from "./HorizontalRule";

const HeroContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

function Hero (){
  return (
    <HeroContainer>
      <Header />
      <HorizontalRule />
      <Home />
    </HeroContainer>
  );
}

export default Hero;
