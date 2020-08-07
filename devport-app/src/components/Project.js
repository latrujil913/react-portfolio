import React, { Component } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  min-height: 50vh;
  margin: 0vh 15vw 20vh 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(7px + 1.5vmin);
  color: white;
  text-align: center;
`;

class Project extends Component {
  render() {
    return (
      <ProjectContainer id="Project">
        <h3>Projects</h3>
      </ProjectContainer>
    );
  }
}

export default Project;
