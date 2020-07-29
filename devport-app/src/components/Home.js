import React, { Component } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <h1>Luis Trujillo</h1>
        <p>Software Engineer</p>
      </HomeContainer>
    );
  }
}

export default Home;
