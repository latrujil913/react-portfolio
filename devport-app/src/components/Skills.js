import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

const SkillsContainer = styled.div`
  min-height: 100vh;
  margin: 10vh 15vw 20vh 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 1.5vmin);
  color: white;
  text-align: center;

  @media (max-width: 895px) {
    padding-top: 1em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 5vh;
`;

class Skills extends Component {
  render() {
    return (
      <SkillsContainer>
        <SectionHeader>
          <h1>Skills</h1>
        </SectionHeader>
        <Grid container spacing={5}>
          <Grid item xs container justify="center"></Grid>
          {/* {BucketQuest()}
          {Pomodoro()}
          {Portfolio()} */}
        </Grid>
      </SkillsContainer>
    );
  }
}

export default Skills;
