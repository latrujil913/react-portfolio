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
});

const BucketQuest = () => {
  return (
    <Grid item xs container justify="center">
      <CardLink href="https://github.com/latrujil913/bucket-quest">
        <Card variant="outlined" style={{ maxWidth: 500, height: "100%" }}>
          <CardActionArea>
            <CardHeader
              title="./android/BucketQuest"
              subheader="Activity Finder"
            />
            <CardMedia
              conponent="img"
              alt="Bucket Quest"
              height="140"
              image={require("../assets/images/projects/bucketquest.png")}
              title="Go to BucketQuest repository"
              style={{ height: 0, paddingTop: "100%" }}
            />
            <CardContent>
              <ProjectBody>
                An android application that enables users to find locations of
                activities that are worthy of putting on a bucket list.
              </ProjectBody>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardLink>
    </Grid>
  );
};

const Pomodoro = () => {
  return (
    <Grid item xs container justify="center">
      <CardLink href="https://github.com/latrujil913/pomodoro">
        <Card variant="outlined" style={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardHeader
              title="./android/Pomodoro"
              subheader="Productivity Timer"
            />
            <CardMedia
              conponent="img"
              alt="Pomodoro"
              height="140"
              image={require("../assets/images/projects/pomodoro.png")}
              title="Go to Pomodoro repository"
              style={{ height: 0, paddingTop: "100%" }}
            />
            <CardContent>
              <ProjectBody>
                Android application that enhances productivity by parsing work
                into manageable 25-minute sessions and 5-minute breaks.
              </ProjectBody>
            </CardContent>
          </CardActionArea>
        </Card>
      </CardLink>
    </Grid>
  );
};

const Portfolio = () => {
  return (
    <Grid item xs container justify="center">
      <CardLink href="https://github.com/latrujil913/react-portfolio">
        <Card variant="outlined" style={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardHeader
              title="./webdev/Portfolio"
              subheader="Personal Portfolio"
            />
            <CardMedia
              conponent="img"
              alt="Portfolio"
              height="140"
              image={require("../assets/images/projects/portfolio.png")}
              title="Go to portfolio repository"
              style={{ height: 0, paddingTop: "100%" }}
            />
            <CardContent>
              <ProjectBody>
                Personal website built with the ReactJS framework and popular
                libraries such as Styled Components and Material-UI.{"   "}
              </ProjectBody>
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
            {BucketQuest()}
            {Pomodoro()}
            {Portfolio()}
          </Grid>
        </ThemeProvider>
      </ProjectContainer>
    );
  }
}

export default Project;
