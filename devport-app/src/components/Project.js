import React, { Component } from "react";
import styled from "styled-components";
import bucketquest from "../assets/bucketquest.png";

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

const SingleProject = styled.nav`
  display: flex;
  align-self: center;
  flex-direction: row;
`;

const ProjectImage = styled.img`
  width: 50%;
  height: auto;
  margin: 5px;
`;

const ProjectDescription = styled.div`
  flex-direction: column;
`;

const HeaderRule = styled.hr`
  width: 25%;
  margin: 1em 1em 1em 1em;
`;

class Project extends Component {
  render() {
    return (
      <ProjectContainer id="Project">
        <h3>Projects</h3>
        <SingleProject>
          <ProjectImage src={bucketquest} alt="Projects" />
          <ProjectDescription>
            <h4>./android/BucketQuest</h4>
            <HeaderRule />
            <p>
              An android application that enables anybody to look up a location
              and see a list of interesting/fun activities to do that are worthy
              of putting on a bucket list.
            </p>
          </ProjectDescription>
        </SingleProject>
      </ProjectContainer>
    );
  }
}

export default Project;
