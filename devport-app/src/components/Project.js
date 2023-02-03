import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { Box } from '@material-ui/core';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const ProjectContainer = styled.div`
  min-height: 100vh;
  margin: 10vh 15vw 20vh 15vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(5px + 1.5vmin);
  color: white;
  text-align: left;

  @media (max-width: 895px) {
    padding-top: 1em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ProjectBody = styled.div`
  text-align: left;
  min-height: 10vh;
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
        fontSize: "calc(8px + 1.4vmin)",
      },
      subheader: {
        // Some CSS
        fontFamily: "Lucida Console, Monaco, monospace",
        fontSize: "calc(2.5px + 1.4vmin)",
      },
    },
    MuiCardMedia: {
      media: {
        fontSize: "calc(2px + 1.4vmin)",
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: "Lucida Console, Monaco, monospace",
        fontSize: "calc(3.5px + 1.4vmin)",
      },
    },
  },
});

const projectData = [
  {
    id: 1,
    link: "https://github.com/latrujil913/bucket-quest",
    title: "BucketQuest",
    subheader: "Android - Activity Finder",
    alt: "Bucket Quest",
    img: require("../assets/images/projects/bucketquest.png"),
    hint: "Go to BucketQuest repository",
    description:
      "Android application that enables users to find locations of activities that are worthy of putting on a bucket list.",
  },
  {
    id: 2,
    link: "https://github.com/latrujil913/pomodoro",
    title: "Pomodoro",
    subheader: "Android - Productivity Timer",
    alt: "Pomodoro",
    img: require("../assets/images/projects/pomodoro.png"),
    hint: "Go to Pomodoro repository",
    description:
      "Android application that enhances productivity by parsing work into manageable 25-minute sessions.",
  },
  {
    id: 3,
    link: "https://github.com/latrujil913/react-portfolio",
    title: "Portfolio",
    subheader: "React.js - Portfolio",
    alt: "Portfolio",
    img: require("../assets/images/projects/portfolio.png"),
    hint: "Go to my portfolio's repository",
    description:
      "Personal website built with ReactJS, Styled Components and Material-UI.",
  },
  {
    id: 4,
    link: "https://github.com/UDmonia/calm-on",
    title: "Calm On!",
    subheader: "React Native - Mobile Application",
    alt: "Calm On!",
    img: require("../assets/images/projects/calmon.png"),
    hint: "Go to Calm On!'s repository",
    description:
      "Calm On! a fun and interactive experience to educate youths (ages 6-11) to learn about mental health techniques.",
  },
  {
    id: 5,
    link: "https://www.replikasoftware.com/",
    title: "Replika Software",
    subheader: "React Native - Mobile Application",
    alt: "Replika Software",
    img: require("../assets/images/projects/replika.png"),
    hint: "Go to Replika Software's website",
    description:
      "Platform for brands to activate their network of social sellers with a turnkey tool to inspire sales online.",
  },
];

const useStyles = makeStyles(() => ({
  card: {
    boxShadow: 'none',
    position: 'relative',
    minWidth: 350,
    minHeight: 410,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '85%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000 25%, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '90%',

  },
}));

function SingleProject (props) {
  const {project} = props;
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <Grid key={project.id} item xs container justify="center">
      <CardLink href={project.link}>
        <Card className={styles.card}>
            <CardMedia
              component="img"
              alt={project.alt}
              image={project.img}
              title={project.hint}
              classes={mediaStyles}
            />
            <Box py={3} px={2} className={styles.content}>
              <Info  useStyles={useGalaxyInfoStyles}>
              <InfoSubtitle>{project.subheader}</InfoSubtitle>
              <InfoTitle>{project.title}</InfoTitle>
              <InfoCaption>{project.description}</InfoCaption> 
              </Info>
            </Box>
        </Card>
      </CardLink>
    </Grid>
  );
};

function Project (){
  return (
    <ProjectContainer id="Project">
      <SectionHeader>
        <h1>Works</h1>
      </SectionHeader>
      <ThemeProvider theme={theme}>
        <Grid container spacing={5}>
          {projectData.map((project) => <SingleProject project={project} />)}
        </Grid>
      </ThemeProvider>
    </ProjectContainer>
  );
}

export default Project;
