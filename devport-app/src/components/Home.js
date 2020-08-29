import React, { Component } from "react";
import styled from "styled-components";
import FadeIn from "./animations/FadeIn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

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

const IconBar = styled.div`
  flex-direction: row;
  text-align: center;
`;

const IconStyle = () => {
  return {
    fontSize: 30,
    color: "white",
    margin: 5,
    textShadowColor: "#b6eb7a",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  };
};

class Home extends Component {
  render() {
    return (
      <FadeIn duration=".75" delay="1" trnslFrmY="10" trnslToY="0">
        <HomeContainer>
          <h1>Luis Trujillo</h1>
          <p>Software Engineer</p>
        </HomeContainer>
        <IconBar>
          <LinkedInIcon style={IconStyle()} />
          <GitHubIcon style={IconStyle()} />
          <EmailIcon style={IconStyle()} />
        </IconBar>
      </FadeIn>
    );
  }
}

export default Home;
