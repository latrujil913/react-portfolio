import React, { Component } from "react";
import styled from "styled-components";
import FadeIn from "./animations/FadeIn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import "../styles/iconStyles.css";

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
    fontSize: 35,
    color: "white",
    margin: 20,
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
          <IconButton
            className={"icon"}
            style={{ backgroundColor: "transparent" }}
          >
            <LinkedInIcon className={"icon"} style={IconStyle()} />
          </IconButton>
          <IconButton
            className={"icon"}
            style={{ backgroundColor: "transparent" }}
          >
            <GitHubIcon className={"icon"} style={IconStyle()} />
          </IconButton>
          <IconButton
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
