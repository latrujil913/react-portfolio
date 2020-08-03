import React, { Component } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  min-height: 50vh;
  margin: 0em 25vw 0em 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
`;

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <h3>About</h3>
        <p>
          I'm a software engineer based in Guadalupe, CA. I graduated from
          California Polytechnic State University, San Luis Obispo with a
          Bachelors of Science in Computer Science. Passionate about building
          software
          <span role="img" aria-label="rocket">
            &nbsp;🚀&nbsp;
          </span>
          problem-solving, learning, and collaborating.
        </p>
      </AboutContainer>
    );
  }
}

export default About;
