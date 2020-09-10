import React, { Component } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";

const ProjectContainer = styled.div`
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

const ProjectBody = styled.div`
  font-size: calc(5px + 1.4vmin);
  font-family: "Lucida Console", Monaco, monospace;
  text-align: left;
  min-height: 12.5vh;
  min-width: 250px;
`;

const CardLink = styled.a`
  text-decoration: none;
`;

const SectionHeader = styled.div`
  margin-bottom: 5vh;
`;

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    // Style sheet name ⚛️
    MuiCardHeader: {
      // Name of the rule
      title: {
        // Some CSS
        fontFamily: "Lucida Console, Monaco, monospace",
      },
      subheader: {
        // Some CSS
        fontFamily: "Lucida Console, Monaco, monospace",
      },
    },
  },
});

const projectData = [
  {
    id: 1,
    link: "https://github.com/latrujil913/bucket-quest",
    title: "./android/BucketQuest",
    subheader: "Activity Finder",
    alt: "Bucket Quest",
    img: require("../assets/images/projects/bucketquest.png"),
    hint: "Go to BucketQuest repository",
    decsription:
      "An android application that enables users to find locations of activities that are worthy of putting on a bucket list.",
  },
  {
    id: 2,
    link: "https://github.com/latrujil913/pomodoro",
    title: "./android/Pomodoro",
    subheader: "Productivity Timer",
    alt: "Pomodoro",
    img: require("../assets/images/projects/pomodoro.png"),
    hint: "Go to Pomodoro repository",
    decsription:
      "Android application that enhances productivity by parsing work into manageable 25-minute sessions.",
  },
  {
    id: 3,
    link: "https://github.com/latrujil913/react-portfolio",
    title: "./webdev/Portfolio",
    subheader: "Personal Portfolio",
    alt: "Portfolio",
    img: require("../assets/images/projects/portfolio.png"),
    hint: "Go to my portfolio's repository",
    decsription:
      "Personal website built with the ReactJS framework and popular libraries such as Styled Components and Material-UI.",
  },
];

const singleProject = (project) => {
  return (
    <Grid key={project.id} item xs container justify="center">
      <CardLink href={project.link}>
        <Card variant="outlined" style={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardHeader title={project.title} subheader={project.subheader} />
            <CardMedia
              conponent="img"
              alt={project.alt}
              height="140"
              image={project.img}
              title={project.hint}
              style={{ height: 0, paddingTop: "100%" }}
            />
            <CardContent>
              <ProjectBody>{project.decsription}</ProjectBody>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardLink>
    </Grid>
  );
};

class Project extends Component {
  render() {
    return (
      <ProjectContainer id="Project">
        <SectionHeader>
          <h1>Projects</h1>
        </SectionHeader>
        <ThemeProvider theme={theme}>
          <Grid container spacing={5}>
            {projectData.map((project) => singleProject(project))}
            {/* {BucketQuest()}
            {Pomodoro()}
            {Portfolio()} */}
          </Grid>
        </ThemeProvider>
      </ProjectContainer>
    );
  }
}

export default Project;
