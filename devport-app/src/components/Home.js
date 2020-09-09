import React, { Component } from "react";
import styled from "styled-components";
import FadeIn from "./animations/FadeIn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import "../styles/iconStyles.css";
// import Typist from "react-typist";
// import ReactTypingEffect from "react-typing-effect";// TODO: uninstall
import Typewriter from "typewriter-effect";

const HomeContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

const IconBar = styled.div`
  min-height: 20vh;
  flex-direction: row;
  text-align: center;
`;

const IconStyle = () => {
  return {
    fontSize: "calc(15px + 2vmin)",
    color: "white",
    margin: 20,
  };
};

const handleLinkedInClick = () => {
  window.open("https://www.linkedin.com/in/luis-trujillo-4ba637194/");
};

const handleGitHubClick = () => {
  window.open("https://github.com/latrujil913");
};

const handleMailToClick = () => {
  window.location.replace("mailto:ltluistrujillo25@gmail.com");
};

class Home extends Component {
  render() {
    return (
      <FadeIn duration=".75" delay="1" trnslFrmY="10" trnslToY="0">
        <HomeContainer>
          <h1>Luis Trujillo</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(2500).typeString("Software Engineer").start();
            }}
          />
        </HomeContainer>
        <IconBar>
          <IconButton
            onClick={handleLinkedInClick}
            className={"icon"}
            style={{ backgroundColor: "transparent" }}
          >
            <LinkedInIcon className={"icon"} style={IconStyle()} />
          </IconButton>
          <IconButton
            onClick={handleGitHubClick}
            className={"icon"}
            style={{ backgroundColor: "transparent" }}
          >
            <GitHubIcon className={"icon"} style={IconStyle()} />
          </IconButton>
          <IconButton
            onClick={handleMailToClick}
            className={"icon"}
            style={{ backgroundColor: "transparent" }}
          >
            <EmailIcon className={"icon"} style={IconStyle()} />
          </IconButton>
        </IconBar>
      </FadeIn>
    );
  }
}

export default Home;
