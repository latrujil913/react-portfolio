import React, { Component } from "react";
import styled from "styled-components";
import FadeIn from "./FadeIn";

const HomeContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

class Home extends Component {
  render() {
    return (
      <FadeIn duration=".75" delay="1" trnslFrmY="10" trnslToY="0">
        <HomeContainer>
          <h1>Luis Trujillo</h1>
          <p>Software Engineer</p>
        </HomeContainer>
      </FadeIn>
    );
  }
}

export default Home;
