import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, IconButton } from '@material-ui/core';
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
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import '../styles/iconStyles.css';

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
    size: '2.25em',
    color: 'white',
    className: 'icon',
  };
};

const handleLinkClick = (linkToSite) => {
  window.open(linkToSite);
};

const skillsData = [
  {
    id: 0,
    name: 'Kotlin',
    link: 'https://kotlinlang.org/',
    icon: () => <SiKotlin />,
  },
  {
    id: 13,
    name: 'Git',
    link: 'https://git-scm.com/',
    icon: () => <SiGit />,
  },
  {
    id: 1,
    name: 'Java',
    link: 'https://www.java.com/en/',
    icon: () => <SiJava />,
  },
  {
    id: 2,
    name: 'ReactJS',
    link: 'https://reactjs.org/',
    icon: () => <SiReact />,
  },
  {
    id: 3,
    name: 'C',
    link: 'https://docs.microsoft.com/en-us/cpp/c-language/?view=vs-2019',
    icon: () => <SiC />,
  },
  {
    id: 4,
    name: 'cPlusPlus',
    link: 'https://docs.microsoft.com/en-us/cpp/cpp/?view=vs-2019',
    icon: () => <SiCplusplus />,
  },
  {
    id: 5,
    name: 'cSharp',
    link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    icon: () => <SiCsharp />,
  },
  {
    id: 6,
    name: 'Python',
    link: 'https://www.python.org/doc/',
    icon: () => <SiPython />,
  },
  {
    id: 7,
    name: 'MySQL',
    link: 'https://dev.mysql.com/doc/',
    icon: () => <SiMysql />,
  },
  {
    id: 8,
    name: 'JS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: () => <SiJavascript />,
  },
  {
    id: 9,
    name: 'HTML5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    icon: () => <SiHtml5 />,
  },
  {
    id: 10,
    name: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/',
    icon: () => <SiCss3 />,
  },
  {
    id: 11,
    name: 'Firebase',
    link: 'https://firebase.google.com/',
    icon: () => <SiFirebase />,
  },
  {
    id: 12,
    name: 'GitKraken',
    link: 'https://support.gitkraken.com/',
    icon: () => <SiGitkraken />,
  },
];

function Skill(props) {
  const { link, icon } = props;

  return (
    <IconButton
      className={'icon'}
      onClick={() => handleLinkClick(link)}
      style={{ backgroundColor: 'transparent' }}
    >
      <IconContext.Provider value={iconStyles()}>
        <div>{icon()}</div>
      </IconContext.Provider>
    </IconButton>
  );
}

class Skills extends Component {
  render() {
    return (
      <SkillsContainer id='Skills'>
        <SectionHeader>
          <h1>Skills</h1>
        </SectionHeader>
        <Grid container spacing={8}>
          {skillsData.map((skill) => {
            return (
              <Grid key={skill.id} item xs container justify='center'>
                <Skill link={skill.link} icon={skill.icon} />
              </Grid>
            );
          })}
        </Grid>
      </SkillsContainer>
    );
  }
}

export default Skills;
