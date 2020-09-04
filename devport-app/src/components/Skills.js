import React, { Component } from "react";
import styled from "styled-components";
import { Grid, IconButton } from "@material-ui/core";
import {
  SiKotlin,
  SiJava,
  SiReact,
  SiC,
  SiCplusplus,
  SiCsharp,
  SiPython,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGitkraken,
  SiJavascript,
} from "react-icons/si";
import { IconContext } from "react-icons";
import "../styles/iconStyles.css";

const SkillsContainer = styled.div`
  min-height: 75vh;
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

const iconStyles = () => {
  return {
    size: "2.25em",
    color: "white",
    className: "icon",
  };
};

const handleLinkClick = (linkToSite) => {
  window.open(linkToSite);
};

const Kotlin = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://kotlinlang.org/")}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiKotlin />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const Java = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://www.java.com/en/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiJava />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const ReactJS = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://reactjs.org/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiReact />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const C = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() =>
          handleLinkClick(
            "https://docs.microsoft.com/en-us/cpp/c-language/?view=vs-2019"
          )
        }
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiC />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const cPlusPlus = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() =>
          handleLinkClick(
            "https://docs.microsoft.com/en-us/cpp/cpp/?view=vs-2019"
          )
        }
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiCplusplus />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const cSharp = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() =>
          handleLinkClick("https://docs.microsoft.com/en-us/dotnet/csharp/")
        }
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiCsharp />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const Python = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://www.python.org/doc/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiPython />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const MySQL = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://dev.mysql.com/doc/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiMysql />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const JS = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() =>
          handleLinkClick(
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          )
        }
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiJavascript />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const HTML5 = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() =>
          handleLinkClick(
            "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
          )
        }
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiHtml5 />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const CSS = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() =>
          handleLinkClick("https://developer.mozilla.org/en-US/docs/Web/CSS/")
        }
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiCss3 />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const Firebase = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://firebase.google.com/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiFirebase />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const GitKraken = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://support.gitkraken.com/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiGitkraken />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

const Git = () => {
  return (
    <Grid item xs container justify="center">
      <IconButton
        className={"icon"}
        onClick={() => handleLinkClick("https://git-scm.com/")}
        style={{ backgroundColor: "transparent" }}
      >
        <IconContext.Provider value={iconStyles()}>
          <div>
            <SiGit />
          </div>
        </IconContext.Provider>
      </IconButton>
    </Grid>
  );
};

class Skills extends Component {
  render() {
    return (
      <SkillsContainer id="Skills">
        <SectionHeader>
          <h1>Skills</h1>
        </SectionHeader>
        <Grid container spacing={8}>
          {Kotlin()}
          {Java()}
          {ReactJS()}
          {C()}
          {cPlusPlus()}
          {cSharp()}
          {Python()}
          {MySQL()}
          {JS()}
          {HTML5()}
          {CSS()}
          {Firebase()}
          {GitKraken()}
          {Git()}
        </Grid>
      </SkillsContainer>
    );
  }
}

export default Skills;
