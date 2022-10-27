import React, { Component } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  min-height: 60vh;
  margin: 0vh 15vw 20vh 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(7px + 1.5vmin);
  color: white;
  text-align: center;
`;

class About extends Component {
  render() {
    return (
      <AboutContainer id="About">
        <h1>About</h1>
        <p>
          I'm a software engineer based in Guadalupe, CA. I have 
          two years of professional experience and a demonstrated
          history of working in the industry. Passionate about building 
          software{" "}
          <span role="img" aria-label="rocket">
            {" "}
            🚀{" "}
          </span>
          problem-solving, learning, and collaborating.
        </p>
      </AboutContainer>
    );
  }
}

export default About;
