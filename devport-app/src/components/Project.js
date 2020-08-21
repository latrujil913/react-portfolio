import React, { Component } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const ProjectContainer = styled.div`
  min-height: 100vh;
  margin: 0vh 15vw 20vh 15vw;
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

// const SingleProject = styled.nav`
//   display: flex;
//   margin: 5vh 0vw 0vh 0vw;
//   justify-content: space-evenly;
//   align-self: center;
//   flex-direction: row;
//   min-height: 70vh;
//   width: 100vw;
// `;

// const ImageContainer = styled.div`
//   width: 65%;
//   // margin: 5vw;
//   max-width: 400px;
//   display: flex;
//   justify-content: center;
//   align-self: center;
// `;

// const ProjectImage = styled.img`
//   display: block;
//   width: 65%;
//   height: auto;
//   // @media (max-width: 895px) {
//   //   width: 85%;
//   // }
// `;

// const ProjectDescription = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 5vw;
//   width: 20%;
// `;

// const HeaderRule = styled.hr`
//   width: 45%;
//   margin: 1vh 0vw 1vh 1.5vw;
// `;

const ProjectTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: "Lucida Console", Monaco, monospace;
  text-align: left;
  font-weight: bold;
`;

const ProjectBody = styled.div`
  font-size: 13px;
  font-family: "Lucida Console", Monaco, monospace;
  text-align: left;
`;

const CardLink = styled.a`
  text-decoration: none;
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
        <Card variant="outlined" style={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              conponent="img"
              alt="Bucket Quest"
              height="140"
              image={require("../assets/bucketquest.png")}
              title="Go to BucketQuest repository"
              style={{ height: 0, paddingTop: "100%" }}
            />
            <CardContent>
              <ProjectTitle>./android/BucketQuest</ProjectTitle>
              <ProjectBody>
                An android application that enables users to look up a location
                and see a list of interesting/fun activities to do that are
                worthy of putting on a bucket list.
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
        <h1>Projects</h1>
        <ThemeProvider theme={theme}>
          <Grid container spacing={4}>
            {BucketQuest()}
            {BucketQuest()}
            {BucketQuest()}
          </Grid>
        </ThemeProvider>
      </ProjectContainer>
    );
  }
}

export default Project;
